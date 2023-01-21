import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';
import { Linking } from 'react-native';


export function PermissionsPage({ navigation }) {
    const [cameraPermissionStatus, setCameraPermissionStatus] = useState < CameraPermissionStatus > ('not-determined');
    const [microphonePermissionStatus, setMicrophonePermissionStatus] = useState < CameraPermissionStatus > ('not-determined');

    const requestMicrophonePermission = useCallback(async () => {
        console.log('Requesting microphone permission...');
        const permission = await Camera.requestMicrophonePermission();
        console.log(`Microphone permission status: ${permission}`);

        if (permission === 'denied') await Linking.openSettings();
        setMicrophonePermissionStatus(permission);
    }, []);

    const requestCameraPermission = useCallback(async () => {
        console.log('Requesting camera permission...');
        const permission = await Camera.requestCameraPermission();
        console.log(`Camera permission status: ${permission}`);

        if (permission === 'denied') await Linking.openSettings();
        setCameraPermissionStatus(permission);
    }, []);

    useEffect(() => {
        if (cameraPermissionStatus === 'authorized' && microphonePermissionStatus === 'authorized') navigation.replace('CameraPage');
    }, [cameraPermissionStatus, microphonePermissionStatus, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to{'\n'}EyeExplore.</Text>
            <View style={styles.permissionsContainer}>
                {cameraPermissionStatus !== 'authorized' && (
                    <Text style={styles.permissionText}>
                        EyeExplore needs <Text style={styles.bold}>Camera permission</Text>.{' '}
                        <Text style={styles.hyperlink} onPress={requestCameraPermission}>
                            Grant
                        </Text>
                    </Text>
                )}
                {microphonePermissionStatus !== 'authorized' && (
                    <Text style={styles.permissionText}>
                        EyeExplore needs <Text style={styles.bold}>Microphone permission</Text>.{' '}
                        <Text style={styles.hyperlink} onPress={requestMicrophonePermission}>
                            Grant
                        </Text>
                    </Text>
                )}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    welcome: {
        fontSize: 38,
        fontWeight: 'bold',
        maxWidth: '80%',
    },
    banner: {
        position: 'absolute',
        opacity: 0.4,
        bottom: 0,
        left: 0,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    permissionsContainer: {
        marginTop: 10,
    },
    permissionText: {
        fontSize: 17,
    },
    hyperlink: {
        color: '#007aff',
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
});