import { useContext } from 'react';
import { AuthContext } from './store';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
