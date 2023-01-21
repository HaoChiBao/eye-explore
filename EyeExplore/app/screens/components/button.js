import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Button({ title, onPress, icon, color }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'} />
            <Text styles={styles.text}>{title}</Text>
        </TouchableOpacity>
    )

}