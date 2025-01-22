import React, { useRef } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { Home, WeatherDetails } from '../screens';

type RootStackParamList = {
  Home: React.Component; 
  WeatherDetails: React.Component; 
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
        {/* Instead of screens we should add diffrent navigators ex: auth navigator , home navigator , searh navigator but app size is too small */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
