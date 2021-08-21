export type ActionType = {
  type: string;
  token: string;
};

const INITIAL_STATE = {
  token: 'asd',
};

export default function auth(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case '@auth/token':
      return {token: action.token};
    default:
      return state;
  }
}
