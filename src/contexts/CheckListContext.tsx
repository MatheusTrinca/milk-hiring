import { Alert } from 'react-native';
import React, { useCallback, createContext, useState, useEffect } from 'react';
import { ICheckItem } from '../models/CheckItem';
import { api, connStatus } from '../services/api';
import { getRealm } from '../database/realm';
import { CheckListType } from '../database/schemas/CheckListSchema';
import {
  formatFromRealm,
  formatDataToRealm,
  formatArrayToSync,
  formatToEdit,
} from '../utils/formatData';

interface IProps {
  children: React.ReactElement;
}

interface ICheckContext {
  checkListItems: ICheckItem[];
  loading: boolean;
  error: Error | null;
  connectionStatus: string;
  createCheckList: (checkList: CheckListType) => Promise<void>;
  updateCheckList: (checkList: CheckListType, id: number) => Promise<void>;
  deleteCheckList: (id: number) => Promise<void>;
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
        'You seems to not have an internet connection',
        'Using offline mode now, your data will be synced next time you connect internet'
      );
    }
  }, []);

  // This function runs when connection status is healthy, destroying old RealmData and saving with new
  const fetchCheckListItems = async () => {
    const realm = await getRealm();
    console.log(connectionStatus);
    try {
      setLoading(true);
      const checkListsToSync = realm.objects('CheckList');

      // Syncing RealmDB data with API
      if (checkListsToSync.length > 0) {
        const checkListsItemsToSync = checkListsToSync.toJSON();

        const formatFromRealmArray = checkListsItemsToSync.map(item =>
          formatFromRealm(item as CheckListType)
        );

        const formattedToSync = formatArrayToSync(formatFromRealmArray);

        await api.post('/checkList', formattedToSync);

        // Destroying old RealmDB data
        realm.write(() => {
          realm.deleteAll();
        });
      }

      // Getting new updated data from API
      const { data } = await api.get('/checkList');
      setCheckListItems(data);
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    } finally {
      setLoading(false);
      realm.close();
    }
  };

  // This function runs when we connection status is unhealthy fetching data from Realm
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

  const createCheckList = async (checkList: CheckListType) => {
    const realm = await getRealm();
    try {
      setLoading(true);
      if (connectionStatus === 'healthy') {
        const checkListItem = formatFromRealm(checkList);
        await api.post('/checkList', formatArrayToSync([checkListItem]));
      } else {
        realm.write(() => {
          realm.create('CheckList', checkList);
        });
      }
      setCheckListItems(prevState => [
        ...prevState,
        formatFromRealm(checkList),
      ]);
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    } finally {
      realm.close();
      setLoading(false);
    }
  };

  const updateCheckList = async (checkList: CheckListType, id: number) => {
    const realm = await getRealm();
    try {
      setLoading(true);
      if (connectionStatus === 'healthy') {
        const checkListItem = formatToEdit(checkList);
        await api.put(`/checkList/${id}`, checkListItem);
      } else {
        realm.write(() => {
          realm.create('CheckList', checkList, Realm.UpdateMode.Modified);
        });
      }
      setCheckListItems(prevState =>
        prevState.map(item =>
          item._id === id ? formatFromRealm(checkList) : item
        )
      );
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    } finally {
      realm.close();
      setLoading(false);
    }
  };

  const deleteCheckList = async (id: number) => {
    const realm = await getRealm();
    try {
      if (connectionStatus === 'healthy') {
        await api.delete(`/checkList/${id}`);
      } else {
        const toDelete = realm.objects('CheckList').filtered(`_id = '${id}'`);
        realm.write(() => {
          realm.delete(toDelete);
        });
      }
      setCheckListItems(prevState => prevState.filter(item => item._id !== id));
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    } finally {
      realm.close();
      setLoading(false);
    }
  };

  return (
    <CheckListContext.Provider
      value={{
        checkListItems,
        loading,
        error,
        connectionStatus,
        createCheckList,
        updateCheckList,
        deleteCheckList,
      }}
    >
      {children}
    </CheckListContext.Provider>
  );
};
