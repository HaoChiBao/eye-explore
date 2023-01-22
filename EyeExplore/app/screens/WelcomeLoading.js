import React from 'react';
import { StyleSheet, View, Text, Pressable, onPress, useColorScheme, } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WelcomeLoading({ navigation }) {

    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeButtonText =
        colorScheme === 'light' ? styles.buttonLight : styles.buttonDark;
    const themeTextButtonStyle = colorScheme === 'light' ? styles.lightButtonStyle : styles.darkButtonStyle;

    return (
        <View style={[styles.container, themeContainerStyle]}>


            <Text style={[styles.welcome, themeTextStyle]}>Welcome!</Text>
            <Pressable style={{ ...styles.button, ...themeTextButtonStyle }} onPress={() => navigation.navigate('SignUpLogin')
            }>
                <Text style={{ ...styles.start, ...themeButtonText }}>Let's get started.</Text>
            </Pressable>
            <StatusBar />
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
            // backgroundColor: '#40376E',
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
            // color: "#40376E",
            textAlign: 'left',

        },

        start: {
            textAlign: 'left',
            fontSize: "38px",
            //color: "#F200000",

        },

        lightContainer: {
            backgroundColor: '#F2F3FF',
        },

        darkContainer: {
            backgroundColor: '#40376E',
        },

        lightThemeText: {
            color: '#40376E',
        },
        darkThemeText: {
            color: '#F2F3FF',
        },

        buttonLight: {
            color: '#F2F3FF',
        },

        buttonDark: {
            color: '#40376E',
        },


        lightButtonStyle: {
            color: '#F2F3FF',
            backgroundColor: '#40376E'
        },

        darkButtonStyle: {
            color: '#40376E',
            backgroundColor: '#F2F3FF'
        }

    }
)

export default WelcomeLoading;