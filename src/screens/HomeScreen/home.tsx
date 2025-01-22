import React, { useState } from 'react';
import { View } from 'react-native';
// import { HomeProps } from './types';
import { styles } from './styles';
import { HigherOrderHeader, AddButton } from '../../components';
import CityList from './Cities/cityList';
import AddCityModal from './Cities/addCityModal';

 const Home =()=> {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const toggleCityModal=(visibility: boolean):void=>{
        setIsModalVisible(visibility)
    }

    return (
      <View style={styles.container}>
         <HigherOrderHeader title={'Cities'}>
            <CityList/>
            <View style={styles.addButton}>
                <AddButton title='Add City' onPress={()=>toggleCityModal(true)}/>
            </View>
         </HigherOrderHeader>
         {isModalVisible && <AddCityModal isModalVisible={isModalVisible} closeModal={()=>toggleCityModal(false)}/>}
      </View>
    );
}

export default Home;