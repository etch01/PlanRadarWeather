import React, { useState } from 'react';
import { View, TextInput, Image, Modal, StyleSheet, KeyboardAvoidingView, Platform, Pressable  } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../../components/shared/colors';
import { TextComponent } from '../../../components';
import { Icons } from '../../../assets/icons';
import CityModel from '../../../services/realmDB/cityService';
import { searchCities, resetCities } from '../../../redux/actions/citiesAction'
import { useDispatch, useSelector } from 'react-redux';

interface Iprops{
    isModalVisible: boolean;
    closeModal: ()=> void;
}

const SearchModal = ({isModalVisible,closeModal}:Iprops) => {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const dispatch = useDispatch();
  const citiesList = useSelector((state: any) => state.cities.displayedCities);

  const onChangeHandler=(text:string)=>{
    setCityName(text);      
    if (text.length === 0) {
      // If the input is cleared reset the filtered cities
      dispatch(resetCities());
    } else {
      // else filter the cities
      dispatch(searchCities(text,citiesList));
    }
  }

  const handleClear = () => {
    setCityName('');
    dispatch(resetCities());
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

  return (
    <View style={styles.container}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => closeModal()}
      >
        <View style={styles.modalBackground}>
         {/* Modal Body */}
         <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.modalContent}>
            {/* Title Area */}
            <View style={styles.titleRow}>
              <View style={styles.titleRight}>
                <Image source={Icons.search.src} style={styles.searchIcon}/>
                <TextComponent style={styles.modalTitle}>Search Cities</TextComponent>
              </View>
              <Pressable onPress={() => closeModal()}>
                <Image source={Icons.close.src} style={styles.closeIcon}/>
              </Pressable>

            </View>
            {/* Search Area */}
            <TextInput
              style={styles.input}
              placeholder="Enter City Name"
              value={cityName}
              onChangeText={onChangeHandler}
              returnKeyType='search'
            />
          </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.modalBackground
  },
  modalContent: {
    width: wp(100),
    padding: 16,
    backgroundColor: Colors.light,
    borderRadius: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: '800',
    marginHorizontal: wp(5)
  },
  input: {
    height: 40,
    width: wp(90),
    borderColor: Colors.mainColor,
    borderWidth: 1,
    marginVertical: 20,
    alignSelf: 'center'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleRow:{
    flexDirection: 'row',
    alignItems:'center',
    borderBottomColor: Colors.grayBorder,
    borderBottomWidth: 1,
    paddingBottom: 15,
    justifyContent:'space-between'
  },
  titleRight:{
    flexDirection: 'row',
    alignItems:'center',
  },
  searchIcon:{
    width: 24,
    height: 24
  },
  closeIcon:{
    width: 16,
    height: 16
  }
});

export default SearchModal;
