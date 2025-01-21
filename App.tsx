/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import AppNavigator from './src/navigation/appNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{flex:1}}>
        <AppNavigator>

        </AppNavigator>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
