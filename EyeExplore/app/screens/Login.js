import { addDoc, collection } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { System } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { View, Text, Button, Pressable, StyleSheet, Keyboard, KeyboardAvoidingView, useColorScheme, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!



// add register with google account

let system = new System();

function Login({ navigation }) {

    function auth() {

        console.log(1)
        if (email != '' && password != '') {

            signInWithEmailAndPassword(system.getAuth.auth, email, password).then((promise) => {
                console.log(promise.user.uid, '- user reference')
                console.log('auth accepted')

                // localStorage.setItem('flash-card-uid', promise.user.uid)
                // redirect to Home page from here

                navigation.navigate('Camera')
                return true

            }).catch((error) => {
                console.log(error)
            })

        } else {
            console.log('Please fill all fields properly')
            return false
        }

    }


    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeButtonText =
        colorScheme === 'light' ? styles.buttonLight : styles.buttonDark;
    const themeTextButtonStyle = colorScheme === 'light' ? styles.lightButtonStyle : styles.darkButtonStyle;

    return (
        <View id="login" style={[styles.container, themeContainerStyle]}>

            <View>
                <Text style={[styles.welcome, themeTextStyle]}>Sign In!            </Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={keyboardVerticalOffset} >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <TextInput variant="outlined" style={styles.input} type="text"
                                id='email' placeholder='Email Address'
                                placeholderTextColor={'#40376E'}
                                onChangeText={newText => setEmail(newText)}
                                defaultValue={email}>
                            </TextInput>
                            <TextInput variant="outlined" secureTextEntry={true} style={styles.input} type="Password"
                                id='password' placeholder='Password'
                                placeholderTextColor={'#40376E'}
                                onChangeText={newText => setPassword(newText)}
                                defaultValue={password}>
                            </TextInput>
                            <Pressable id="execute" style={[styles.button, themeTextButtonStyle]} onPress={() => auth()
                            }>
                                <Text style={[styles.start, themeButtonText]}>Login</Text>
                            </Pressable>

                            <Pressable id="execute" style={[styles.button, themeTextButtonStyle]} onPress={() => navigation.navigate('FaceCamera')
                            }>
                                <Text style={[styles.start, themeButtonText]}>Login with Face ID</Text>
                            </Pressable>
                            {/* <Button id='execute'>
                click</Button> */}
                            {/* <Text id='error-msg'></Text> */}
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
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

        subtext: {
            fontSize: "28px",
            color: "#40376E",
            textAlign: 'left',
        },

        container: {
            flex: "1",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F2F3FF',
        },

        welcome: {
            // display: 'flex',
            fontWeight: "500",
            fontSize: "45px",
            color: "#40376E",
            width: '130%',
            textAlign: 'left',
        },

        start: {
            textAlign: 'left',
            fontSize: "38px",
            color: "#F2F3FF",

        },

        input: {
            marginVertical: 5,
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

export default Login;