import { css } from '@emotion/react';
import confetti from 'canvas-confetti';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const ConfettiCanvas = forwardRef<confetti.CreateTypes | undefined>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, () => {
    if (canvasRef.current === null) return undefined;

    return confetti.create(canvasRef.current, { resize: true });
  });

  return (
    <canvas
      ref={canvasRef}
      css={css`
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 9999;
        pointer-events: none;
      `}
    />
  );
});

ConfettiCanvas.displayName = 'ConfettiCanvas';
