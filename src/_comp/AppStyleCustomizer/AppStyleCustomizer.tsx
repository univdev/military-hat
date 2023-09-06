import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { HTMLStyleCustomizer } from '../../components/HTMLStyleCustomizer/HTMLStyleCustomizer';
import { getQueryString } from '../../utils/get-query-string';
import { queryToString } from '../../utils/query-to-string';
import { getColorString } from '../../utils/get-color-string';

export const AppStyleCustomizer = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  useEffect(() => {
    const query = getQueryString();
    const backgroundColor = queryToString(query.backgroundColor);

    if (backgroundColor) setBackgroundColor(getColorString(backgroundColor));
  }, []);

  return (
    <HTMLStyleCustomizer
      style={css`
        background-color: ${backgroundColor};
      `}
    />
  );
};
