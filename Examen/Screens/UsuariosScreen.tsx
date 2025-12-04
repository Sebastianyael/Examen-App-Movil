import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';


import BotonSimple from '../Components/boton'; 


type RootStackParamList = {
    'Inicio': undefined; 
    'FlatListAlumnos': undefined;
    'pantallaDos': { alumnoId: string; alumnoNombre: string };
    'ListaUsuarios': undefined; 
    'camara':undefined
};


export default function PantallaInicio() {
    
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Menú Principal</Text>
                <Text style={styles.subtitle}>Selecciona una opción de navegación</Text>
                
                
                <BotonSimple
                    titulo="FlatList"
                    onPress={() => navigation.navigate('FlatListAlumnos')}
                />

                
                <BotonSimple
                    titulo="API REST"
                    onPress={() => navigation.navigate('ListaUsuarios')}
                />

                <BotonSimple
                    titulo="Camara"
                    onPress={() => navigation.navigate('camara')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1E293B',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 40,
        color: '#64748B',
    }
});