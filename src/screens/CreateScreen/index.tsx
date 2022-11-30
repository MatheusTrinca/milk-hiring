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
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { MainButton } from '../../components/MainButton';

export const CreateScreen: React.FC = () => {
  const navigation = useNavigation();

  const [farmerName, setFarmerName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [farmCity, setFarmCity] = useState('');
  const [milkAmount, setMilkAmount] = useState('');
  const [cowsHead, setCowsHead] = useState('');

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

  const handleSubmit = () => {
    if (
      farmerName.length === 0 ||
      farmName.length === 0 ||
      farmCity.length === 0 ||
      type === null ||
      milkAmount.length === 0 ||
      cowsHead.length === 0 ||
      hadSupervision === null
    ) {
      Alert.alert('Milk Hiring Error', 'Please fill all form the fields');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Container>
        <HeaderContainer>
          <Title>Create Checklist</Title>
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonIcon name="arrow-back-outline" />
          </BackButton>
        </HeaderContainer>
        <FormContainer>
          <TextInput
            label="Farmer Name"
            value={farmerName}
            onChangeText={setFarmerName}
          />
          <TextInput
            label="Farm Name"
            value={farmName}
            onChangeText={setFarmName}
          />
          <TextInput label="City" value={farmCity} onChangeText={setFarmCity} />
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
            value={milkAmount}
            onChangeText={setMilkAmount}
            keyboardType="number-pad"
          />
          <TextInput
            label="Number of Cows Head"
            value={cowsHead}
            onChangeText={setCowsHead}
            keyboardType="number-pad"
          />
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
          <MainButton onPress={handleSubmit} title="Add Checklist" />
        </FormContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};
