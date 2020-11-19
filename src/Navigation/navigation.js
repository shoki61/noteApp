import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import IconE from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Feather'


import Button from '../components/Button/Button';
import Home from '../containers/Home/home';
import Notes from '../containers/Notes/notes';
import Sticky_Notes from '../containers/StickyNotes/stickyNotes';
import Edit_Note from '../containers/EditNote/editNote';
import Add_New_Note from '../containers/AddNewNote/addNewNote';
import Show_Note from '../containers/ShowNote/showNote';
import Add_New_Sticky_Note from '../containers/AddNewStickyNote/addNewStickyNote';
import Edit_Sticky_Note from '../containers/EditStickyNote/editStickyNote';
import Login_Secret_Notes from '../containers/LoginSecretNotes/loginSecretNotes';
import Secret_Notes from '../containers/SecretNotes/secretNotes';
import Show_Secret_Note from '../containers/ShowSecretNote/showSecretNote';
import Edit_Secret_Note from '../containers/EditSecretNote/editSecretNote';
import Add_Secret_Note from '../containers/AddSecretNote/addSecretNote';

import buttons from '../styles/buttons';

import helper from '../controllers/helper';
import saveData from '../controllers/saveData';


const Stack = createStackNavigator();

const navigation = () => {

    const [selectText, setSelectText] = useState('Seç');
    const [selectStickyText, setSelectStickyText] = useState('Seç');

    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#5373bd',
            },
            headerLeft: () => (
                <Button clicked={() => navigation.goBack()} styles={buttons.headerBackButton}>
                    <Icon name='chevron-left' size={35} color='#fff' />
                </Button>
            ),
            headerRight: () => (
                <Button
                    clicked={() => navigation.popToTop()}
                    styles={[buttons.headerBackButton, { marginRight: 5 }]}>
                    <IconE name='home' size={25} color='#fff' />
                </Button>
            ),
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        })}
            initialRouteName="Home">
            <Stack.Screen
                name='Home'
                options={{
                    title: 'Ana sayfa',
                    headerShown: false

                }}
                component={Home} />

            <Stack.Screen
                name='Notes'
                options={{
                    title: 'Notlarım',
                    headerRight: saveData.userNotes.length > 0 ? () => (
                        <Button
                            opacity={helper.buttonOpacity}
                            clicked={() => {
                                helper.controlSelectNote();
                                setSelectText(helper.selectNote ? 'Vazgeç' : 'Seç')
                            }}
                            styles={[buttons.settingButton, { display: saveData.userNotes.length > 0 ? 'flex' : 'none' }]}
                        >
                            <Text style={buttons.deleteButtonText}>
                                {selectText}
                            </Text>
                        </Button>

                    ) :
                        false
                }}
                component={Notes} />

            <Stack.Screen
                name='Sticky_Notes'
                options={{
                    title: 'Yapışkan Notlarım',
                    headerRight: saveData.userStickyNotes.length > 0 ? () => (
                        <Button
                            opacity={helper.buttonOpacity}
                            clicked={() => {
                                helper.controlSelectStickyNote();
                                setSelectStickyText(helper.selectStickyNote ? 'Vazgeç' : 'Seç')
                            }}
                            styles={[buttons.settingButton, { display: saveData.userStickyNotes.length > 0 ? 'flex' : 'none' }]}
                        >
                            <Text style={buttons.deleteButtonText}>
                                {selectStickyText}
                            </Text>
                        </Button>
                    ) :
                    false
                }}
                component={Sticky_Notes} />

            <Stack.Screen
                name='Edit_Note'
                options={{
                    title: 'Not Düzenleme'
                }}
                component={Edit_Note} />

            <Stack.Screen
                name='Add_New_Note'
                options={{
                    title: 'Yeni Not'
                }}
                component={Add_New_Note} />

            <Stack.Screen
                name='Show_Note'
                options={{
                    title: false
                }}
                component={Show_Note} />

            <Stack.Screen
                name='Add_New_Sticky_Note'
                options={{
                    title: 'Yeni Yapışkan Not'
                }}
                component={Add_New_Sticky_Note} />

            <Stack.Screen
                name='Edit_Sticky_Note'
                options={{
                    title: 'Not düzenlemesi'
                }}
                component={Edit_Sticky_Note} />

            <Stack.Screen
                name='Login_Secret_Notes'
                options={{
                    title: 'Gizli Notlara Giriş'
                }}
                component={Login_Secret_Notes} />

            <Stack.Screen
                name='Secret_Notes'
                options={{
                    title: 'Gizli Notlar'
                }}
                component={Secret_Notes} />

            <Stack.Screen
                name='Show_Secret_Note'
                options={{
                    title: 'Gizli Not'
                }}
                component={Show_Secret_Note} />


            <Stack.Screen
                name='Edit_Secret_Note'
                options={{
                    title: 'Gizli Not Düzenlemesi'
                }}
                component={Edit_Secret_Note} />

            <Stack.Screen
                name='Add_Secret_Note'
                options={{
                    title: 'Gizli Not Ekle'
                }}
                component={Add_Secret_Note} />

        </Stack.Navigator>
    </NavigationContainer>
    )
};

export default observer(navigation);