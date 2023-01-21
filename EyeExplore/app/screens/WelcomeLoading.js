import React from 'react';
import { StyleSheet, View, Text, Pressable, onPress } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WelcomeLoading({ navigation }) {

    return (
        <View style={styles.container}>


            <Text style={styles.welcome}>Welcome!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SignUpLogin')
            }>
                <Text style={styles.start}>Let's get started.</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: '#40376E',
        },

        container: {
            flex: "1",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F2F3FF',
        },

        welcome: {
            fontWeight: "700",
            fontSize: "64px",
            color: "#40376E",
            textAlign: 'left',

        },

        start: {
            textAlign: 'left',
            fontSize: "38px",
            color: "#F2F3FF",

        },

    }
)

export default WelcomeLoading;