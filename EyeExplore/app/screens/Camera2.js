import { StyleSheet, Text, View } from "react-native";
import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import React, { useState, useEffect, useRef } from "react";
import Button from "./components/button";

export default function Camera2() {

    const [hasCameraPermissions, setHasCameraPermission] = useState(null);
    const [hasMicPermissions, setHasMicPermissions] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

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
        <View style={styles.container}>
            <Camera style={styles.camera}
                type={type}
                flashMode={flash}
                ref={cameraRef}>

                {/* <Text> Hello</Text> */}

            </Camera>

            <Button icon="check" onPress={() => takePicture()}></Button>
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
            flex: '0.7',

        }
    }
)