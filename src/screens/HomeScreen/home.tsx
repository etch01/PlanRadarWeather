import React, { useState } from 'react';
import { View } from 'react-native';
// import { HomeProps } from './types';
import { styles } from './styles';
import { HigherOrderHeader, AddButton, SearchButton } from '../../components';
import CityList from './Cities/cityList';
import AddCityModal from './Cities/addCityModal';
import SearchCityModal from './Cities/searchCityModal';

 const Home =()=> {
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
         <HigherOrderHeader title={'Cities'}>
            <CityList/>
            <View style={styles.addButton}>
                <AddButton title='Add City' onPress={()=>toggleAddCityModal(true)}/>
            </View>
            <View style={styles.searchButton}>
                <SearchButton title='Search City' onPress={()=>toggleSearchCityModal(true)}/>
            </View>
         {isAddCityModalVisible && <AddCityModal isModalVisible={isAddCityModalVisible} closeModal={()=>toggleAddCityModal(false)}/>}
         {isSearchCityModalVisible && 
            <SearchCityModal 
                isModalVisible={isSearchCityModalVisible} 
                closeModal={()=>toggleSearchCityModal(false)}
            />
         }
         </HigherOrderHeader>
      </View>
    );
}

export default Home;