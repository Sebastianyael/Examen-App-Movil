import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import PantallaInicio from './Screens/UsuariosScreen' 
import ListaDeUsuarios from './Screens/APIUsuarios'

import FlatListAlumnos from './Screens/pantallaUno' 
import PantallaDos from './Screens/pantallaDos'



type RootStackParamList = {
    'Inicio': undefined; 
    'FlatListAlumnos': undefined
    'pantallaDos': { alumnoId: string; alumnoNombre: string }
    'ListaUsuarios': undefined; 
};


const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
    return (
        <NavigationContainer>
            
            
            <Stack.Navigator initialRouteName="Inicio"> 
                
                <Stack.Screen 
                    name="Inicio" 
                    component={PantallaInicio} 
                    
                />

                <Stack.Screen 
                    name="FlatListAlumnos" 
                    component={FlatListAlumnos} 
                    options={{ title: 'Lista de Alumnos' }}
                />
                <Stack.Screen 
                    name="pantallaDos" 
                    component={PantallaDos} 
                    options={{ title: 'Detalle del Alumno' }}
                />

                <Stack.Screen 
                    name="ListaUsuarios" 
                    component={ListaDeUsuarios} 
                    options={{ title: 'API REST Usuarios' }}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}