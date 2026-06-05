import { ClientError } from 'graphql-request';

import { type UserError } from '../../../shared/graphql/generated';

// handle GraphQL errors
export function getUserErrorMessage(errors: UserError[]) {
  if (!errors?.length) return undefined;

  const messages = errors.map((e) => e.message);
  return messages.length ? messages.join(' ') : undefined;
}

// search endpoint errors
export function getSearchRequestErrorMessage(err: unknown): string {
  if (typeof ClientError === 'function' && err instanceof ClientError) {
    const first = err.response.errors?.[0];
    if (first && typeof first.message === 'string') {
      return first.message;
    }
    return `Search failed, GraphQL Error (Code: ${String(err.response.status)})`;
  }
  if (err instanceof Error) {
    return err.message;
  }
  return 'Search failed';
}
