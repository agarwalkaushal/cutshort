import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { NAV_BUTTON } from '../../assets/images';
import Button from '../../common/components/button'; import Modal from '../../common/components/modal';
import { COLOR_010A43, COLOR_464E8A } from '../../constants/color-constants';
import { ADD_MONEY, BALANCE_IS, formatAmount, REQUEST_MONEY, SEND_MONEY, USER_GREETING } from '../../constants/text-constants';
import styles from './styles';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR_010A43} />
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <TouchableOpacity>
                        <Image style={styles.navButton} source={NAV_BUTTON} />
                    </TouchableOpacity>
                    <Text style={styles.greeting}>{USER_GREETING('Sandra')}</Text>
                </View>
                <TouchableOpacity style={styles.addMoneyContainer}>
                    <Text style={styles.addMoneyText}>{ADD_MONEY}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceIsText}>{BALANCE_IS}</Text>
                <Text style={styles.amountText}>{formatAmount(200000)}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button text={REQUEST_MONEY} onPress={() => { }} textColor={COLOR_464E8A} borderColor={COLOR_464E8A} />
                <Button text={SEND_MONEY} onPress={() => { }} textColor={COLOR_464E8A} borderColor={COLOR_464E8A} />
            </View>
            <Modal>
                {/* TODO */}
            </Modal>
        </View>
    );
}