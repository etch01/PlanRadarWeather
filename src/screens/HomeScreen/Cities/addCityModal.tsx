import React, { useState } from 'react';
import { View, TextInput, Button, Text, Modal, StyleSheet } from 'react-native';
import { Colors } from '../../../components/shared/colors';
import { useDispatch } from 'react-redux';
import { fetchCities } from '../../../redux/actions/citiesAction';
import CityModel from '../../../services/realmDB/cityService';

interface Iprops{
    isModalVisible: boolean;
    closeModal: ()=> void;
}

const AddCityModal = ({isModalVisible,closeModal}:Iprops) => {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const dispatch = useDispatch();

  const handleAddCity = () => {
    if (cityName && countryName) {
      CityModel.addCity({ id: Math.floor(Math.random() * 1000), name: cityName, country: countryName });
      dispatch(fetchCities());
      setCityName('');
      setCountryName('');
      closeModal(); // Close the modal
    } else {
      alert('Please fill in both city and country fields');
    }
  };

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
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add City</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Enter City Name"
              value={cityName}
              onChangeText={setCityName}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Country Name"
              value={countryName}
              onChangeText={setCountryName}
            />

            <View style={styles.buttonContainer}>
              <Button title="Add City" onPress={handleAddCity} />
              <Button title="Cancel" onPress={() => closeModal()} />
            </View>
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.modalBackground
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: Colors.light,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddCityModal;
