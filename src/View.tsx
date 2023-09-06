import { css } from '@emotion/react';
import { useConfetti } from './components/ConfettiEffect';
import { useEffect } from 'react';
import { ParadeConfettiCanvas } from './components/ConfettiEffect/ParadeConfettiCanvas';
import { AspectMilitaryHat } from './_comp/AspectMilitaryHat';
import { AppStyleCustomizer } from './_comp/AppStyleCustomizer';
import { TadaAudioPlayer } from './_comp/TadaAudioPlayer/TadaAudioPlayer';
import { CongratrationMessage } from './components/CongratrationMessage/CongratrationMessage';

export const View = () => {
  const { show } = useConfetti();

  useEffect(() => {
    show(<ParadeConfettiCanvas />, { duration: 7000 });
  }, []);

  return (
    <div
      className="View"
      css={css`
        height: 100vh;
      `}
    >
      <AppStyleCustomizer />
      <TadaAudioPlayer />
      <div
        className="Container"
        css={css`
          margin: auto;
          max-width: 560px;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          className="MilitaryHat__Container"
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100%;
          `}
        >
          <div
            className="MilitaryHat__Content"
            css={css`
              flex: auto;
            `}
          >
            <CongratrationMessage />
          </div>
          <div
            className="MilitaryHat__Footer"
            css={css`
              padding-bottom: 48px;
            `}
          >
            <AspectMilitaryHat />
          </div>
        </div>
      </div>
    </div>
  );
};
