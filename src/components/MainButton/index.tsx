import React from 'react';
import { View, Text, TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface IMainButtonProps extends TouchableOpacityProps {
  title: string;
}

export const MainButton: React.FC<IMainButtonProps> = ({ title, ...props }) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  );
};
