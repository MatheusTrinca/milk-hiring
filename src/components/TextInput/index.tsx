import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';

interface ITextInputProps extends TextInputProps {
  label: string;
}

export const TextInput: React.FC<ITextInputProps> = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...props} />
    </Container>
  );
};
