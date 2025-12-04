import React from 'react';
import { 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    ViewStyle, 
    TextStyle 
} from 'react-native';


interface BotonProps {
    
    titulo: string;
   
    onPress: () => void;
}

export default function BotonSimple({ 
    titulo, 
    onPress 
}: BotonProps) {

    return (
        <TouchableOpacity
            style={styles.botonBase}
            onPress={onPress}
            activeOpacity={0.7} 
        >
            <Text style={styles.textoBase}>
                {titulo}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    botonBase: {
        backgroundColor: '#4C6EF5', 
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
       
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    textoBase: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase', 
    },
});