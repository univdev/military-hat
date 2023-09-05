import { useContext } from 'react';
import { ConfettiContext } from './ConfettiProvider';

export const useConfetti = () => {
  const context = useContext(ConfettiContext);

  if (context === undefined) throw new Error('ConfettiProvider를 상위에 적용하여야 합니다.');
};
