import * as React from 'react';
import { View, Text } from 'react-native';
import { HomeProps } from './types';
import { styles } from './styles';

 const Home =(props: HomeProps)=> {
    return (
      <View style={{flex:1}}>
         <Text>App</Text>
      </View>
    );
}

export default Home;