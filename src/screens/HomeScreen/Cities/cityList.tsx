import * as React from 'react';
import { FlatList, View } from 'react-native';
import { CityType } from '../types';
import City from './cityComponent';
import RealmCityService from '../../../services/realmDB/cityService';

 const CityList =()=> {
    const [cities, setCities] = React.useState<CityType[]>([]);


      React.useEffect(() => {
        RealmCityService.addDefaultCity();
        const cities:any = RealmCityService.getAllCities();
        setCities(cities)
    }, []);

    const renderItemFlatlist = React.useCallback(({item}: {item:CityType}):React.JSX.Element =>{
        return  <View key={item.id}>
                    <City name={`${item?.name}, ${item?.country}`}/>
                </View>
    },[])

    const _keyExtractor = (item: any) => item.id;

    return (
        <FlatList
          data={cities}
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

export default CityList;