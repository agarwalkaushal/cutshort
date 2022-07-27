import { StyleSheet } from 'react-native'
import { COLOR_4E589F, COLOR_DDD9D9, COLOR_FFFFFF } from '../../../../constants/color-constants'
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
    }
})

export default styles
