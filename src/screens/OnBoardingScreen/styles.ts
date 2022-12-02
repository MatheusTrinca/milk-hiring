import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  width: 90%;
  height: ${RFValue(300)}px;
`;

export const WelcomeTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: ${RFValue(4)}px;
`;

export const WelcomeMessage = styled.Text`
  font-size: ${RFValue(18)}px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StartButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background-color: white;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(20)}px;
  width: 80%;
  align-items: center;
  margin-top: ${RFValue(40)}px;
`;

export const StartButtonText = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
