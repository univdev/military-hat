type ParticleSize = 'little' | 'normal' | 'many';

export interface ParadeConfettiCanvasProps {
  /** 한 프레임에 발사 되는 종이의 갯수를 정합니다. */
  particleSize?: ParticleSize

  /** 좌측 Parade에서 발사 되는 종이의 색상입니다. */
  leftSideColors?: string[]

  /** 우측 Parade에서 발사 되는 종이의 색상입니다. */
  rightSideColors?: string[]

  /**
   * 스크린 기준 어느 정도 높이에서 종이가 발사 될지 선택합니다.
   * 0에서 1 사이의 값으로 지정합니다.
   *
   * 기본값 0.5
   */
  y?: number

  /**
   * 이펙트의 duration이 지정 된 경우 부자연스러운 Canvas Unmount 현상을 방지하기 위해
   * 이펙트가 일찍 멈출 시점을 지정합니다.
   *
   * 기본값: 4000
   */
  keepEffectTimeFromDuration?: number
}
