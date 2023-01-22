
import { View, Text, Button, Pressable, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from "@react-native-material/core";
import React, { useState } from 'react'
import { collection, setDoc, doc } from 'firebase/firestore/lite';
import { System } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// add register with google account

let system = new System();

function Register({ navigation }) {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [username, setUsername] = useState('');

    function auth() {
        if (username != '' && email != '' && password != '' && password.length >= 6) {

            createUserWithEmailAndPassword(system.getAuth.auth, email, password).then((promise) => {
                let uid = promise.user.uid
                console.log(uid, '- user reference')

                // if (cum == 0) {
                //     setDoc(doc(system.db, 'users', uid), { username: username })
                //         .then(() => {
                console.log('success - added in db')

                // save uid in local storage
                // localStorage.setItem('flash-card-uid', promise.user.uid)
                // redirect to Home page from here
                navigation.navigate('Camera')
                //     })
                // cum += 1
                // }

            }).catch((error) => {
                console.log(error)
            })

        } else {
            console.log('Please fill all fields properly')
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

                            <TextInput variant="outlined" style={styles.input} type="text" id='username' placeholder='Username' placeholderTextColor={'#40376E'}
                                onChangeText={newText => setUsername(newText)}
                                defaultValue={username}>
                            </TextInput>
                            <TextInput variant="outlined" style={styles.input} type="text" id='email' placeholder='Email Address' placeholderTextColor={'#40376E'}
                                onChangeText={newText => setEmail(newText)}
                                defaultValue={email}
                            ></TextInput>
                            <TextInput variant="outlined" secureTextEntry={true} style={styles.input} type="Password" id='password' placeholder='Password' placeholderTextColor={'#40376E'}
                                onChangeText={newText => setPassword(newText)}
                                defaultValue={password}
                            ></TextInput>
                            <Pressable id="execute" style={styles.button} onPress={() => auth()
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