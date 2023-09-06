import { type ReactEventHandler } from 'react';

export interface AudioPlayerContextValues {
  prepare: (options: PlayerOptions) => number
  play: (index: number) => any
  pause: (index: number) => any
  stop: (index: number) => any
}

export interface PlayerOptions {
  src: string
  loop?: boolean
  volumn?: number
  onMetadataLoaded?: ReactEventHandler<HTMLAudioElement>
  onEnded?: ReactEventHandler<HTMLAudioElement>
}
