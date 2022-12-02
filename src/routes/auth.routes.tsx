import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingScreen } from '../screens/OnBoardingScreen';

export type OnBoardingStackParamList = {
  OnBoardingScreen: undefined;
};

const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamList>();

export const AuthRoutes: React.FC = () => {
  return (
    <OnBoardingStack.Navigator
      initialRouteName="OnBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <OnBoardingStack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
      />
    </OnBoardingStack.Navigator>
  );
};
