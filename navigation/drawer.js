/* //importo de librerias externas
import React from 'react'

//npm install -g expo-cli

//para limpiar el cache
//expo r -c

//back hosteado y no es necesario copiarlo
//instalar redux y copiar carpeta redux

//modelos de navegacion de phone con drawer/stacks/tabs
//instalar https://reactnavigation.org/docs/getting-started/

import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/home'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Home} />
        </Drawer.Navigator>
    )
} */


//tab para home, login, places