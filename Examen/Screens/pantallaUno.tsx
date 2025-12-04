import React from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity ,SafeAreaView} from "react-native";
import Contenedor from "../Components/view";

import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    'FlatListAlumnos': undefined; 
    'pantallaDos': { alumnoId: string; alumnoNombre: string }; 
};

type Alumno = {
    id: string;
    nombre: string;
    grado?: string;
}

const ALUMNOS: Alumno[] = [
    { id: "1", nombre: "Sebastian Yael", grado: "4 42" },
    { id: "2", nombre: "Carlos Valentin", grado: "4 42" },
    { id: "3", nombre: "Samuel Ugalde", grado: "4 42" },
    { id: "4", nombre: "Yuliana Hernandez", grado: "4 42" },
    { id: "5", nombre: "Ana karen", grado: "4 42" },
]

export default function FlatListAlumnos() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const renderItem = ({ item }: { item: Alumno }) => (
        <TouchableOpacity 
            style={styles.item} 
            activeOpacity={0.7} 
            onPress={() => 
                navigation.navigate('pantallaDos', {
                    alumnoId: item.id,
                    alumnoNombre: item.nombre,
                })
            }
        >
            <Contenedor >
                <Text style={styles.nombre}>{item.nombre}</Text>
                {item.grado ? <Text style={styles.grado}>{item.grado}</Text> : null}
            </Contenedor>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <FlatList
                data={ALUMNOS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 12,
        color: "#0F172A",
    },
    listContent: {
        paddingBottom: 24,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 10,
        
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 1,
    },
    info: {
        marginLeft: 12,
    },
    nombre: {
        fontSize: 16,
        fontWeight: "600",
        color: "#0F172A",
    },
    grado: {
        fontSize: 13,
        color: "#64748B",
        marginTop: 2,
    },
    separator: {
        height: 10,
    },
})

