import * as React from 'react';
import { TouchableOpacity, Text, StatusBar, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconE from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Feather'
import { observer } from 'mobx-react';


import buttons from './src/styles/buttons';

import Home from './src/containers/Home/home';
import Notes from './src/containers/Notes/notes';
import Sticky_Notes from './src/containers/StickyNotes/stickyNotes';
import Edit_Note from './src/containers/EditNote/editNote';
import Add_New_Note from './src/containers/AddNewNote/addNewNote';
import Show_Note from './src/containers/ShowNote/showNote';
import Add_New_Sticky_Note from './src/containers/AddNewStickyNote/addNewStickyNote';
import Edit_Sticky_Note from './src/containers/EditStickyNote/editStickyNote';
import Login_Secret_Notes from './src/containers/LoginSecretNotes/loginSecretNotes';
import Secret_Notes from './src/containers/SecretNotes/secretNotes';
import Show_Secret_Note from './src/containers/ShowSecretNote/showSecretNote';
import Edit_Secret_Note from './src/containers/EditSecretNote/editSecretNote';
import Add_Secret_Note from './src/containers/AddSecretNote/addSecretNote';

import helper from './src/controllers/helper';
import saveData from './src/controllers/saveData';

const Stack = createStackNavigator();

class App extends React.Component {

    state = {
        selectText: 'Seç',
        selectStickyText: 'Seç'
    }

    renderNavigation() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#5373bd',
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={buttons.headerBackButton}>
                            <Icon name='chevron-left' size={35} color='#fff' />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.popToTop()}
                            style={[buttons.headerBackButton, { marginRight: 5 }]}>
                            <IconE name='home' size={25} color='#fff' />
                        </TouchableOpacity>
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
                                <TouchableOpacity activeOpacity={helper.buttonOpacity}
                                    onPress={() => {
                                        helper.controlSelectNote();
                                        this.setState({ selectText: helper.selectNote ? 'Vazgeç' : 'Seç' })
                                    }}
                                    style={[buttons.settingButton, { display: saveData.userNotes.length > 0 ? 'flex' : 'none' }]}>


                                    <Text style={buttons.deleteButtonText}>
                                        {
                                            this.state.selectText
                                        }
                                    </Text>

                                </TouchableOpacity>

                            ) :
                                false

                        }}
                        component={Notes} />

                    <Stack.Screen
                        name='Sticky_Notes'
                        options={{
                            title: 'Yapışkan Notlarım',
                            headerRight: saveData.userStickyNotes.length > 0 ? () => (
                                <TouchableOpacity activeOpacity={helper.buttonOpacity}
                                    onPress={() => {
                                        helper.controlSelectStickyNote();
                                        this.setState({ selectStickyText: helper.selectStickyNote ? 'Vazgeç' : 'Seç' })
                                    }}
                                    style={[buttons.settingButton, { display: saveData.userStickyNotes.length > 0 ? 'flex' : 'none' }]}>


                                    <Text style={buttons.deleteButtonText}>
                                        {
                                            this.state.selectStickyText
                                        }
                                    </Text>

                                </TouchableOpacity>

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
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                {this.renderNavigation()}
            </>
        )
    }
}

export default observer(App);
