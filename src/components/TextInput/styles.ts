import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(2)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const Input = styled.TextInput`
  background-color: white;
  border-radius: 8px;
  font-size: ${RFValue(16)}px;
  padding: ${RFValue(9)}px;
  border: 1px solid black;
`;
