import { colord } from 'colord';

export const getColorString = (colorString: string) => {
  const isColorString = colord(colorString).isValid();
  const isHexColorString = colord(`#${colorString}`).isValid();

  if (isColorString) return colorString;
  if (isHexColorString) return `#${colorString}`;

  return undefined;
};
