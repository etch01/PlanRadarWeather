import React, { useState } from 'react';
import { View } from 'react-native';
// import { HomeProps } from './types';
import { styles } from './styles';
import { HigherOrderHeader, AddButton, SearchButton } from '../../components';


 const WeatherDetails =()=> {
    const [isAddCityModalVisible, setIsAddCityModalVisible] = useState<boolean>(false);
    const [isSearchCityModalVisible, setIsSearcgCityModalVisible] = useState<boolean>(false);

    const toggleAddCityModal=(visibility: boolean):void=>{
        setIsAddCityModalVisible(visibility)
    }

    const toggleSearchCityModal=(visibility: boolean):void=>{
        setIsSearcgCityModalVisible(visibility)
    }

    return (
      <View style={styles.container}>
         <HigherOrderHeader title={''} withBackIcon>
            <View>

            </View>
         </HigherOrderHeader>
      </View>
    );
}

export default WeatherDetails;