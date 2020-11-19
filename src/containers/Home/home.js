import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Button from '../../components/Button/Button';

import styles from './style';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import helper from '../../controllers/helper';



class Home extends Component {

    componentWillMount() {
        AsyncStorage.getItem('notes')
            .then(v => {
                if (v !== null) {
                    let tmp = JSON.parse(v);
                    saveData.userNotes = tmp;
                }
            })
        AsyncStorage.getItem('stickyNotes')
            .then(v => {
                if (v !== null) {
                    let tmp = JSON.parse(v);
                    saveData.userStickyNotes = tmp;
                }
            })
        AsyncStorage.getItem('secretNotes')
            .then(v => {
                if (v !== null) {
                    let tmp = JSON.parse(v);
                    saveData.userSecretNotes = tmp;
                }
            })

        AsyncStorage.getItem('secretNotePassword')
            .then(v => {
                helper.asyncNotePassword = v
            })
        AsyncStorage.getItem('secretNotePasswordHint')
            .then(v => {
                helper.asyncNotePasswordHint = v
            })
    }



    renderHome() {
        return (
            <View style={{ width: '100%', alignItems: 'center', position: 'absolute' }}>
                <Button
                    styles={[buttons.navButton, { backgroundColor: '#1bb7e2' }]}
                    clicked={() => this.props.navigation.navigate('Notes')}
                >
                    <View style={[styles.navigationIconView, { backgroundColor: '#fff' }]}>
                        <Icon size={27} name='notebook' color='#1bb7e2' />
                    </View>
                    <Text style={[buttons.buttonText]}>Notlar</Text>
                </Button>


                <Button
                    styles={[buttons.navButton, { backgroundColor: '#ff9d5b' }]}
                    clicked={() => this.props.navigation.navigate('Sticky_Notes')}
                >
                    <View style={[styles.navigationIconView, { backgroundColor: '#fff' }]}>
                        <Icon size={27} name='sticker' color='#ff9d5b' />
                    </View>
                    <Text style={[buttons.buttonText]}>Yapışkan notlar</Text>
                </Button>

                <Button
                    clicked={() => this.props.navigation.navigate('Login_Secret_Notes')}
                    styles={[buttons.navButton, { backgroundColor: '#fc5db0' }]}
                >
                    <View style={[styles.navigationIconView, { backgroundColor: '#fff' }]}>
                        <Icon size={27} name='book-lock' color='#fc5db0' />
                    </View>
                    <Text style={[buttons.buttonText]}>Gizli notlar</Text>
                </Button>

            </View>

        )
    }

    render() {

        return (
            <View style={styles.Container}>
                <Image
                    blurRadius={0}
                    style={styles.backImg}
                    source={require('../../images/homeBackImg.jpg')} />
                {this.renderHome()}
            </View>
        )
    }
}


export default Home;
