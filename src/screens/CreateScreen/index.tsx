import React, { useState } from 'react';
import {
  BackButton,
  BackButtonIcon,
  Container,
  FormContainer,
  HeaderContainer,
  Title,
  SelectorContainer,
  SelectorLabel,
  Selector,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from '../../components/TextInput';

export const CreateScreen: React.FC = () => {
  const navigation = useNavigation();

  // CheckList Type DropDown States
  const [openTypeDropDown, setOpenTypeDropDown] = useState(false);
  const [type, setType] = useState(null);
  const [types, setTypes] = useState([
    { label: 'BPA', value: 'BPA' },
    { label: 'Antibiótico', value: 'Antibiótico' },
    { label: 'BPF', value: 'BPF' },
  ]);

  // CheckBox hasSupervisor
  const [openHadSupervisionDropDown, setOpenHadSupervisionDropDown] =
    useState(false);
  const [hadSupervision, setHadSupervision] = useState(null);
  const [hadSupervisionItems, setHadSupervisionItems] = useState([
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ]);

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonIcon name="arrow-back-outline" />
        </BackButton>
        <Title>Create Checklist</Title>
      </HeaderContainer>
      <FormContainer>
        <TextInput label="Farmer Name" />
        <TextInput label="Farm Name" />
        <TextInput label="City" />
        <SelectorContainer>
          <SelectorLabel>Type</SelectorLabel>
          <Selector
            open={openTypeDropDown}
            value={type}
            items={types}
            setOpen={setOpenTypeDropDown}
            setValue={setType}
            setItems={setTypes}
          />
        </SelectorContainer>
        <TextInput label="Amount of Milk Produced" />
        <TextInput label="Number of Cows Head" />
        <SelectorContainer>
          <SelectorLabel>Had Supervision</SelectorLabel>
          <Selector
            open={openHadSupervisionDropDown}
            value={hadSupervision}
            items={hadSupervisionItems}
            setOpen={setOpenHadSupervisionDropDown}
            setValue={setHadSupervision}
            setItems={setHadSupervisionItems}
          />
        </SelectorContainer>
      </FormContainer>
    </Container>
  );
};
