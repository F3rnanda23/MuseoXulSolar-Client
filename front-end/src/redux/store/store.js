import { createStore, applyMiddleware,compose } from 'redux';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import reducer from '../reducer/reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",  // Clave para el almacenamiento
  storage,  // El almacenamiento que deseas utilizar (por ejemplo, localStorage)
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))   
);

const persistor = persistStore(store)

export {store, persistor};