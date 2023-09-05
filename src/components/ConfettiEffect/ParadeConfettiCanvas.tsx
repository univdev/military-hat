import { useCallback, useContext, useRef } from 'react';
import type confetti from 'canvas-confetti';
import { ConfettiCanvas } from './ConfettiCanvas';
import { type ParadeConfettiCanvasProps } from './ParadeConfettiCanvas.types';
import { ConfettiOptionContext } from './ConfettiOptionContext';

const particleCountMap = {
  little: 1,
  normal: 2,
  many: 5
};

export const ParadeConfettiCanvas = ({
  particleSize = 'many',
  leftSideColors = ['#FFF000'],
  rightSideColors = ['#EF00FE'],
  keepEffectTimeFromDuration = 4000,
  y = 0.5
}: ParadeConfettiCanvasProps) => {
  const confettiOptionsContext = useContext(ConfettiOptionContext);

  if (confettiOptionsContext === undefined) throw new Error('정상적인 경로로 Mount 된 Confetti 컴포넌트가 아닙니다.');
  if (y < 0 || y > 1) throw new Error('y 값은 0 에서 1 사이여야 합니다.');

  const { duration } = confettiOptionsContext;
  const mountedDate = useRef(Date.now());
  const confettiCanvas = useRef<confetti.CreateTypes>();

  const effect = useCallback(() => {
    if (confettiCanvas.current === undefined) throw new Error('Confetti를 실행할 canvas를 찾지 못했습니다.');

    const currentDate = Date.now();

    const particleCount = particleCountMap[particleSize];

    confettiCanvas.current({
      particleCount,
      angle: 60,
      spread: 120,
      origin: { x: 0, y },
      colors: leftSideColors
    });
    confettiCanvas.current({
      particleCount,
      angle: 120,
      spread: 55,
      origin: { x: 1, y },
      colors: rightSideColors
    });

    if (
      duration !== undefined &&
      (currentDate - mountedDate.current) > duration - keepEffectTimeFromDuration
    ) {
      return;
    }

    requestAnimationFrame(effect);
  }, []);

  return (
    <ConfettiCanvas
      ref={(canvas) => {
        if (canvas) {
          confettiCanvas.current = canvas;

          requestAnimationFrame(effect);
        }
      }}
    />
  );
};
