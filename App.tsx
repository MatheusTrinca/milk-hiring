import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
SplashScreen.preventAutoHideAsync();
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckListProvider } from './src/contexts/CheckListContext';
import { AuthProvider } from './src/contexts/AuthContext';

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_700Bold,
          Roboto_500Medium,
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CheckListProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </CheckListProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
