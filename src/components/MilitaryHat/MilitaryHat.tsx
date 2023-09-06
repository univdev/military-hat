import { css } from '@emotion/react';
import { ReactComponent as HatSVG } from './resources/hat.svg';

export const MilitaryHat = () => {
  return (
    <div
      className="MilitaryHat"
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <HatSVG
        css={css`
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  );
};
