import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Ignore all logs
AppRegistry.registerComponent(appName, () => App);
