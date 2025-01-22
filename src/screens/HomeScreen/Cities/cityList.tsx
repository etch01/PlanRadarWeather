import * as React from 'react';
import { FlatList, View } from 'react-native';
import { CityType } from '../types';
import { fetchCities } from '../../../redux/actions/citiesAction'
import { useDispatch, useSelector } from 'react-redux';
import City from './cityComponent';
import RealmCityService from '../../../services/realmDB/cityService';

 const CityList =()=> {
    const [cities, setCities] = React.useState<CityType[]>([]);
    const dispatch = useDispatch();
    const citiesList = useSelector((state: any) => state.cities.displayedCities);
      
    // fetch all cities from realm
    React.useEffect(() => {
        RealmCityService.addDefaultCity(); //Add default city
        const cities:any = RealmCityService.getAllCities();
        dispatch(fetchCities());
        setCities(cities)
    }, []);

    // Single city card
    const renderItemFlatlist = React.useCallback(({item}: {item:CityType}):React.JSX.Element =>{
        return  <View key={item.id}>
                    <City city={item} name={`${item?.name}, ${item?.country}`}/>
                </View>
    },[])

    const _keyExtractor = (item: any) => item.id;

    return (
        <FlatList
          data={citiesList}
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