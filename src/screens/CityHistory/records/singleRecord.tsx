import * as React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { TextComponent } from '../../../components';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { CityType } from '../../HomeScreen/types';

  interface Iprops{
    weather: any;
    city: CityType
  }

 const City =({weather, city}:Iprops)=> {
    const navigation:any = useNavigation();

    const onPressCity = () =>{
        navigation.navigate('WeatherDetails',{
            city,
            isHistory: true,
            weather: JSON.parse(weather?.weatherData),
            createdAt: moment(weather.recordedAt).format("DD.MM.YYYY HH:mm")
        })
    }

    const data = JSON.parse(weather?.weatherData);//parse weather data as it was stringified

    return (
      <Pressable style={styles.container} onPress={()=>onPressCity()}>
        <View style={styles.iconContainer}>
            <Image source={{uri:`https://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}} style={styles.weatherIcon}/>
        </View>
        <View style={styles.detailsContainer}>
            <TextComponent style={styles.createdAtText}>{moment(weather.recordedAt).format("DD.MM.YYYY HH:mm")}</TextComponent>
            <TextComponent style={styles.detailsText}>{data?.weather[0]?.description}, {data?.main?.temp} C</TextComponent>

        </View>
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
    iconContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer:{
        flex: 4,
    },
    weatherIcon:{
        width: 40,
        height: 40
    },
    createdAtText:{
        fontSize: 12,
        fontWeight: 400
    },
    detailsText:{
        fontSize: 14,
        fontWeight: 800
    }
});