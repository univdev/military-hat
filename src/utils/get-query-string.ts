export const getQueryString = () => {
  if (typeof window === 'undefined') throw new Error('window 객체가 선언 되지 않았습니다.');

  const params = new URLSearchParams(window.location.search);
  const query = Object.fromEntries(params);

  return {
    ...query
  };
};
