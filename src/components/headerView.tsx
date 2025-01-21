import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Colors } from './colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
  } from 'react-native-responsive-screen';
import { Icons } from '../assets/icons';
import { Images } from '../assets/images';

interface HeaderProps {
    // children: React.JSX.Element;
    withBackIcon?: boolean;
}

const HeaderView = ({withBackIcon}: HeaderProps) => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View>
                {withBackIcon ? <Image source={Icons.backArrow.src}/>:<></>}
            </View>
            <View style={styles.titleView}>
                <Text>London historical</Text>
            </View>
        </View>
        <View style={styles.body}>
            <View style={styles.gradientImage}>
                <Image source={Images.background.src}/>
            </View>
        </View>
    </View>
  )
}

export default HeaderView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden'
    },
    header:{
        backgroundColor: Colors.mainColor,
        flex: 1,
        justifyContent:'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    titleView:{
        paddingHorizontal: wp(37),
        paddingBottom: hp(3)
    },
    body:{
        flex: 4,
        backgroundColor: Colors.bg
    },
    gradientImage:{
        position:'absolute',
        bottom: 0
    }
})