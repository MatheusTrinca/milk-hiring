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
  LoadingContainer,
} from './styles';
import { TextInput } from '../../components/TextInput';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { MainButton } from '../../components/MainButton';
import { useCheckListContext } from '../../hooks/useCheckListContext';
import { HomeStackParamList } from '../../routes/app.routes';

export const EditScreen: React.FC = () => {
  const navigation = useNavigation();
  const { checkListItems, error } = useCheckListContext();

  const { params } = useRoute<RouteProp<HomeStackParamList, 'EditScreen'>>();

  const checkListItem = checkListItems.find(item => item._id === params.itemId);

  const [farmName, setFarmName] = useState(checkListItem?.farmer?.name || '');
  const [farmerName, setFarmerName] = useState(checkListItem?.from?.name || '');
  const [farmCity, setFarmCity] = useState(checkListItem?.farmer?.city || '');
  const [milkAmount, setMilkAmount] = useState(
    checkListItem?.amount_of_milk_produced || ''
  );
  const [cowsHead, setCowsHead] = useState(
    checkListItem?.number_of_cows_head || ''
  );

  // CheckList Type DropDown States
  const [openTypeDropDown, setOpenTypeDropDown] = useState(false);
  const [type, setType] = useState(
    {
      label: checkListItem?.type,
      value: checkListItem?.type,
    } || null
  );
  const [types, setTypes] = useState([
    { label: 'BPA', value: 'BPA' },
    { label: 'Antibiótico', value: 'Antibiótico' },
    { label: 'BPF', value: 'BPF' },
  ]);

  // CheckBox hasSupervisor
  const [openHadSupervisionDropDown, setOpenHadSupervisionDropDown] =
    useState(false);
  const [hadSupervision, setHadSupervision] = useState(
    {
      label: checkListItem?.had_supervision ? 'Yes' : 'No',
      value: checkListItem?.had_supervision,
    } || null
  );
  const [hadSupervisionItems, setHadSupervisionItems] = useState([
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ]);

  const handleEdit = () => {
    if (
      farmerName.length === 0 ||
      farmName.length === 0 ||
      farmCity.length === 0 ||
      type === null ||
      milkAmount.length === 0 ||
      cowsHead.length === 0 ||
      hadSupervision === null
    ) {
      return Alert.alert(
        'Milk Hiring Error',
        'Please fill all form the fields'
      );
    }
  };

  if (error) {
    return <>{Alert.alert('Error Fetching Data')}</>;
  }

  if (!checkListItem) {
    return <LoadingContainer />;
  }

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
          <TextInput
            label="Farm Name"
            value={farmName}
            onChangeText={setFarmName}
          />
          <TextInput
            label="Farmer Name"
            value={farmerName}
            onChangeText={setFarmerName}
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
              placeholder={type.value}
            />
          </SelectorContainer>
          <TextInput
            value={milkAmount}
            onChangeText={setMilkAmount}
            label="Amount of Milk Produced"
            keyboardType="number-pad"
          />
          <TextInput
            label="Number of Cows Head"
            onChangeText={setCowsHead}
            keyboardType="number-pad"
            value={cowsHead}
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
              placeholder={hadSupervision.label}
            />
          </SelectorContainer>
          <MainButton title="Edit Checklist" onPress={handleEdit} />
        </FormContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};
