import { type Options } from './query-to-string.types';

export const queryToString = (query?: string | string[], options: Options = {}) => {
  if (typeof query === 'undefined') return undefined;
  if (typeof query === 'object') {
    if (options.isJoin) return query.join(',');
    return query[0];
  }

  return query;
};
