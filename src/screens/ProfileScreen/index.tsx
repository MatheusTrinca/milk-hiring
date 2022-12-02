import React from 'react';
import { Container, Message, Spacing } from './styles';
import { useAuthContext } from '../../hooks/useAuthContext';
import { MainButton } from '../../components/MainButton';

//This is a sample screen where users or admins can see and edit their account details
export const ProfileScreen: React.FC = () => {
  const { logoutUser } = useAuthContext();

  return (
    <Container>
      <Message>
        This can be a sample screen where users or admins can see and edit their
        account details.
      </Message>
      <Spacing />
      <Message>Click Logout button below to logout</Message>
      <Spacing />
      <MainButton title="Logout" onPress={() => logoutUser()} />
    </Container>
  );
};
