import { type css } from '@emotion/css';
import { type CSSInterpolation } from '@emotion/serialize';

export type SerializedStyles = ReturnType<typeof css>;

export interface HTMLStyleCustomizerProps {
  style: CSSInterpolation
}
