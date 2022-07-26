import { Dimensions, PixelRatio } from 'react-native'

const WINDOW_WIDTH = Dimensions.get('screen').width

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

export const scaleSize = (size) => {
    const scaledWidth = (WINDOW_WIDTH / guidelineBaseWidth) * size
    return scaledWidth < 1 ? scaledWidth : Math.floor(scaledWidth)
}

const WINDOW_HEIGHT = Dimensions.get('screen').height
const WINDOW_SCREEN_HEIGHT = Dimensions.get('window').height

export const scaleSizeHeight = (size) => {
    const scaledHeight = (WINDOW_HEIGHT / guidelineBaseHeight) * size
    return scaledHeight < 1 ? scaledHeight : Math.floor(scaledHeight)
}

export const scaleFont = (size) =>
    Math.floor(size * PixelRatio.getFontScale())

export const scaleSizeWidth = (size) =>
    Math.floor((WINDOW_WIDTH / guidelineBaseWidth) * size)

export const getScaledHeight = (width, height) => {
    return Math.floor(height * scaleSizeWidth(width) / width)
}

export { WINDOW_HEIGHT, WINDOW_WIDTH, WINDOW_SCREEN_HEIGHT }

export const getDensity = () => {
    let ratio = PixelRatio.get()
    if (ratio <= 1) {
        return 'mdpi'
    } else if (ratio <= 1.5) {
        return 'hdpi'
    } else if (ratio <= 2) {
        return 'xhdpi'
    } else if (ratio <= 3) {
        return 'xxhdpi'
    } else {
        return 'xxxhdpi'
    }
}
