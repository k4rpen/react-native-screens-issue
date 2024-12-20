import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
