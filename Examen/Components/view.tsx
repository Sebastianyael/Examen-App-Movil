import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';


interface TarjetaProps { 
    children: React.ReactNode;
    estiloContenedor?: ViewStyle;
}

export default function Contenedor({ 
    children, 
    estiloContenedor 
}: TarjetaProps) {
    
  
    return (
        <View style={[styles.tarjetaBase, estiloContenedor]}>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    tarjetaBase: {
        backgroundColor: '#FFFFFF', 
        borderRadius: 12,           
        padding: 16,                
        marginVertical: 8,          
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,  
        width:300            
    },
});