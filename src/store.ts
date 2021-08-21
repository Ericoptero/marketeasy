import {AnyAction, createStore, Store} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducers from './reducers';
import {ActionType} from './reducers/auth';

export type RootState = {
  auth: ActionType;
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

let store: Store<any, AnyAction> = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
