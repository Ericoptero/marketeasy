export function authToken(token: string) {
  return {
    type: '@auth/token',
    token,
  };
}

export function logout() {
  return {
    type: '@auth/logout',
  };
}
