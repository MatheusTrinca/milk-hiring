import { View, Text, Alert } from 'react-native';
import React from 'react';
import { ICheckItem } from '../../models/CheckItem';
import {
  ButtonsContainer,
  CityName,
  CityTitle,
  Container,
  ContainerInfo,
  DateName,
  DateTitle,
  DeleteButtonContainer,
  DeleteIcon,
  DeleteText,
  DetailsContainer,
  EditButtonContainer,
  EditIcon,
  EditText,
  FarmerName,
  FarmerTitle,
  FarmName,
  FarmTitle,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { AppScreenNavigationProp } from '../../routes/app.routes';
import { useCheckListContext } from '../../hooks/useCheckListContext';

interface ICheckItemCardProps {
  item: ICheckItem;
}

export const CheckItemCard: React.FC<ICheckItemCardProps> = ({ item }) => {
  const navigation = useNavigation<AppScreenNavigationProp>();

  const { deleteCheckList } = useCheckListContext();

  const handleDelete = () => {
    Alert.alert('Delete items', 'Are you sure you want to delete?', [
      {
        text: 'YES',
        onPress: () => deleteCheckList(item._id),
      },
      {
        text: 'NO',
        onPress: () => {},
      },
    ]);
  };

  const handleCheckList = () => {
    navigation.navigate('CheckListScreen', { itemId: item._id });
  };

  const handleEdit = () => {
    navigation.navigate('EditScreen', {
      itemId: item._id,
    });
  };

  return (
    <Container onPress={handleCheckList}>
      <ContainerInfo>
        <DetailsContainer>
          <FarmerTitle>
            Name: <FarmerName>{item.from.name}</FarmerName>
          </FarmerTitle>
          <FarmTitle>
            Farm: <FarmName>{item.farmer.name}</FarmName>
          </FarmTitle>
          <CityTitle>
            City: <CityName>{item.farmer.city}</CityName>
          </CityTitle>
          <DateTitle>
            Created at:{' '}
            <DateName>{new Date(item.created_at).toDateString()}</DateName>
          </DateTitle>
        </DetailsContainer>
        <ButtonsContainer>
          <EditButtonContainer onPress={handleEdit}>
            <EditIcon name="edit" />
            <EditText>Edit</EditText>
          </EditButtonContainer>
          <DeleteButtonContainer onPress={handleDelete}>
            <DeleteIcon name="delete" />
            <DeleteText>Delete</DeleteText>
          </DeleteButtonContainer>
        </ButtonsContainer>
      </ContainerInfo>
    </Container>
  );
};
