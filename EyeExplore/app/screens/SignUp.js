import React from 'react';
import { View, Text, Button, Pressable, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from "@react-native-material/core";

import { collection, setDoc, doc } from 'firebase/firestore/lite';
import { System } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// add register with google account

let system = new System();
let state = true
function Register({ navigation }) {
    window.onload = function () {
        if (state) {

            const button = document.getElementById('execute')

            button.addEventListener('click', () => {
                const username = document.getElementById('username').value
                const email = document.getElementById('email').value
                const password = document.getElementById('password').value

                if (username != '' && email != '' && password != '' && password.length >= 6) {

                    createUserWithEmailAndPassword(system.getAuth.auth, email, password).then((promise) => {
                        let uid = promise.user.uid
                        console.log(uid, '- user reference')

                        setDoc(doc(system.db, 'users', uid), { username: username })
                            .then(() => {
                                console.log('success - added in db')

                                // save uid in local storage
                                localStorage.setItem('flash-card-uid', promise.user.uid)

                                // redirect to Home page from here
                            })

                    }).catch((error) => {
                        console.log(error)
                    })

                } else {
                    document.getElementById('error-msg').innerHTML = 'Please fill all fields properly'
                    console.log('Please fill all fields properly')
                }

            })
        }
    }


    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    return (
        <View id="register" style={styles.container}>


            <View>
                <Text style={styles.welcome}>Create an Account!   </Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={keyboardVerticalOffset} >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>

                            <TextInput variant="outlined" style={styles.input} type="text" id='username' placeholder='Username' placeholderTextColor={'#40376E'}></TextInput>
                            <TextInput variant="outlined" style={styles.input} type="text" id='email' placeholder='Email Address' placeholderTextColor={'#40376E'}></TextInput>
                            <TextInput variant="outlined" secureTextEntry={true} style={styles.input} type="Password" id='password' placeholder='Password' placeholderTextColor={'#40376E'}></TextInput>
                            <Pressable id="execute" style={styles.button} onPress={() => navigation.navigate('Camera')
                            }>
                                <Text style={styles.start}>Sign Up</Text>
                            </Pressable>
                            {/* <Button id='execute'>
                click</Button> */}
                            {/* <Text id='error-msg'></Text> */}
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        </View >
    );

}

const styles = StyleSheet.create(
    {
        button: {
            alignItems: 'left',
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
            margin: 6,
            alignItems: 'center',
            backgroundColor: '#F2F3FF',
        },

        welcome: {
            display: 'flex',
            fontWeight: "500",
            fontSize: "45px",
            color: "#40376E",
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


    }
)



export default Register;