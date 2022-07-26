import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { SPLASH_BACKGROUND } from '../../assets/images';
import { SPLASH_SUBTITLE, SPLASH_TITLE, START_BANKING } from '../../constants/text-constants';
import styles from './styles';

export default function SplashScreen({ navigation }) {

    const onPress = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground source={SPLASH_BACKGROUND} style={styles.image}>
                <View style={styles.elementsContainer}>
                    <Text style={styles.title}>{SPLASH_TITLE}</Text>
                    <Text style={styles.subtitle}>{SPLASH_SUBTITLE}</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                        <Text style={styles.buttonText}>{START_BANKING}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}