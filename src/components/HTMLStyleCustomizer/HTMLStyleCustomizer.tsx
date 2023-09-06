import { Fragment, forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { type SerializedStyles, type HTMLStyleCustomizerProps } from './HTMLStyleCustomizer.types';
import { css } from '@emotion/css';

let previousClassName: SerializedStyles | undefined;

export const HTMLStyleCustomizer = forwardRef<HTMLHtmlElement | undefined, HTMLStyleCustomizerProps>(({
  style
}, ref) => {
  const htmlRef = useRef<HTMLHtmlElement>();
  const customizedClassName = useMemo(() => css(style), [style]);

  useEffect(() => {
    const htmlElement = document.querySelector('html') as HTMLHtmlElement;

    htmlRef.current = htmlElement;
  }, []);

  useImperativeHandle(ref, () => {
    if (htmlRef.current) return undefined;

    return htmlRef.current;
  });

  useEffect(() => {
    previousClassName && htmlRef.current?.classList.remove(previousClassName);
    htmlRef.current?.classList.add(customizedClassName);

    previousClassName = customizedClassName;
  }, [customizedClassName]);

  return (
    <Fragment />
  );
});

HTMLStyleCustomizer.displayName = 'HTMLStyleCustomizer';
