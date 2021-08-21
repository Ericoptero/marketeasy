export function authToken(token: string) {
  return {
    type: '@auth/token',
    token,
  };
}
