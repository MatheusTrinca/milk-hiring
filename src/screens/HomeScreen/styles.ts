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
  align-items: center;
  margin-bottom: ${RFValue(12)}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  flex: 1;
  text-align: center;
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
  margin-left: auto;
`;

export const AddButtonIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(32)}px;
`;
