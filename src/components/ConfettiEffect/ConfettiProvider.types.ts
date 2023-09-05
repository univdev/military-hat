import { type ReactNode } from 'react';

export interface ConfettiContextValues {
  show: (element: ReactNode, options?: ConfettiOptions) => any
  hide: (index: number) => any
}

export interface ConfettiOptions {
  duration?: number
}
