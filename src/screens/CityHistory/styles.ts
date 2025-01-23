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
    emptyContainer:{
        height: hp(100),
        alignItems:'center',
        paddingTop: hp(10)
    },
    emptyText:{
        fontSize: 18,
        fontWeight: '700'
    }
});