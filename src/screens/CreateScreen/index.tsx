import React from 'react';
import {
  BackButton,
  BackButtonIcon,
  Container,
  FormContainer,
  HeaderContainer,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from '../../components/TextInput';

export const CreateScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderContainer>
        <Title>Create Checklist</Title>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonIcon name="arrow-back-outline" />
        </BackButton>
      </HeaderContainer>
      <FormContainer>
        <TextInput label="Farmer Name" />
        <TextInput label="Farm Name" />
        <TextInput label="City" />
      </FormContainer>
    </Container>
  );
};
