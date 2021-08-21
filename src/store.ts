import {createStore} from 'redux';

import reducers from './reducers';
import {ActionType} from './reducers/auth';

const store = createStore(reducers);

export type RootState = {
  auth: ActionType;
};

export default store;
