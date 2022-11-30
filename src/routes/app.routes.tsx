import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { EditScreen } from '../screens/EditScreen';
import { CreateScreen } from '../screens/CreateScreen';

type HomeStackParamList = {
  HomeScreen: undefined;
  EditScreen: { itemId: string };
};

type CreateStackParamList = {
  CreateScreen: undefined;
};

type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Create: NavigatorScreenParams<CreateStackParamList>;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Home = createNativeStackNavigator<HomeStackParamList>();
const Create = createNativeStackNavigator<CreateStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Home.Navigator screenOptions={{ headerShown: false }}>
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen name="EditScreen" component={EditScreen} />
    </Home.Navigator>
  );
};

const CreateStack: React.FC = () => {
  return (
    <Create.Navigator screenOptions={{ headerShown: false }}>
      <Create.Screen name="CreateScreen" component={CreateScreen} />
    </Create.Navigator>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Create" component={CreateStack} />
    </Tab.Navigator>
  );
};
