import React from 'react';
import { Container, LogoImage, WelcomeMessage } from './styles';
import logo from '../../assets/images/cow.png';

export const Onboarding = () => {
  return (
    <Container>
      <LogoImage source={logo} />
      <WelcomeMessage>Welcome to the Milk Hiring App</WelcomeMessage>
    </Container>
  );
};
