import { createContext } from 'react';
import { type ConfettiOptionContextValues } from './ConfettiOptionContext.types';

export const ConfettiOptionContext = createContext<ConfettiOptionContextValues | undefined>(undefined);
