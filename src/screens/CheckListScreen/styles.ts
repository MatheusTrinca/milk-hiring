import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 0 ${RFValue(16)}px;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;
  width: 100%;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.light}; ;
`;

export const BackButtonIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(28)}px;
`;

export const FarmName = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  text-align: center;
`;

export const FarmCity = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

export const InfoContainer = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: ${RFValue(12)}px;
`;

export const Type = styled.Text<{ options: 'Antibiótico' | 'BPA' | 'BPF' }>`
  color: ${props =>
    props.options === 'Antibiótico'
      ? props.theme.colors.secondary
      : props.options === 'BPA'
      ? props.theme.colors.tertiary
      : props.theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LabelItem = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Supervision = styled.Text<{ hadSupervision: boolean }>`
  color: ${props =>
    props.hadSupervision
      ? props.theme.colors.success
      : props.theme.colors.danger};
`;
