import { View, Text } from 'react-native';
import React, {
  useCallback,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { ICheckItem } from '../models/CheckItem';
import { api } from '../services/api';

interface IProps {
  children: React.ReactElement;
}

interface ICheckContext {
  checkListItems: ICheckItem[];
  loading: boolean;
  error: Error | null;
}

export const CheckListContext = createContext<ICheckContext>(
  {} as ICheckContext
);

export const CheckListProvider: React.FC<IProps> = ({ children }) => {
  const [checkListItems, setCheckListItems] = useState<ICheckItem[]>(
    [] as ICheckItem[]
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCheckListItems();
  }, []);

  const fetchCheckListItems = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/checkList');
      setCheckListItems(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(new Error(err as string));
    }
  }, []);

  return (
    <CheckListContext.Provider value={{ checkListItems, loading, error }}>
      {children}
    </CheckListContext.Provider>
  );
};
