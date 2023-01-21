import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Button({ title, onPress, icon }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Entypo name={icon} size={40} color={"#F2F3FF"} />
                {/* <Text styles={styles.text}>{title}</Text> */}
            </TouchableOpacity>
        </View >
    )

}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

    },

    button: {
        height: 80,
        width: 250,
        backgroundColor: "#40376E",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 39,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 80,
        color: '#F2F3FF',
        marginLeft: 10,
    }
}
)