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
    try {
      const { data } = await api.get('/checkList');
      console.log(data);
    } catch (err) {
      console.error(err);
      setError(new Error(err as string));
    }
  }, []);

  return (
    <CheckListContext.Provider value={{ checkListItems, loading, error }}>
      {children}
    </CheckListContext.Provider>
  );
};

export const useCheckContext = () => {
  const context = useContext(CheckListContext);

  if (!context) {
    throw new Error('useCheckContext deve ser usado dentro de um AuthProvider');
  }

  return context;
};
