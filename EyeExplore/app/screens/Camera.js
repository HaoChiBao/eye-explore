import { StyleSheet, Text, View, colorScheme } from "react-native";
import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!

import React, { useState, useEffect, useRef } from "react";
import Button from "./components/button";

export default function CameraPage() {

    const [hasCameraPermissions, setHasCameraPermission] = useState(null);
    const [hasMicPermissions, setHasMicPermissions] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeButtonText =
        colorScheme === 'light' ? styles.buttonLight : styles.buttonDark;
    const themeTextButtonStyle = colorScheme === 'light' ? styles.lightButtonStyle : styles.darkButtonStyle;


    useEffect(
        () => {
            (async () => {
                MediaLibrary.requestPermissionsAsync();
                const cameraStatus = await Camera.requestCameraPermissionsAsync();
                const micStatus = await Camera.requestMicrophonePermissionsAsync();
                setHasCameraPermission(cameraStatus.status === 'granted');
                setHasMicPermissions(micStatus.status === 'granted');
            })();
        }, []
    )

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Camera style={styles.camera}
                type={type}
                flashMode={flash}
                ref={cameraRef}>

                {/* <Text> Hello</Text> */}

            </Camera>

            <Button icon="mic" onPress={() => takePicture()}></Button>
        </View >
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: "1",
            backgroundColor: '#FFF',
            justifyContent: 'center',
        },

        camera: {
            flex: '1',
            borderRadius: 20,
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