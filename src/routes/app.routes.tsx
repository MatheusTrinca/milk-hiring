import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { EditScreen } from '../screens/EditScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { CheckListScreen } from '../screens/CheckListScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  EditScreen: { itemId: number };
  CheckListScreen: { itemId: number };
};

export type CreateStackParamList = {
  CreateScreen: undefined;
};

type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Create: NavigatorScreenParams<CreateStackParamList>;
};

export type AppScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<HomeStackParamList>
>;

export type CreateScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<CreateStackParamList>
>;

const Tab = createBottomTabNavigator<TabParamList>();
const Home = createNativeStackNavigator<HomeStackParamList>();
const Create = createNativeStackNavigator<CreateStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Home.Navigator screenOptions={{ headerShown: false }}>
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen name="EditScreen" component={EditScreen} />
      <Home.Screen name="CheckListScreen" component={CheckListScreen} />
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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return (
            <MaterialCommunityIcons
              name={
                route.name === 'Home' ? 'home-outline' : 'text-box-plus-outline'
              }
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: RFValue(14) },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="Create"
        component={CreateStack}
        options={{ unmountOnBlur: true }}
      />
    </Tab.Navigator>
  );
};
