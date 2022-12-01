import React, { useEffect } from 'react';
import { formatDistance, subDays } from 'date-fns';
import {
  BackButton,
  BackButtonIcon,
  Container,
  FarmCity,
  FarmName,
  HeaderContainer,
  InfoContainer,
  Label,
  LabelItem,
  Supervision,
  Type,
  LoadingContainer,
} from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCheckListContext } from '../../hooks/useCheckListContext';
import { HomeStackParamList } from '../../routes/app.routes';
import { Alert } from 'react-native';

export const CheckListScreen: React.FC = () => {
  const navigation = useNavigation();
  const { params } =
    useRoute<RouteProp<HomeStackParamList, 'CheckListScreen'>>();

  const { checkListItems, error } = useCheckListContext();

  const checkListItem = checkListItems.find(item => item._id === params.itemId);

  if (error) {
    return <>{Alert.alert('Error Fetching Data')}</>;
  }

  if (!checkListItem) {
    return <LoadingContainer />;
  }

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonIcon name="arrow-back-outline" />
        </BackButton>
      </HeaderContainer>
      <FarmName>{checkListItem?.farmer.name}</FarmName>
      <FarmCity>{checkListItem?.farmer.city}</FarmCity>
      <InfoContainer>
        <Label>
          Typo:{' '}
          <Type options={checkListItem?.type as 'Antibiótico' | 'BPA' | 'BPF'}>
            {checkListItem?.type}
          </Type>
        </Label>
        <Label>
          Farmer: <LabelItem>{checkListItem?.from.name}</LabelItem>
        </Label>
        {checkListItem?.to.name && (
          <Label>
            Supervisor: <LabelItem>{checkListItem?.to.name}</LabelItem>
          </Label>
        )}
        <Label>
          Amount of Milk Produced:{' '}
          <LabelItem>{checkListItem?.amount_of_milk_produced}</LabelItem>
        </Label>
        <Label>
          Number of Cows Head:{' '}
          <LabelItem>{checkListItem?.amount_of_milk_produced}</LabelItem>
        </Label>
      </InfoContainer>
      <Label>
        Had Supervision:{' '}
        <Supervision hadSupervision={checkListItem?.had_supervision}>
          {checkListItem?.had_supervision ? 'Yes' : 'No'}
        </Supervision>
      </Label>
      <Label>
        Created At:{' '}
        <LabelItem>
          {new Date(checkListItem?.created_at).toDateString()}
        </LabelItem>
      </Label>
      <Label>
        Last Update:{' '}
        <LabelItem>
          {formatDistance(
            subDays(new Date(checkListItem?.updated_at), 3),
            new Date(),
            { addSuffix: true }
          )}
        </LabelItem>
      </Label>
    </Container>
  );
};
