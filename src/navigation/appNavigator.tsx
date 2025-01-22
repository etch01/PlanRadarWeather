import React, { useRef } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { Home } from '../screens';

type RootStackParamList = {
  Home: React.Component; 
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
    >
      <Stack.Navigator initialRouteName="Home" screenOptions={navOptionHandler}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
