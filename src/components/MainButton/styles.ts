import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: ${RFValue(8)}px 0;
`;

export const Title = styled.Text`
  color: white;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
