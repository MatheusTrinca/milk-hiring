import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { StatusBar } from 'expo-status-bar';
import theme from '../global/styles/theme';
import { useAuthContext } from '../hooks/useAuthContext';

export const Routes: React.FC = () => {
  const { isLogged } = useAuthContext();

  return isLogged ? (
    <>
      <AppRoutes />
      <StatusBar
        style="auto"
        translucent
        backgroundColor={theme.colors.light}
      />
    </>
  ) : (
    <>
      <AuthRoutes />
      <StatusBar
        style="auto"
        translucent
        backgroundColor={theme.colors.primary}
      />
    </>
  );
};
