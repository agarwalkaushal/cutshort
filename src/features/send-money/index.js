import React from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { LEFT_CHEVRON, SEND_MONEY_BG } from '../../assets/images';
import Button from '../../common/components/button';
import { COLOR_010A43, COLOR_464E8A, COLOR_FF2E63, COLOR_FFFFFF } from '../../constants/color-constants';
import { BACK, DONT_MONEY, formatAmount, NEW_REQUEST, REQUESTING_FOR, SEND_MONEY } from '../../constants/text-constants';
import { scaleSize } from '../../utils/scales';
import styles from './styles';

export default function SendMoney({ navigation }) {

    const backPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR_010A43} barStyle="light-content"/>
            <ImageBackground source={SEND_MONEY_BG} style={styles.imageBg}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.subHeader} onPress={backPress}>
                        <Image style={styles.navButton} source={LEFT_CHEVRON} />
                        <Text style={styles.back}>{BACK}</Text>
                    </TouchableOpacity>
                    <Text style={styles.newRequest}>{NEW_REQUEST}</Text>
                </View>

                <View style={styles.outerCircle}>
                    <View style={styles.innerCircle}>
                        <Image source={{ uri: 'https://i.ibb.co/5Khh8Q2/Ellipse-10.png' }} style={styles.photo} />
                    </View>
                </View>
                <Text style={styles.name}>{'Adeleke Ramon'}</Text>
                <Text style={styles.requestingFor}>{REQUESTING_FOR}</Text>
                <Text style={styles.amount}>{formatAmount(200000)}</Text>
                <View style={styles.buttons}>
                    <Button text={SEND_MONEY} onPress={() => { }} textColor={COLOR_FFFFFF} borderColor={COLOR_FF2E63} bgColor={COLOR_FF2E63} />
                    <View style={{ height: scaleSize(16) }} />
                    <Button text={DONT_MONEY} onPress={() => { }} textColor={COLOR_464E8A} borderColor={COLOR_464E8A} />
                </View>
            </ImageBackground>
        </View>
    );
}