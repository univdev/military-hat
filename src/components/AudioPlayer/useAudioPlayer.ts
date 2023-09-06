import { useContext } from 'react';
import { AudioPlayerContext } from './AudioPlayerProvider';

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);

  if (context === undefined) throw new Error('AudioPlayerContext 하위에서 사용해야 합니다.');

  return { ...context };
};
