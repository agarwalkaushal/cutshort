import { StyleSheet } from 'react-native'
import { COLOR_10194E, COLOR_4E589F } from '../../../constants/color-constants'
import { scaleSize } from '../../../utils/scales'

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: scaleSize(40),
        borderTopLeftRadius: scaleSize(40),
        paddingVertical: scaleSize(16),
        width: '100%',
        height: '100%',
        backgroundColor: COLOR_10194E
    },
    handle: {
        alignSelf: 'center',
        width: scaleSize(64),
        height: scaleSize(7),
        backgroundColor: COLOR_4E589F,
        borderRadius: scaleSize(10)
    }
})

export default styles
