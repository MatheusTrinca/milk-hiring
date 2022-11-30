import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { ICheckItem } from '../../models/CheckItem';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  margin-bottom: ${RFValue(12)}px; ;
`;

export const CheckList = styled(FlatList<ICheckItem>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
