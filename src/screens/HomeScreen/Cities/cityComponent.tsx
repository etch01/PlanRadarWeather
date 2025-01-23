import * as React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { TextComponent } from '../../../components';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { Icons } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { CityType } from '../types';

  interface Iprops{
    name: string;
    city: CityType
  }

 const City =({name,city}:Iprops)=> {
    const navigation:any = useNavigation();

    const onPressCity = () =>{
        navigation.navigate('WeatherDetails',{
            city,
            isHistory: false
        })
    }

    const onPressHistory = () =>{
        navigation.navigate('CityHistory',{
            city
        })
    }

    return (
      <Pressable style={styles.container} onPress={()=>onPressCity()}>
        <View style={styles.name}>
            <Image style={styles.iconImage} source={Icons.location.src}/>
            <TextComponent style={styles.cityName}>{name}</TextComponent>
        </View>
        <Pressable style={styles.icon} onPress={()=>onPressHistory()}>
            <Image style={styles.iconImage} source={Icons.info.src}/>
        </Pressable>
      </Pressable>
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