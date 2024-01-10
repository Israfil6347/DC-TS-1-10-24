import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { useSessionStorage } from 'global_shared/hooks/useStorage';
import { createContext, useState } from 'react';

export type AuthUserContextType = {
  authUser: IAuthUserModel;
  storeAuthUserData: (currentUser: IAuthUserModel) => void;
  clearAuthUserData: () => void;
};

const AuthUserContext = createContext<AuthUserContextType | null>(null);

export const AuthUserContextProvider = ({ children }: any) => {
  const [user, setUser, removeUser] = useSessionStorage('user', null);
  const [authUser, setAuthUser] = useState(user);

  const storeAuthUserData = (userData: any) => {
    setUser(userData);
    setAuthUser(userData);
  };

  const clearAuthUserData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rolePermissionIds');
    setAuthUser(null);
    removeUser();
  };

  return (
    <AuthUserContext.Provider
      value={{
        authUser,
        storeAuthUserData,
        clearAuthUserData,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContext;
