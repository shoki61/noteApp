import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//kendi oluşturduğum  sınıf componentleri;
import Home from './src/views/pages/home';
import Notes from './src/views/pages/notes';
import Sticky_Notes from './src/views/pages/stickyNotes';
import Edit_Note from './src/views/pages/editNote';
import Add_New_Note from './src/views/pages/addNewNote';
import Show_Note from './src/views/pages/showNote';
import Header from './src/views/header';


const Stack = createStackNavigator();

function App( ) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home} />

                <Stack.Screen
                    name="Notes"
                    component={Notes} />

                <Stack.Screen
                    name="Sticky_Notes"
                    component={Sticky_Notes} />

                <Stack.Screen
                    name="Edit_Note"
                    component={Edit_Note} />

                <Stack.Screen
                    name="Add_New_Note"
                    component={Add_New_Note} />

                <Stack.Screen
                    name="Show_Note"
                    options={{
                        headerShown:false
                    }}
                    component={Show_Note} />

                <Stack.Screen
                    name="Header"
                    component={Header} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
