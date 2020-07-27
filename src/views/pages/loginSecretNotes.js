import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../styles/loginSecretNotesStyle';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';

class Login_Secret_Notes extends Component{

    render(){
        return(
            <View style={styles.loginContainer}>
                <Text style={styles.informationMessage}>
                    <Text style={{fontWeight:'bold',}}>Gizli notlara</Text> şu anda oluşturacağınız şifre ile ulaşabileceksiniz bu yüzden akılda kalıcı ve güvenli bir şifre oluşturmanızı öneririz
                </Text>
                <View style={styles.inputView}>
                    <View style={styles.iconView}>
                        <Icon name='lock' size={18} color='#fff'/>
                    </View>
                    <TextInput style={styles.input} placeholder='şifre oluştur...'/>
                </View>

                <Text style={styles.informationMessage}>
                    Şifrenizi unuttuğunuz takdirde kolayca hatırlayabilmek için bir ipucu oluşturabilirsiniz (isteğe bağlı)
                </Text>

                <View style={styles.inputView}>
                    <View style={styles.iconView}>
                        <IconM name='lightbulb-on' size={23} color='#fff'/>
                    </View>
                    <TextInput style={styles.input} placeholder='ipucu oluştur...'/>
                </View>

                <TouchableOpacity activeOpacity={helper.buttonOpacity} style={buttons.loginButton}>
                    <IconM color='#fff' size={25} name='check' />
                    <Text style={buttons.loginButtonText}>Onayla</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default observer(Login_Secret_Notes)
