/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {MainScreen} from './MainScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {ReanimatedScreenProvider} from 'react-native-screens/reanimated';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ReanimatedScreenProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="First"
              screenOptions={{
                fullScreenGestureEnabled: true,
                animation: 'fade_from_bottom',
                headerLargeTitle: true,
                // animationMatchesGesture: true,
                // headerTranslucent: true,
              }}>
              <Stack.Screen name="First" component={MainScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </ReanimatedScreenProvider>
    </SafeAreaProvider>
  );
}

export default App;
