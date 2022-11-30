import React from 'react';
import { Container, Title, CheckList } from './styles';
import checklists from '../../assets/data/checklists.json';
import { ICheckItem } from '../../models/CheckItem';
import { ListRenderItem } from 'react-native';
import { CheckItemCard } from '../../components/CheckItemCard';

export const HomeScreen = () => {
  const renderCheckListItem: ListRenderItem<ICheckItem> = ({ item }) => {
    return <CheckItemCard item={item} />;
  };

  return (
    <Container>
      <Title>Your Checklists</Title>
      <CheckList
        data={checklists}
        keyExtractor={(item: ICheckItem) =>
          String(item._id) || item.amount_of_milk_produced
        }
        renderItem={renderCheckListItem}
        style={{ width: '100%' }}
      />
    </Container>
  );
};
