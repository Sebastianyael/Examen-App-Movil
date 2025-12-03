import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import FlatListAlumnos from './Screens/pantallaUno' 
import PantallaDos from './Screens/pantallaDos'


type RootStackParamList = {
    'FlatListAlumnos': undefined
    'pantallaDos': { alumnoId: string; alumnoNombre: string }
};


const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="FlatListAlumnos">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
