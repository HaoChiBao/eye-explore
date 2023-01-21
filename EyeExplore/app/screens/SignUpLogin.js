import React from 'react';
import { StyleSheet, View, Text, Pressable, onPress } from 'react-native';

function SignUpLogin({ navigation }) {
    return (
        <View style={styles.container}>

            <View>

                <Text style={styles.welcome}>Discover with EyeExplore!</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')
                }>
                    <Text style={styles.start}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')
                }>
                    <Text style={styles.start}>Log in</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        button: {
            alignItems: 'center',
            justifyContent: 'left',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: '#40376E',
            marginVertical: '2%',
        },

        container: {
            flex: "1",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F2F3FF',
        },

        welcome: {
            fontWeight: "500",
            fontSize: "45px",
            color: "#40376E",
            textAlign: 'left',

        },

        start: {
            textAlign: 'center',
            fontSize: "38px",
            color: "#F2F3FF",

        },

    }
)

export default SignUpLogin;