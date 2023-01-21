// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import WelcomeLoading from './app/screens/WelcomeLoading';
import SignUpLogin from './app/screens/SignUpLogin';
import SignUp from './app/screens/SignUp';
import Login from './app/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraPage from './app/screens/Camera';

const Stack = createNativeStackNavigator();



export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First Loading"
          component={WelcomeLoading}
        />
        <Stack.Screen name="SignUpLogin" component={SignUpLogin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Camera" component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
