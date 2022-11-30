import { useContext } from 'react';
import { CheckListContext } from '../contexts/CheckListContext';

export const useCheckListContext = () => {
  const context = useContext(CheckListContext);

  if (!context) {
    throw new Error('useCheckContext must be used inside a CheckListProvider');
  }

  return context;
};
