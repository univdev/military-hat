import { css } from '@emotion/react';
import { useConfetti } from './components/ConfettiEffect';
import { useEffect } from 'react';
import { ParadeConfettiCanvas } from './components/ConfettiEffect/ParadeConfettiCanvas';
import { AppStyleCustomizer } from './_comp/AppStyleCustomizer/AppStyleCustomizer';
import { MilitaryHat } from './components/MilitaryHat/MilitaryHat';

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
      <div
        className="Container"
        css={css`
          max-width: 1136px;
          width: 100%;
          margin: auto;
        `}
      >
        <MilitaryHat />
      </div>
    </div>
  );
};
