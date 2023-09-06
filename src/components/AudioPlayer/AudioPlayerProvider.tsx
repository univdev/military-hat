import { type PropsWithChildren, createContext, useCallback, useState, Fragment, useRef } from 'react';
import { type PlayerOptions, type AudioPlayerContextValues } from './AudioPlayerProvider.types';
import _ from 'lodash';
import { AudioPlayer } from './AudioPlayer';

export const AudioPlayerContext = createContext<AudioPlayerContextValues | undefined>(undefined);

let index = 1;

export const AudioPlayerProvider = ({ children }: PropsWithChildren) => {
  const [playlist, setPlayList] = useState<Map<number, { options: PlayerOptions }>>(new Map());
  const audioElementList = useRef<Map<number, HTMLAudioElement>>(new Map());

  const prepare = useCallback((options: PlayerOptions) => {
    const cloned = _.cloneDeep(playlist);

    cloned.set(index, { options });
    setPlayList(cloned);

    return index++;
  }, []);

  const getAudioElement = useCallback((index: number) => {
    const player = audioElementList.current.get(index);

    if (player === undefined) throw new Error('해당 플레이어를 찾을 수 없습니다.');

    return player;
  }, []);

  const play = useCallback((index: number) => {
    const player = getAudioElement(index);

    player.play();
  }, [getAudioElement]);

  const pause = useCallback(() => {
    const player = getAudioElement(index);

    player.pause();
  }, [getAudioElement]);

  const stop = useCallback(() => {
    const player = getAudioElement(index);

    player.currentTime = 0;
    player.pause();
  }, [getAudioElement]);

  return (
    <AudioPlayerContext.Provider
      value={{
        prepare,
        play,
        pause,
        stop
      }}
    >
      { children }
      {
        Array.from(playlist).map(([index, { options }]) => {
          const {
            loop,
            src,
            volumn,
            onEnded,
            onMetadataLoaded
          } = options;

          return (
            <Fragment
              key={Date.now()}
            >
              <AudioPlayer
                ref={(element) => {
                  if (element) audioElementList.current.set(index, element);
                }}
                src={src}
                loop={loop}
                volumn={volumn}
                onMetadataLodded={onMetadataLoaded}
                onEnded={onEnded}
              />
            </Fragment>
          );
        })
      }
    </AudioPlayerContext.Provider>
  );
};
