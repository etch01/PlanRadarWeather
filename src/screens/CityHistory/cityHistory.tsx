import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { HigherOrderHeader, TextComponent } from '../../components';
import { CityHistoryProps } from './types';
import HistoryList from './records/recordsList';


 const CityHistory =({route, navigation}:CityHistoryProps)=> {
    const [history,setHistory] = useState();
    const { city } = route.params;

    
    useEffect(()=>{
        // const data = fetchCityHistory(Number(city.id))
    },[])

    const onPressBack = () =>{
        navigation.goBack();
    }

    return (
      <View style={styles.container}>
         <HigherOrderHeader title={`${city.name} Historical`} withBackIcon onPressBackIcon={onPressBack}>
            <View style={{zIndex:100}}>
                <HistoryList city={city}/>
            </View>
         </HigherOrderHeader>
      </View>
    );
}

export default CityHistory;