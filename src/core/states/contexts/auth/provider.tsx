import { PropsWithChildren, useState } from 'react';
import { AuthContext } from './store';
import { UserModel } from '@core/models';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserModel | undefined | null>(null);

  const login = () => {};
  const signup = () => {};
  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
