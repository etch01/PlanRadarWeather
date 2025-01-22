import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from './colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { Icons } from '../../assets/icons';
import { Images } from '../../assets/images';
import { TextComponent } from '../index';

interface HeaderProps {
    children: React.ReactNode;
    withBackIcon?: boolean;
    title: string;
}

const HeaderView = ({children, withBackIcon, title}: HeaderProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
                {withBackIcon ? <Image source={Icons.backArrow.src} style={styles.backIcon}/>:<></>}
            <View style={styles.titleView}>
                <TextComponent 
                    style={styles.title}
                    numberOfLines={1}
                >{title}</TextComponent>
            </View>
        </View>
        <View style={styles.body}>
            {children}
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
        paddingHorizontal: wp(20),
        paddingBottom: hp(3),
    },
    title:{
        color: Colors.light,
        fontSize: 24
    },
    body:{
        flex: 4,
        backgroundColor: Colors.bg,
    },
    gradientImage:{
        position:'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    backIcon:{
        width: 60,
        height: 60,
    }
})