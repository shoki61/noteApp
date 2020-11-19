import React, { Component } from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';


import Button from '../../../components/Button/Button';

import styles from '../style';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';
import controlData from '../../controllers/controlData';


class SignUpSecretNotes extends Component{
    render() {
        return (
            <ScrollView style={styles.loginContainer} contentContainerStyle={{alignItems:'center',flex:1}}>
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
                            if(helper.secretNotePassword!=='') helper.passwordWarning=false
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

                <Button
                    opacity={helper.buttonOpacity}
                    styles={buttons.loginButton}
                    clicked={()=> {
                        controlData.controlPassword(helper.secretNotePassword, helper.secretNoteHint);
                        if(!helper.passwordWarning) this.props.navigate
                    }}
                >
                    <IconM color='#fff' size={25} name='check' />
                    <Text style={buttons.loginButtonText}>Onayla</Text>
                </Button>
            </ScrollView>
        );
    };
};

export default observer(SignUpSecretNotes);