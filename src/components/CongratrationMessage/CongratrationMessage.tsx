import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { queryToString } from '../../utils/query-to-string';

/**
 * 축하 메시지를 보여주는 컴포넌트입니다.
 *
 * URL Querystring으로 receiver가 들어오면 이를 출력합니다.
 */
export const CongratrationMessage = () => {
  const [receiverName, setReceiverName] = useState<string>();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams);
    const receiver = queryToString(params.receiver);

    receiver && setReceiverName(receiver);
  }, []);

  return (
    <h1
      className="CongrationMessage"
      css={css`
        text-align: center;
      `}
    >
      { receiverName }님! 전역을 축하드립니다!
    </h1>
  );
};
