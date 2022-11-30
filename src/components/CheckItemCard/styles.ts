import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity``;

export const ContainerInfo = styled.View`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  padding: ${RFValue(12)}px;
  margin-bottom: ${RFValue(8)}px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View``;

export const FarmerTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const FarmerName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const FarmTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const FarmName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const CityTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const CityName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const DateName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EditButtonContainer = styled.TouchableOpacity`
  align-items: center;
`;

export const EditIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(28)}px;
`;

export const EditText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DeleteButtonContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: ${RFValue(16)}px; ;
`;

export const DeleteIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${RFValue(28)}px;
`;

export const DeleteText = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
