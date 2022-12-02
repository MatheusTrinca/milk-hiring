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
  SelectorOptions,
  OptionLabel,
  Option,
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
import { useCheckListContext } from '../../hooks/useCheckListContext';
import Checkbox from 'expo-checkbox';
import theme from '../../global/styles/theme';
import { AppScreenNavigationProp } from '../../routes/app.routes';

export const CreateScreen: React.FC = () => {
  const navigation = useNavigation<AppScreenNavigationProp>();

  const { createCheckList, error } = useCheckListContext();

  const [farmName, setFarmName] = useState('');
  const [farmerName, setFarmerName] = useState('');
  const [farmCity, setFarmCity] = useState('');
  const [milkAmount, setMilkAmount] = useState('');
  const [cowsHead, setCowsHead] = useState('');
  const [supervisorName, setSupervisorName] = useState('');

  const [typeChecked, setTypeChecked] = useState('Antibiótico');
  const [hadSupervisorChecked, setHadSupervisorChecked] =
    useState<boolean>(false);

  const handleSubmit = () => {
    if (
      farmerName.length === 0 ||
      farmName.length === 0 ||
      farmCity.length === 0 ||
      typeChecked.length === 0 ||
      milkAmount.length === 0 ||
      cowsHead.length === 0
    ) {
      return Alert.alert(
        'Milk Hiring Error',
        'Please fill all form the fields'
      );
    }

    const data = {
      _id: Date.now(),
      type: typeChecked,
      amount_of_milk_produced: milkAmount,
      farmerName: farmName,
      farmerCity: farmCity,
      from: farmerName,
      to: supervisorName,
      number_of_cows_head: cowsHead,
      had_supervision: hadSupervisorChecked,
      latitude: 0,
      longitude: 0,
      created_at: new Date(),
      updated_at: new Date(),
      __v: 0,
    };

    createCheckList(data);
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <HeaderContainer>
            <Title>Create Checklist</Title>
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
            <TextInput
              label="City"
              value={farmCity}
              onChangeText={setFarmCity}
            />
            <SelectorContainer>
              <SelectorLabel>Type</SelectorLabel>
              <SelectorOptions>
                <Option>
                  <Checkbox
                    value={typeChecked === 'Antibiótico' ? true : false}
                    onValueChange={() =>
                      typeChecked === 'Antibiótico'
                        ? setTypeChecked('')
                        : setTypeChecked('Antibiótico')
                    }
                    color={
                      typeChecked === 'Antibiótico'
                        ? theme.colors.primary
                        : undefined
                    }
                  />
                  <OptionLabel>Antibiótico</OptionLabel>
                </Option>
                <Option>
                  <Checkbox
                    value={typeChecked === 'BPA' ? true : false}
                    onValueChange={() =>
                      typeChecked === 'BPA'
                        ? setTypeChecked('')
                        : setTypeChecked('BPA')
                    }
                    color={
                      typeChecked === 'BPA' ? theme.colors.primary : undefined
                    }
                  />
                  <OptionLabel>BPA</OptionLabel>
                </Option>
                <Option>
                  <Checkbox
                    value={typeChecked === 'BPF' ? true : false}
                    onValueChange={() =>
                      typeChecked === 'BPF'
                        ? setTypeChecked('')
                        : setTypeChecked('BPF')
                    }
                    color={
                      typeChecked === 'BPF' ? theme.colors.primary : undefined
                    }
                  />
                  <OptionLabel>BPF</OptionLabel>
                </Option>
              </SelectorOptions>
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
              <SelectorOptions>
                <Option>
                  <Checkbox
                    value={hadSupervisorChecked}
                    onValueChange={() =>
                      setHadSupervisorChecked(!hadSupervisorChecked)
                    }
                    color={
                      hadSupervisorChecked ? theme.colors.primary : undefined
                    }
                  />
                  <OptionLabel>YES</OptionLabel>
                </Option>
                <Option>
                  <Checkbox
                    value={!hadSupervisorChecked}
                    onValueChange={() =>
                      setHadSupervisorChecked(!hadSupervisorChecked)
                    }
                    color={
                      hadSupervisorChecked
                        ? theme.colors.primary
                        : theme.colors.primary
                    }
                  />
                  <OptionLabel>NO</OptionLabel>
                </Option>
              </SelectorOptions>
            </SelectorContainer>
            {hadSupervisorChecked && (
              <TextInput
                label="Supervisor Name"
                value={supervisorName}
                onChangeText={setSupervisorName}
              />
            )}
            <MainButton onPress={handleSubmit} title="Add Checklist" />
          </FormContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
