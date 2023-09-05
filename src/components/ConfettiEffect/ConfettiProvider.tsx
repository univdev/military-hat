import { type PropsWithChildren, createContext, useCallback } from 'react';
import { type ConfettiContextValues } from './ConfettiProvider.types';

export const ConfettiContext = createContext<ConfettiContextValues | undefined>(undefined);

export const ConfettiProvider = ({ children }: PropsWithChildren) => {
  const show = useCallback(() => {

  }, []);

  return (
    <ConfettiContext.Provider value={{ show }}>
      { children }
    </ConfettiContext.Provider>
  );
};
