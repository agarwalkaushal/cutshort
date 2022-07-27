import { StyleSheet } from 'react-native'
import { COLOR_4E589F, COLOR_858EC5, COLOR_DDD9D9, COLOR_FFFFFF } from '../../../../constants/color-constants'
import { scaleFont, scaleSize } from '../../../../utils/scales'

const styles = StyleSheet.create({
    transactionsHeader: {
        marginTop: scaleSize(15),
        marginBottom: scaleSize(32),
        marginHorizontal: scaleSize(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    allTransactions: {
        fontSize: scaleFont(16),
        fontWeight: '500',
        color: COLOR_FFFFFF
    },
    sortBy: {
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_4E589F
    },
    dropdown: {
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_DDD9D9,
        marginRight: scaleSize(8)
    },
    container: {
        padding: scaleSize(16),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userPhoto: {
        width: scaleSize(48),
        height: scaleSize(48),
        marginRight: scaleSize(16)
    },
    userName: {
        fontSize: scaleFont(16),
        fontWeight: '700',
        color: COLOR_858EC5,
        marginBottom: scaleSize(4)
    },
    tagContainer: {
        paddingHorizontal: scaleSize(8),
        paddingVertical: scaleSize(6),
        borderRadius: scaleSize(20),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start' //KEY
    },
    tagText: {
        marginLeft: scaleSize(5),
        fontSize: scaleFont(12),
        fontWeight: '400',
        color: COLOR_FFFFFF
    },
    amount: {
        fontSize: scaleFont(16),
        fontWeight: '700',
    }
})

export default styles
