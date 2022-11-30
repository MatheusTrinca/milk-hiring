import { View, Text } from 'react-native';
import React from 'react';
import { ICheckItem } from '../../models/CheckItem';
import {
  ButtonsContainer,
  CityName,
  CityTitle,
  Container,
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

interface ICheckItemCardProps {
  item: ICheckItem;
}

export const CheckItemCard: React.FC<ICheckItemCardProps> = ({ item }) => {
  return (
    <Container>
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
        <EditButtonContainer>
          <EditIcon name="edit" />
          <EditText>Edit</EditText>
        </EditButtonContainer>
        <DeleteButtonContainer>
          <DeleteIcon name="delete" />
          <DeleteText>Delete</DeleteText>
        </DeleteButtonContainer>
      </ButtonsContainer>
    </Container>
  );
};
