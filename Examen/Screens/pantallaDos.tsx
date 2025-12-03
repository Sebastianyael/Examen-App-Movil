import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';


type RootStackParamList = {
    'FlatListAlumnos': undefined;
    'pantallaDos': { alumnoId: string; alumnoNombre: string }; 
};


type PantallaDosRouteProp = RouteProp<RootStackParamList, 'pantallaDos'>;


export default function PantallaDos() {

    const route = useRoute<PantallaDosRouteProp>();
    const { alumnoId, alumnoNombre } = route.params;
    
 

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.card}>
                <Text style={styles.title}>Detalles del Alumno</Text>
                
                <View style={styles.detailRow}>
                    <Text style={styles.label}> Nombre Completo:</Text>
                    <Text style={styles.value}>{alumnoNombre}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}># ID de Registro:</Text>
                    <Text style={styles.value}>{alumnoId}</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E2E8F0",
        padding: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1E293B",
        textAlign: 'center',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#475569",
    },
    value: {
        fontSize: 16,
        color: "#1E293B",
        fontWeight: 'normal',
        maxWidth: '60%',
        textAlign: 'right',
    },
    note: {
        marginTop: 30,
        fontSize: 14,
        color: "#64748B",
        fontStyle: 'italic',
        textAlign: 'center',
    }
});