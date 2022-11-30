import React from 'react';
import item from '../../assets/data/checklist.json';
import { ICheckItem } from '../../models/CheckItem';
import {
  Container,
  FarmCity,
  FarmName,
  InfoContainer,
  Label,
  LabelItem,
  Supervision,
  Type,
} from './styles';

interface ICheckItemProps {
  checklist: ICheckItem;
}

export const CheckListScreen: React.FC<ICheckItemProps> = ({
  checklist = item,
}) => {
  return (
    <Container>
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
        Created At: <LabelItem>{checklist.created_at}</LabelItem>
      </Label>
      <Label>
        Last Update: <LabelItem>{checklist.updated_at}</LabelItem>
      </Label>
    </Container>
  );
};
