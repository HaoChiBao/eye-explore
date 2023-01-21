import { addDoc, collection } from 'firebase/firestore/lite';
import { System } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { View, Text, Button, Pressable, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from "@react-native-material/core";


// add register with google account

let system = new System();
let state = true

function Login({ navigation }) {
    window.onload = function () {
        if (state) {

            const button = document.getElementById('execute')

            const dbUsers = collection(system.db, 'users')

            button.addEventListener('click', () => {
                // const username = document.getElementById('username').value
                const email = document.getElementById('email').value
                const password = document.getElementById('password').value

                if (email != '' && password != '') {

                    signInWithEmailAndPassword(system.getAuth.auth, email, password).then((promise) => {
                        console.log(promise.user.uid, '- user reference')
                        console.log('auth accepted')

                        localStorage.setItem('flash-card-uid', promise.user.uid)
                        // redirect to Home page from here
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
        <View id="login" style={styles.container}>

            <View>
                <Text style={styles.welcome}>Sign In!            </Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={keyboardVerticalOffset} >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <TextInput variant="outlined" style={styles.input} type="text" id='email' placeholder='Email Address' placeholderTextColor={'#40376E'}></TextInput>
                            <TextInput variant="outlined" secureTextEntry={true} style={styles.input} type="Password" id='password' placeholder='Password' placeholderTextColor={'#40376E'}></TextInput>
                            <Pressable id="execute" style={styles.button} onPress={() => navigation.navigate('Camera')
                            }>
                                <Text style={styles.start}>Login</Text>
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
            margin: 1,
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


    }
)

export default Login;