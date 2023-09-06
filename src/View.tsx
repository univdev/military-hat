import { css } from '@emotion/react';
import { useConfetti } from './components/ConfettiEffect';
import { useEffect } from 'react';
import { ParadeConfettiCanvas } from './components/ConfettiEffect/ParadeConfettiCanvas';
import { AspectMilitaryHat } from './_comp/AspectMilitaryHat';
import { AppStyleCustomizer } from './_comp/AppStyleCustomizer';
import { TadaAudioPlayer } from './_comp/TadaAudioPlayer/TadaAudioPlayer';

export const View = () => {
  const { show } = useConfetti();

  useEffect(() => {
    show(<ParadeConfettiCanvas />, { duration: 7000 });
  }, []);

  return (
    <div
      className="View"
      css={css`
        display: block;
      `}
    >
      <AppStyleCustomizer />
      <TadaAudioPlayer />
      <div
        className="Container"
        css={css`
          max-width: 1136px;
          width: 100%;
          margin: auto;
        `}
      >
        <div
          className="MilitaryHat__Container"
          css={css`
            max-width: 400px;
            width: 100%;
            margin: auto;
          `}
        >
          <AspectMilitaryHat />
        </div>
      </div>
    </div>
  );
};
