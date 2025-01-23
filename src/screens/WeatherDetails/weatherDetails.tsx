import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { HigherOrderHeader, TextComponent } from '../../components';
import { WeatherDetailsProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weatherAction';
import { Colors } from '../../components/shared/colors';

 const WeatherDetails =({route, navigation}:WeatherDetailsProps)=> {
    const { city, isHistory, weather, createdAt } = route.params;
    const dispatch = useDispatch();
    const {loading, error, data} = useSelector((state: any) => state.weather);
    const weatherData = isHistory ? weather : data;

    useEffect(()=>{
        if (isHistory){

        }else{
            dispatch(fetchWeather(city.name, city.id))
        }
    },[])

    const onPressBack = () =>{
        navigation.goBack();
    }


    if (loading){
        return <View style={styles.loader}><ActivityIndicator color={Colors.mainColor} size={25}/></View>
    }

    else{
    return (
      <View style={styles.container}>
         <HigherOrderHeader title={''} withBackIcon onPressBackIcon={onPressBack}>
            {!error?<View style={styles.body}>
            <View style={styles.detailsCard}>
                {/* City */}
                <TextComponent style={styles.name}>{city.name}, {city.country}</TextComponent>
                {/* Weather Image */}
                <View style={styles.iconContainer}>
                    <Image source={{uri:`https://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}} style={styles.weatherImage}/>
                </View>
                {/* Details */}
                <View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Description</TextComponent>
                        <TextComponent style={styles.statusText}>{weatherData?.weather[0]?.description}</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Temperature</TextComponent>
                        <TextComponent style={styles.statusText}>{weatherData?.main?.temp} C</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Humidity</TextComponent>
                        <TextComponent style={styles.statusText}>{weatherData?.main?.humidity}%</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Windspeed</TextComponent>
                        <TextComponent style={styles.statusText}>{weatherData?.wind?.speed}</TextComponent>
                    </View>
                </View>
            </View>
            {/* Saved Date if its history */}
            {!isHistory? <View></View> :<View style={styles.footer}>
                <TextComponent style={styles.footerText}>{`Weather information for ${city.name} received on`}</TextComponent>
                <TextComponent style={styles.footerText}>{createdAt} </TextComponent>
            </View>}
            </View>:
            // If city doesnt exist or fetch failed
            <TextComponent style={[styles.name,{marginTop: 40}]}>City doesn't exist or error occurred</TextComponent>}
         </HigherOrderHeader>
      </View>
    );
}
}

export default WeatherDetails;