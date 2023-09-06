import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { type AudioPlayerProps } from './AudioPlayer.types';

export const AudioPlayer = forwardRef<HTMLAudioElement | undefined, AudioPlayerProps>(({
  loop,
  src,
  volumn,
  onEnded,
  onMetadataLodded
}, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => audioRef.current ?? undefined);

  useEffect(() => {
    if (audioRef.current === null) return;

    if (typeof volumn === 'number') audioRef.current.volume = volumn;
  }, [volumn]);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop={loop}
      onLoadedMetadata={onMetadataLodded}
      onEnded={onEnded}
    />
  );
});

AudioPlayer.displayName = 'AudioPlayer';