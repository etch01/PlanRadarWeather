import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextComponent } from '../../../components';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { Icons } from '../../../assets/icons';

  interface Iprops{
    name: string;
  }

 const City =({name}:Iprops)=> {
    return (
      <View style={styles.container}>
        <View style={styles.name}>
            <Image style={styles.iconImage} source={Icons.location.src}/>
            <TextComponent style={styles.cityName}>{name}</TextComponent>
        </View>
        <View style={styles.icon}>
            <Image style={styles.iconImage} source={Icons.info.src}/>
        </View>
      </View>
    );
}

export default City;

const styles = StyleSheet.create({
    container:{
        marginTop: hp(3.6),
        paddingHorizontal: wp(4.44),
        flexDirection: 'row',
        alignItems:'center'
    },
    name:{
        flex: 4,
        flexDirection: 'row',
        alignItems:'center'
    },
    icon:{
        flex: 1,
        alignItems: 'flex-end'
    },
    cityName:{
        marginHorizontal: wp(12),
        fontSize: 14,
        fontWeight: '800'
    },
    iconImage:{
        width:24,
        height: 24
    }
});