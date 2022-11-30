import React from 'react';
import {
  Container,
  Title,
  CheckList,
  LoadingContainer,
  HeaderContainer,
  AddButtonIcon,
  AddButton,
} from './styles';
import { ICheckItem } from '../../models/CheckItem';
import { ActivityIndicator, Alert, ListRenderItem } from 'react-native';
import { CheckItemCard } from '../../components/CheckItemCard';
import { useCheckListContext } from '../../hooks/useCheckListContext';
import theme from '../../global/styles/theme';

export const HomeScreen: React.FC = () => {
  const { checkListItems, loading, error } = useCheckListContext();

  const renderCheckListItem: ListRenderItem<ICheckItem> = ({ item }) => {
    return <CheckItemCard item={item} />;
  };

  if (error) {
    return <>{Alert.alert('Error Fetching Data')}</>;
  }

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator color={theme.colors.gray} size="small" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Your Checklists</Title>
        <AddButton>
          <AddButtonIcon name="text-box-plus-outline" />
        </AddButton>
      </HeaderContainer>
      <CheckList
        data={checkListItems}
        keyExtractor={(item: ICheckItem) =>
          String(item._id) || item.amount_of_milk_produced
        }
        renderItem={renderCheckListItem}
        style={{ width: '100%' }}
      />
    </Container>
  );
};
