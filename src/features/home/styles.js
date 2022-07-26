import { StyleSheet } from 'react-native'
import { COLOR_000000, COLOR_010A43, COLOR_17288E, COLOR_212A6B, COLOR_426DDC, COLOR_E7E4E4, COLOR_EEEEEE, COLOR_FAFAFA, COLOR_FFFFFF } from '../../constants/color-constants'
import { scaleFont, scaleSize } from '../../utils/scales'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_010A43
    },
    header: {
        marginTop: scaleSize(20),
        marginHorizontal: scaleSize(20),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navButton: {
       width: scaleSize(48),
       height: scaleSize(48)
    },
    greeting: {
        marginLeft: scaleSize(20),
        fontSize: scaleFont(20),
        fontWeight: '500',
        color: COLOR_FFFFFF
    },
    addMoneyContainer: {
        paddingHorizontal: scaleSize(8),
        paddingVertical: scaleSize(4),
        backgroundColor: COLOR_212A6B,
        borderRadius: scaleSize(8)
    },
    addMoneyText: {
        fontSize: scaleFont(14),
        fontWeight: '500',
        color: COLOR_426DDC,
        lineHeight: scaleSize(24)
    },
    balanceContainer: {
        marginTop: scaleSize(48),
        marginBottom: scaleSize(32),
        marginHorizontal: scaleSize(20),
    },
    balanceIsText: {
        fontSize: scaleFont(13),
        fontWeight: '400',
        color: COLOR_E7E4E4,
        marginBottom: scaleSize(16)
    },
    amountText: {
        fontSize: scaleFont(40),
        fontWeight: '700',
        color: COLOR_EEEEEE,
        lineHeight: scaleSize(48)
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginHorizontal: scaleSize(20),
        justifyContent: 'space-between',
        marginBottom: scaleSize(40)
    }
})

export default styles
