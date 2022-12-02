import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(16)}px;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${RFValue(16)}px;
`;

export const Spacing = styled.Text`
  margin: ${RFValue(16)}px;
`;
