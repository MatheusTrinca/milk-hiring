import React from 'react';
import {
  Container,
  Title,
  CheckList,
  LoadingContainer,
  HeaderContainer,
  AddButtonIcon,
  AddButton,
  StatusContainer,
  StatusIndicator,
  StatusText,
} from './styles';
import { ICheckItem } from '../../models/CheckItem';
import { ActivityIndicator, Alert, ListRenderItem } from 'react-native';
import { CheckItemCard } from '../../components/CheckItemCard';
import { useCheckListContext } from '../../hooks/useCheckListContext';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { CreateScreenNavigationProp } from '../../routes/app.routes';

export const HomeScreen: React.FC = () => {
  const { checkListItems, loading, error, connectionStatus } =
    useCheckListContext();

  const navigation = useNavigation<CreateScreenNavigationProp>();

  const renderCheckListItem: ListRenderItem<ICheckItem> = ({ item }) => {
    return <CheckItemCard item={item} />;
  };

  if (error) {
    return <>{Alert.alert('Error Fetching Data')}</>;
  }

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator color={theme.colors.gray} size="small" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        {connectionStatus !== 'healthy' ? (
          <StatusContainer>
            <StatusIndicator color="danger" />
            <StatusText color="danger">Offline</StatusText>
          </StatusContainer>
        ) : (
          <StatusContainer>
            <StatusIndicator color="success" />
            <StatusText color="success">Online</StatusText>
          </StatusContainer>
        )}
        <Title>Your Checklists</Title>
        <AddButton
          onPress={() =>
            navigation.navigate('Create', { screen: 'CreateScreen' })
          }
        >
          <AddButtonIcon name="text-box-plus-outline" />
        </AddButton>
      </HeaderContainer>
      <CheckList
        data={checkListItems}
        keyExtractor={(item: ICheckItem) =>
          String(item._id) || item.amount_of_milk_produced
        }
        renderItem={renderCheckListItem}
        style={{ width: '100%' }}
      />
    </Container>
  );
};
