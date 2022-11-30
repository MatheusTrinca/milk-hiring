import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 0 ${RFValue(16)}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
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
  background-color: ${({ theme }) => theme.colors.light}; ;
`;

export const BackButtonIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(28)}px;
`;

export const FormContainer = styled.View`
  margin-top: ${RFValue(10)}px;
`;

export const SelectorContainer = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const SelectorLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(2)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const Selector = styled(DropDownPicker)``;
