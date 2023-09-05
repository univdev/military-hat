import { type PropsWithChildren, createContext, useCallback, type ReactNode, useState } from 'react';
import { type ConfettiOptions, type ConfettiContextValues } from './ConfettiProvider.types';
import _ from 'lodash';
import { ConfettiOptionContext } from './ConfettiOptionContext';

export const ConfettiContext = createContext<ConfettiContextValues | undefined>(undefined);

let mapIndex = 1;

export const ConfettiProvider = ({ children }: PropsWithChildren) => {
  const [confettiElements, setConfettiElements] = useState<Map<number, { element: ReactNode, options?: ConfettiOptions }>>(new Map());

  const show = useCallback((element: ReactNode, options: ConfettiOptions = {}) => {
    const currentMapIndex = mapIndex;
    const cloned = _.clone(confettiElements);
    const { duration } = options;

    cloned.set(currentMapIndex, { element, options });
    setConfettiElements(cloned);

    if (duration !== undefined) {
      window.setTimeout(() => {
        remove(currentMapIndex);
      }, duration);
    }

    mapIndex += 1;

    return currentMapIndex;
  }, []);

  const remove = useCallback((index: number) => {
    const cloned = _.clone(confettiElements);

    cloned.delete(index);
    setConfettiElements(cloned);
  }, []);

  return (
    <ConfettiContext.Provider value={{ show, hide: remove }}>
      { children }
      {
        Array.from(confettiElements).map(([_, { element, options }]) => {
          return (
            <ConfettiOptionContext.Provider
              key={Date.now()}
              value={options}
            >
              { element }
              </ConfettiOptionContext.Provider>
          );
        })
      }
    </ConfettiContext.Provider>
  );
};
