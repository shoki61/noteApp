import * as React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SImage from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/Feather'


import buttons from './src/styles/buttons';

//kendi oluşturduğum  sınıf componentleri;
import Home from './src/views/pages/home';
import Notes from './src/views/pages/notes';
import Sticky_Notes from './src/views/pages/stickyNotes';
import Edit_Note from './src/views/pages/editNote';
import Add_New_Note from './src/views/pages/addNewNote';
import Show_Note from './src/views/pages/showNote';
import Header from './src/views/header';
import Add_New_Sticky_Note from './src/views/pages/addNewStickyNote';


const Stack = createStackNavigator();

function App( ) {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={({navigation})=>({
                                 headerStyle:{
                                     backgroundColor:'#0EBEDA',
                                 },
                                 headerLeft: () => (
                                     <TouchableOpacity onPress={()=>navigation.goBack()} style={buttons.headerBackButton}>
                                         <Icon name='chevron-left' size={35} color='#fff'/>
                                     </TouchableOpacity>
                                 ),
                                 headerTintColor:'#fff',
                                 headerTitleAlign:'center'
                             })}
                             initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    options={{
                        title:'Ana sayfa',
                        headerLeft:false

                    }}
                    component={Home} />

                <Stack.Screen
                    name="Notes"
                    options={{
                        title:'Notlarım',

                    }}
                    component={Notes} />

                <Stack.Screen
                    name="Sticky_Notes"
                    options={{
                        title:'Yapışkan Notlarım'
                    }}
                    component={Sticky_Notes} />

                <Stack.Screen
                    name="Edit_Note"
                    options={{
                        title:'Not Düzenleme'
                    }}
                    component={Edit_Note} />

                <Stack.Screen
                    name="Add_New_Note"
                    options={{
                        title:'Yeni Not'
                    }}
                    component={Add_New_Note} />

                <Stack.Screen
                    name="Show_Note"
                    options={{
                        headerShown:false
                    }}
                    component={Show_Note} />

                <Stack.Screen
                    name="Add_New_Sticky_Note"
                    options={{
                        title:'Yeni Yapışkan Not'
                    }}
                    component={Add_New_Sticky_Note} />

                <Stack.Screen
                    name="Header"
                    component={Header} />



            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
