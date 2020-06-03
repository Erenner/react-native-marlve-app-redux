import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
//Stroge
//import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-community/async-storage';
//Reducers
import comicsReducer from './reducers/comicsReducers'

const rootReducer = combineReducers({
    comics: comicsReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ['comics'],   
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store);

export { store, persistor };