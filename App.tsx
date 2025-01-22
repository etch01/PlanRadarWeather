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
import { RealmProvider } from '@realm/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/appNavigator';

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{flex:1}}>
        <RealmProvider>
          <Provider store={store}>
            <AppNavigator/>
          </Provider>
        </RealmProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
