import { css } from '@emotion/react';
import { type AspectRatioProps } from './AspectRatio.types';

const ratioValid = /^\d:\d$/;

export const AspectRatio = ({
  children,
  ratio = '1:1'
}: AspectRatioProps) => {
  if (!ratio.match(ratioValid)) throw new Error('ratio 값은 \'n:n\'과 같은 format으로 전달 되어야 합니다.');

  const [width, height] = ratio.split(':').map((n) => parseInt(n, 10));
  const verticalRatio = width / height * 100;

  return (
    <div
      className="AspectRatio"
      css={css`
        position: relative;
        width: 100%;
      `}
      style={{
        paddingBottom: `${verticalRatio}%`
      }}
    >
      <div
        className="AspectRatio__Container"
        css={css`
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
        `}
      >
        <div
          className="AspectRatio__Content"
          css={css`
            position: relative;
            width: 100%;
            height: 100%;
          `}
        >
          { children }
        </div>
      </div>
    </div>
  );
};
