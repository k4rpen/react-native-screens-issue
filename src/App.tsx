/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {MainScreen} from './MainScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ReanimatedScreenProvider} from 'react-native-screens/reanimated';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ReanimatedScreenProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="First">
            <Stack.Screen name="First" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReanimatedScreenProvider>
    </SafeAreaProvider>
  );
}

export default App;
