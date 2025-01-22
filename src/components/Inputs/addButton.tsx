import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextComponent } from '../index';
import { Colors } from '../shared/colors';


interface IProps {
    title: string;
    onPress: ()=>void;
}

const AddButton = ({title, onPress}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <TextComponent style={styles.add}>+</TextComponent>
        <TextComponent style={styles.title}>{title}</TextComponent>
    </TouchableOpacity>
  )
}

export default AddButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.mainColor,
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