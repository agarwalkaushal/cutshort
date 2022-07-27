import { StyleSheet } from 'react-native'
import { COLOR_010A43, COLOR_10194E, COLOR_192259, COLOR_D7C9C9, COLOR_EEEEEE } from '../../constants/color-constants'
import { scaleFont, scaleSize } from '../../utils/scales'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_010A43
    },
    imageBg: {
        width: '100%',
        height: scaleSize(338)
    },
    header: {
        marginHorizontal: scaleSize(20),
        marginTop: scaleSize(28),
        marginBottom: scaleSize(78),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subHeader: {
        position: 'absolute',
        left: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    navButton: {
        marginRight: scaleSize(6)
    },
    back: {
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_D7C9C9
    },
    newRequest: {
        fontSize: scaleFont(18),
        fontWeight: '500',
        color: COLOR_D7C9C9
    },
    outerCircle: {
        width: scaleSize(200),
        height: scaleSize(200),
        borderRadius: scaleSize(100),
        backgroundColor: COLOR_10194E,
        justifyContent: 'center',
        padding: scaleSize(25),
        alignSelf: 'center',
        marginBottom: scaleSize(24)
    },
    innerCircle: {
        width: scaleSize(150),
        height: scaleSize(150),
        borderRadius: scaleSize(75),
        backgroundColor: COLOR_192259,
        padding: scaleSize(25),
    },
    photo: {
        width: scaleSize(100),
        height: scaleSize(100)
    },
    name: {
        fontSize: scaleFont(24),
        fontWeight: '500',
        color: COLOR_EEEEEE,
        alignSelf: 'center',
        marginBottom: scaleSize(24)
    },
    requestingFor: {
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_EEEEEE,
        alignSelf: 'center',
        marginBottom: scaleSize(24)
    },
    amount: {
        fontSize: scaleFont(40),
        fontWeight: '700',
        color: COLOR_EEEEEE,
        alignSelf: 'center',
        marginBottom: scaleSize(36)
    },
    buttons: {
        alignSelf: 'center',
    }
})

export default styles
