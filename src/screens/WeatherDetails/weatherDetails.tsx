import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { HigherOrderHeader, TextComponent } from '../../components';
import { WeatherDetailsProps } from './types';
import { Images } from '../../assets/images';

 const WeatherDetails =({route, navigation}:WeatherDetailsProps)=> {
    const { city } = route.params;
    return (
      <View style={styles.container}>
         <HigherOrderHeader title={''} withBackIcon>
            <View style={styles.detailsCard}>
                {/* City */}
                <TextComponent style={styles.name}>{city.name}, {city.country}</TextComponent>
                {/* Weather Image */}
                <View style={styles.iconContainer}>
                    <Image source={Images.weather['cloud-rain'].src} style={styles.weatherImage}/>
                </View>
                {/* Details */}
                <View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Description</TextComponent>
                        <TextComponent style={styles.statusText}>Cloudy</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Temperature</TextComponent>
                        <TextComponent style={styles.statusText}>20° C</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Humidity</TextComponent>
                        <TextComponent style={styles.statusText}>45%</TextComponent>
                    </View>
                    <View style={styles.weatherRow}>
                        <TextComponent style={styles.weatherText}>Windspeed</TextComponent>
                        <TextComponent style={styles.statusText}>20 km/h</TextComponent>
                    </View>
                </View>
            </View>
         </HigherOrderHeader>
      </View>
    );
}

export default WeatherDetails;