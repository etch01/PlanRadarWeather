import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextComponent } from '../index';
import { Colors } from '../shared/colors';
import { Icons } from '../../assets/icons';


interface IProps {
    title: string;
    onPress: ()=>void;
}

const SearchButton = ({title, onPress}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image source={Icons.search.src}/>
    </TouchableOpacity>
  )
}

export default SearchButton;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems:'center'
    },
    title:{
        fontSize:14,
        color: Colors.light,
        marginHorizontal: 16
    },
    add:{
        fontSize:25,
        color: Colors.light,
    },
})