import React from 'react';
import {
  Container,
  LogoImage,
  StartButton,
  StartButtonText,
  WelcomeMessage,
  WelcomeTitle,
} from './styles';
import logo from '../../assets/images/cow.png';
import { useAuthContext } from '../../hooks/useAuthContext';

export const OnBoardingScreen: React.FC = () => {
  const { loginUser } = useAuthContext();

  return (
    <Container>
      <LogoImage source={logo} />
      <WelcomeTitle>Welcome to the Milk Hiring App</WelcomeTitle>
      <WelcomeMessage>You in the control of your Farm </WelcomeMessage>
      <StartButton onPress={() => loginUser()}>
        <StartButtonText>Get started</StartButtonText>
      </StartButton>
    </Container>
  );
};
