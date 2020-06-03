import React from 'react'
import {AppRegistry, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import Layout from './src/hox/Layout'
import Loading from './src/components/UI/Loading/Loading';
import App from './App';
import {name as appName} from './app.json';

import { store, persistor } from "./src/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
const MARVELAPP = () => (
    <Provider store={store}>
    <PersistGate loading={<Loading />}  persistor={persistor}>
    <StatusBar backgroundColor="#ffcc80" barStyle="dark-content" /> 
    <App />
    </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => MARVELAPP);