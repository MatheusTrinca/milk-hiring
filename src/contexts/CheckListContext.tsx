import { Alert } from 'react-native';
import React, { useCallback, createContext, useState, useEffect } from 'react';
import { ICheckItem } from '../models/CheckItem';
import { api, connStatus } from '../services/api';
import { getRealm } from '../database/realm';
import { CheckListType } from '../database/schemas/CheckListSchema';
import { formatFromRealm, formatDataToRealm } from '../utils/formatData';

interface IProps {
  children: React.ReactElement;
}

interface ICheckContext {
  checkListItems: ICheckItem[];
  loading: boolean;
  error: Error | null;
  connectionStatus: string;
  checkListItem: ICheckItem;
  fetchCheckList: (id: number) => Promise<void>;
  createCheckList: (checkList: CheckListType) => Promise<void>;
}

export const CheckListContext = createContext<ICheckContext>(
  {} as ICheckContext
);

export const CheckListProvider: React.FC<IProps> = ({ children }) => {
  const [checkListItems, setCheckListItems] = useState<ICheckItem[]>(
    [] as ICheckItem[]
  );
  const [connectionStatus, setConnectionStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [checkListItem, setCheckListItem] = useState<ICheckItem>(
    {} as ICheckItem
  );

  useEffect(() => {
    console.log('Checando Healthy');
    checkConnectionHealthy();
  }, []);

  useEffect(() => {
    console.log('Fetching Items');
    if (connectionStatus === 'healthy') {
      fetchCheckListItems();
    } else {
      fetchCheckListFromRealm();
    }
  }, [connectionStatus]);

  const checkConnectionHealthy = useCallback(async () => {
    try {
      const { data } = await connStatus.get('/');
      if (data) {
        setConnectionStatus(data.status);
      }
    } catch (err) {
      Alert.alert(
        'Milk Hiring',
        'You seems to not have an internet connection, using offline mode'
      );
    }
  }, []);

  // This function runs when connection status is healthy, destroying old RealmData and saving with new
  const fetchCheckListItems = async () => {
    const realm = await getRealm();
    console.log(connectionStatus);
    try {
      setLoading(true);
      const { data } = await api.get('/checkList');
      if (data) {
        setCheckListItems(data);
        realm.write(() => {
          realm.deleteAll();
        });
        data.forEach((item: ICheckItem) => {
          realm.write(() => {
            realm.create('CheckList', {
              _id: item._id || +Date.now(),
              ...formatDataToRealm(item),
            });
          });
        });
      }
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    } finally {
      setLoading(false);
      realm.close();
    }
  };

  // This function runs when we connection status is unhealthy
  const fetchCheckListFromRealm = async () => {
    const realm = await getRealm();
    try {
      setLoading(true);
      const response = realm.objects('CheckList').toJSON();
      const formatted = response.map(item =>
        formatFromRealm(item as CheckListType)
      );
      setCheckListItems(formatted);
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    } finally {
      realm.close();
      setLoading(false);
    }
  };

  const fetchCheckList = async (id: number) => {
    try {
      const data = checkListItems.find(item => item._id === id);
      if (data) {
        return setCheckListItem(data);
      }
      throw new Error('CheckList not found');
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    }
  };

  const createCheckList = async (checkList: CheckListType) => {
    const realm = await getRealm();
    try {
      setLoading(true);
      realm.write(() => {
        realm.create('CheckList', checkList);
      });
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    } finally {
      setLoading(false);
    }
  };

  // This gets the data from CheckListSync and send to the API syncing
  // After syncing, all CheckListSync data is deleted
  // const syncronyzeDatabase = useCallback(async () => {
  //   // Trazer os dados do RealmDB
  //   // Fazer um post desses dados na api
  // }, []);

  return (
    <CheckListContext.Provider
      value={{
        checkListItems,
        loading,
        error,
        connectionStatus,
        checkListItem,
        fetchCheckList,
        createCheckList,
      }}
    >
      {children}
    </CheckListContext.Provider>
  );
};
