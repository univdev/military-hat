import { Fragment, useCallback, useEffect, useRef } from 'react';
import Tada from '../../assets/mp3/tada.mp3';
import { useAudioPlayer } from '../../components/AudioPlayer/useAudioPlayer';

export const TadaAudioPlayer = () => {
  const id = useRef<number>();
  const { prepare, play } = useAudioPlayer();

  const onPlay = useCallback(() => {
    id.current && play(id.current);
  }, []);

  useEffect(() => {
    id.current = prepare({ src: Tada, volumn: 0.6, onMetadataLoaded: onPlay });
  }, []);

  return (
    <Fragment />
  );
};
