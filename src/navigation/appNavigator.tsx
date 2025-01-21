import React, { useRef } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Home } from '../screens';

type RootStackParamList = {
  Home: any; 
};

const navOptionHandler: StackNavigationOptions = {
  headerShown: false,
};

const Navigation: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  const navigatorRef = useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <NavigationContainer
      ref={navigatorRef}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
          opacity: 1,
        },
      }}
      initialRouteName="Home"
    >
      <Stack.Navigator screenOptions={navOptionHandler}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({

});
