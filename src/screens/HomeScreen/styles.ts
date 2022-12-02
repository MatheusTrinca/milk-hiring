import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { ICheckItem } from '../../models/CheckItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 0 ${RFValue(16)}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
`;

export const CheckList = styled(FlatList<ICheckItem>).attrs({
  contentContainerStyle: {
    paddingTop: 16,
  },
})``;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  margin-right: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.light}; ;
`;

export const AddButtonIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(32)}px;
`;

export const StatusContainer = styled.View`
  margin-left: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;
`;

export const StatusIndicator = styled.View<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${props =>
    props.color === 'danger'
      ? props.theme.colors.danger
      : props.theme.colors.success};
  margin-right: 4px;
`;

export const StatusText = styled.Text<{ color: string }>`
  color: ${props =>
    props.color === 'danger'
      ? props.theme.colors.danger
      : props.theme.colors.success};
  font-size: ${RFValue(14)}px;
`;
