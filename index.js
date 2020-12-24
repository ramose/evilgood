/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './pages/home';
import TabsContainer from './pages/tabs';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => TabsContainer);
// AppRegistry.registerComponent(appName, () => Home);
