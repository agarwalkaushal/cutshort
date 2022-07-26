import { StyleSheet } from 'react-native'
import { COLOR_464E8A } from '../../../constants/color-constants'
import { scaleFont, scaleSize } from '../../../utils/scales'

const styles = StyleSheet.create({
    container: {
        borderRadius: scaleSize(10),
        borderWidth: scaleSize(1),
        paddingVertical: scaleSize(16),
        width: scaleSize(160),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: scaleFont(16),
        fontWeight: '500',
    }
})

export default styles
