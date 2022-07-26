import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button(props) {
    
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: props.bgColor, borderColor: props.borderColor}]} onPress={props?.onPress}>
            <Text style={[styles.text, { color: props.textColor }]}>{props?.text}</Text>
        </TouchableOpacity>
    );
}