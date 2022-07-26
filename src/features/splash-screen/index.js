import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function SplashScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
                <Text>Hello</Text>
        </SafeAreaView>
    );
}