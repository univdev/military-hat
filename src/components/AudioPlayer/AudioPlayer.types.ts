import { type MouseEventHandler } from 'react';

export interface AudioPlayerProps {
  src: string
  loop?: boolean
  volumn?: number
  onMetadataLodded?: MouseEventHandler<HTMLAudioElement>
  onEnded?: MouseEventHandler<HTMLAudioElement>
}
