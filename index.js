/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import CartScreen from './src/screens/CartScreen';

AppRegistry.registerComponent(appName, () => CartScreen);
