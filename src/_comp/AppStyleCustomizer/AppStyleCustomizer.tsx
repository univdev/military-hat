import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { HTMLStyleCustomizer } from '../../components/HTMLStyleCustomizer/HTMLStyleCustomizer';
import { getQueryString } from '../../utils/get-query-string';
import { queryToString } from '../../utils/query-to-string';
import { getColorString } from '../../utils/get-color-string';

/**
 * 접속한 페이지 경로의 Querystring에 backgroundColor 라는 프로퍼티가 존재한다면
 * HTML 문서의 배경 색상을 바꾸는 코드를 추가합니다.
 */
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
        width: 100%;
        height: 100vh;
        background-color: ${backgroundColor};
        body,
        #root {
          height: 100%;
        }
      `}
    />
  );
};
