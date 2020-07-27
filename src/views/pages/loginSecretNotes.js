import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView,LayoutAnimation} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../styles/loginSecretNotesStyle';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';
import controlData from '../../controllers/controlData';

class Login_Secret_Notes extends Component{

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderLogin(){
        return(
            <ScrollView style={[styles.loginContainer, {paddingTop: 150}]} contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.inputView}>
                    <View style={styles.iconView}>
                        <Icon name='lock' size={18} color='#fff'/>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={ password => {
                            helper.secretNotePassword = password;
                            if(helper.asyncNotePassword!=='') helper.passwordWarning=false
                        }}
                        placeholder='şifrenizi giriniz...'/>
                </View>
                <TouchableOpacity
                    activeOpacity={helper.buttonOpacity}
                    style={buttons.loginButton}
                    onPress={()=>controlData.controlPassword(helper.secretNotePassword,helper.secretNoteHint)}
                >
                    <IconM color='#fff' size={25} name='check' />
                    <Text style={buttons.loginButtonText}>Onayla</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    renderSignUp(){
        return(
            <ScrollView style={styles.loginContainer} contentContainerStyle={{alignItems:'center'}}>
                <Text style={styles.informationMessage}>
                    <Text style={{fontWeight:'bold',}}>Gizli notlara</Text> şu anda oluşturacağınız şifre ile ulaşabileceksiniz bu yüzden akılda kalıcı ve güvenli bir şifre oluşturmanızı öneririz
                </Text>
                <View style={styles.inputView}>
                    <View style={styles.iconView}>
                        <Icon name='lock' size={18} color='#fff'/>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={ password => {
                            helper.secretNotePassword = password;
                            if(helper.asyncNotePassword!=='') helper.passwordWarning=false
                        }}
                        placeholder='şifre oluştur...'/>
                </View>
                {
                    helper.passwordWarning &&
                    <Text style={styles.warningText}>
                        şifre boş bırakılamaz
                    </Text>
                }

                <Text style={styles.informationMessage}>
                    Şifrenizi unuttuğunuz takdirde kolayca hatırlayabilmek için bir ipucu oluşturabilirsiniz (isteğe bağlı)
                </Text>
                <View style={styles.inputView}>
                    <View style={styles.iconView}>
                        <IconM name='lightbulb-on' size={23} color='#fff'/>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={ hint => helper.secretNoteHint = hint}
                        placeholder='ipucu oluştur...'/>
                </View>

                <TouchableOpacity
                    activeOpacity={helper.buttonOpacity}
                    style={buttons.loginButton}
                    onPress={()=>controlData.controlPassword(helper.secretNotePassword,helper.secretNoteHint)}
                >
                    <IconM color='#fff' size={25} name='check' />
                    <Text style={buttons.loginButtonText}>Onayla</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    render(){
        return(
            <>
                {this.renderLogin()}
            </>
        )
    }
}

export default observer(Login_Secret_Notes)
