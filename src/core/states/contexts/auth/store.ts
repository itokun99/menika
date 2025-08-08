import { UserModel } from '@core/models';
import React from 'react';

export interface AuthContextValue {
  login: () => void;
  signup: () => void;
  logout: () => void;
  user?: UserModel | null;
}

const initialValue: AuthContextValue = {
  login: () => {},
  signup: () => {},
  logout: () => {},
  user: null,
};

export const AuthContext = React.createContext(initialValue);
