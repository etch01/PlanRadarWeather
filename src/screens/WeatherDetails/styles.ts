import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../components/shared/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body:{flex:1,justifyContent:'space-between'},
    detailsCard:{
        width: wp(80),
        backgroundColor: Colors.light,
        padding: 30,
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginTop: -hp(5),
        borderRadius: 5
    },
    name:{
        fontSize: 24,
        textAlign: 'center'
    },
    weatherImage:{
        width: 80,
        height: 80
    },
    iconContainer:{
        alignSelf:'center',
        marginVertical: hp(10)
    },
    weatherRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 7
    },
    weatherText:{
        fontSize: 14,
        fontWeight: 800
    },
    statusText:{
        fontSize: 20,
        color: Colors.mainColor,
        fontWeight: 500
    },
    loader:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer:{
        zIndex: 10,
        marginBottom: 20
    },
    footerText:{
        textAlign: 'center',
        fontSize: 12,
        color: Colors.grayText
    }
});