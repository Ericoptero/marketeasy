export type ActionType = {
  type: string;
  token: string;
};

const INITIAL_STATE = {
  token: '',
};

export default function auth(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case '@auth/token':
      return {token: action.token};
    case '@auth/logout':
      return {token: ''};
    default:
      return state;
  }
}
