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
import { TextInput } from '../../components/TextInput';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MainButton } from '../../components/MainButton';

export const EditScreen: React.FC = () => {
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Container>
        <HeaderContainer>
          <Title>Edit Checklist</Title>
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonIcon name="arrow-back-outline" />
          </BackButton>
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
          <TextInput
            label="Amount of Milk Produced"
            keyboardType="number-pad"
          />
          <TextInput label="Number of Cows Head" keyboardType="number-pad" />
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
          <MainButton title="Edit Checklist" />
        </FormContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};