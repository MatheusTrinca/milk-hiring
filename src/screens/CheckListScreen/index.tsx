import React from 'react';
import { formatDistance, subDays } from 'date-fns';
import item from '../../assets/data/checklist.json';
import { ICheckItem } from '../../models/CheckItem';
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
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface ICheckItemProps {
  checklist: ICheckItem;
}

export const CheckListScreen: React.FC<ICheckItemProps> = ({
  checklist = item,
}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonIcon name="arrow-back-outline" />
        </BackButton>
      </HeaderContainer>
      <FarmName>{checklist.farmer.name}</FarmName>
      <FarmCity>{checklist.farmer.city}</FarmCity>
      <InfoContainer>
        <Label>
          Typo:{' '}
          <Type options={checklist.type as 'Antibiótico' | 'BPA' | 'BPF'}>
            {checklist.type}
          </Type>
        </Label>
        <Label>
          Farmer: <LabelItem>{checklist.from.name}</LabelItem>
        </Label>
        {checklist.to.name && (
          <Label>
            Supervisor: <LabelItem>{checklist.to.name}</LabelItem>
          </Label>
        )}
        <Label>
          Amount of Milk Produced:{' '}
          <LabelItem>{checklist.amount_of_milk_produced}</LabelItem>
        </Label>
        <Label>
          Number of Cows Head:{' '}
          <LabelItem>{checklist.amount_of_milk_produced}</LabelItem>
        </Label>
      </InfoContainer>
      <Label>
        Had Supervision:{' '}
        <Supervision hadSupervision={checklist.had_supervision}>
          {checklist.had_supervision ? 'Yes' : 'No'}
        </Supervision>
      </Label>
      <Label>
        Created At:{' '}
        <LabelItem>{new Date(checklist.created_at).toDateString()}</LabelItem>
      </Label>
      <Label>
        Last Update:{' '}
        <LabelItem>
          {formatDistance(
            subDays(new Date(checklist.updated_at), 3),
            new Date(),
            { addSuffix: true }
          )}
        </LabelItem>
      </Label>
    </Container>
  );
};
