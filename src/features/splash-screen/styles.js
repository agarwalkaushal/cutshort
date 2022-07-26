import { StyleSheet } from 'react-native'
import { COLOR_17288E, COLOR_FAFAFA, COLOR_FFFFFF } from '../../constants/color-constants'
import { scaleFont, scaleSize } from '../../utils/scales'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    },
    elementsContainer: {
        position: 'absolute',
        left: scaleSize(34),
        bottom: scaleSize(16)
    },
    title: {
        fontWeight: '700',
        fontSize: scaleFont(18),
        color: COLOR_FFFFFF,
        marginBottom: scaleSize(6)
    },
    subtitle: {
        fontWeight: '400',
        fontSize: scaleFont(16),
        color: COLOR_FAFAFA,
        maxWidth: scaleSize(241),
        marginBottom: scaleSize(14)
    },
    buttonContainer: {
        paddingVertical: scaleSize(12),
        paddingHorizontal: scaleSize(23),
        borderRadius: scaleSize(6),
        backgroundColor: COLOR_FFFFFF,
        maxWidth: scaleSize(145)
    },
    buttonText: {
        fontSize: scaleFont(16),
        color: COLOR_17288E
    }
})

export default styles
