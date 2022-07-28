import { StyleSheet } from 'react-native'
import { COLOR_010A43, COLOR_1DC76B, COLOR_D7C9C9, COLOR_FAFAFA, COLOR_FFFFFF } from '../../constants/color-constants'
import { scaleFont, scaleSize } from '../../utils/scales'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_010A43
    },
    imageBg: {
        width: '100%',
        height: scaleSize(380),
    },
    header: {
        marginHorizontal: scaleSize(20),
        marginTop: scaleSize(28),
        marginBottom: scaleSize(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: scaleSize(18)
    },
    navButton: {
        marginRight: scaleSize(6)
    },
    back: {
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_D7C9C9
    },
    searchBar: {
        borderWidth: scaleSize(1),
        width: scaleSize(260),
        paddingHorizontal: scaleSize(16),
        paddingVertical: scaleSize(12),
        borderRadius: scaleSize(6),
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_FAFAFA
    },
    userPhotoContainer: {
        backgroundColor: COLOR_FFFFFF,
        padding: scaleSize(3),
        marginBottom: scaleSize(8),
        borderRadius: scaleSize(18),
        alignSelf: 'center',
    },
    userPhotoContainerSelected: {
        backgroundColor: COLOR_1DC76B,
        padding: scaleSize(5),
        marginBottom: scaleSize(7),
        borderRadius: scaleSize(36),
        alignSelf: 'center'
    },
    userPhoto: {
        width: scaleSize(33),
        height: scaleSize(33)
    },
    userPhotoSelected: {
        width: scaleSize(67),
        height: scaleSize(67)
    },
    userName: {
        fontSize: scaleFont(12),
        fontWeight: '400',
        color: COLOR_FAFAFA
    },
    userNameSelected: {
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_1DC76B
    },
    bottomsheetView: {
        alignItems: 'center'
    },
    bottomsheetPhoto: {
        marginTop: scaleSize(24),
        width: scaleSize(72),
        height: scaleSize(72),
        marginBottom: scaleSize(10)
    },
    bottomsheetName: {
        fontSize: scaleFont(20),
        fontWeight: '500',
        color: COLOR_FFFFFF,
        marginBottom: scaleSize(16)
    },
    bottomsheetNumber: {
        fontSize: scaleFont(14),
        fontWeight: '400',
        color: COLOR_FFFFFF,
        marginBottom: scaleSize(32)
    },
})

export default styles
