import { createContext, useState } from 'react';

interface IProps {
  children: React.ReactElement;
}
interface IAuthContext {
  isLogged: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const loginUser = () => {
    setIsLogged(true);
  };

  const logoutUser = () => {
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
