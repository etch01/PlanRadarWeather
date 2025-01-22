import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { HigherOrderHeader, TextComponent } from '../../components';
import { WeatherDetailsProps } from './types';
import { Images } from '../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weatherAction';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import { Colors } from '../../components/shared/colors';
import Config from 'react-native-config';//the .env file in the root path

 const WeatherDetails =({route, navigation}:WeatherDetailsProps)=> {
    const { city } = route.params;
    const dispatch = useDispatch();
    const {loading, error, data} = useSelector((state: any) => state.weather);

    useEffect(()=>{
        dispatch(fetchWeather(city.name))
    },[])

    const onPressBack = () =>{
        navigation.goBack();
    }

    if (loading || data === null){
        return <View style={styles.loader}><ActivityIndicator color={Colors.mainColor} size={25}/></View>
    }

    else{
    return (
      <View style={styles.container}>
         <HigherOrderHeader title={''} withBackIcon onPressBackIcon={onPressBack}>
            <View style={styles.detailsCard}>
                {/* City */}
                <TextComponent style={styles.name}>{city.name}, {city.country}</TextComponent>
                {/* Weather Image */}
                <View style={styles.iconContainer}>
                    <Image source={{uri:`https://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}} style={styles.weatherImage}/>
                </View>
                {/* Details */}
                <View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Description</TextComponent>
                        <TextComponent style={styles.statusText}>{data?.weather[0]?.description}</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Temperature</TextComponent>
                        <TextComponent style={styles.statusText}>{data?.main?.temp} C</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Humidity</TextComponent>
                        <TextComponent style={styles.statusText}>{data?.main?.humidity}%</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Windspeed</TextComponent>
                        <TextComponent style={styles.statusText}>{data?.wind?.speed}</TextComponent>
                    </View>
                </View>
            </View>
            {/* Saved Date if its recorded */}
         </HigherOrderHeader>
      </View>
    );
}
}

export default WeatherDetails;