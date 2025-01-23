import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { fetchCityHistory } from '../../../services/realmDB/historicalWeatherService';
import { CityType } from '../../HomeScreen/types';
import { TextComponent } from '../../../components';
import Record from './singleRecord';
import { styles } from '../styles';

interface listProps{
    city: CityType
}

 const RecordsList =({city}:listProps)=> {
    const [historyList,setHistoryList] = useState([]);
    // fetch all cities from realm
    React.useEffect(() => {
        const data = fetchCityHistory(Number(city.id));
        setHistoryList(data as any);
    }, []);

    // Single city card
    const renderItemFlatlist = React.useCallback(({item}: {item:CityType}):React.JSX.Element =>{
        return  <View key={item.id}>
                    <Record weather={item} city={city}/>
                </View>
    },[])

    const _keyExtractor = (item: any) => item.id;

    if (historyList?.length == 0){
        return (
            <View style={styles.emptyContainer}>
                <TextComponent style={styles.emptyText}>There is no history yet</TextComponent>
            </View>
        )
    }

    return (
        <FlatList
          data={historyList}
          renderItem={renderItemFlatlist}
          keyExtractor={_keyExtractor}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={true}
          windowSize={10}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={400}
        />
    );
}

export default RecordsList;