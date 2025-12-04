import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function PantallaCamara() {
    const [facing, setFacing] = useState("back");
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Cargando permisos...</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>
                    Necesitamos tu permiso para acceder a la cámara.
                </Text>

                <Button title="Otorgar Permiso" onPress={requestPermission} color="#007AFF" />
            </View>
        );
    }

    function toggleCameraType() {
        setFacing((current) => (current === "back" ? "front" : "back"));
    }

    return (
        <View style={styles.cameraContainer}>
            <CameraView style={styles.camera} facing={facing}>
                <View style={styles.buttonContainer}>
                    <Button title="Cambiar Cámara" onPress={toggleCameraType} color="#FFFFFF" />
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
    },
    permissionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFBEB',
    },
    permissionText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: '#B57D00',
    },
    cameraContainer: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
});
