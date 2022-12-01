import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 0 ${RFValue(16)}px;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;
  width: 100%;
  position: relative;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  flex: 1;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: auto;
  position: absolute;
  left: ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const BackButtonIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(28)}px;
`;

export const FormContainer = styled.View``;

export const SelectorContainer = styled.View``;

export const SelectorLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(2)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const SelectorOptions = styled.View`
  flex-direction: row;
  margin: ${RFValue(12)}px ${RFValue(4)}px;
`;

export const Option = styled.View`
  flex-direction: row;
  margin-right: ${RFValue(24)}px;
`;

export const OptionLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(4)}px;
`;
