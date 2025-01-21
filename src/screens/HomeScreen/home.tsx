import * as React from 'react';
import { View } from 'react-native';
// import { HomeProps } from './types';
import { styles } from './styles';
import { HigherOrderHeader } from '../../components';

 const Home =()=> {
    return (
      <View style={styles.container}>
         <HigherOrderHeader title={'Cities'}>

         </HigherOrderHeader>
      </View>
    );
}

export default Home;