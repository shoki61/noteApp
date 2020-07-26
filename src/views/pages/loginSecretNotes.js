import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../styles/loginSecretNotesStyle';
import buttons from '../../styles/buttons';

class Login_Secret_Notes extends Component{
    render(){
        return(
            <View style={styles.loginContainer}>
                <Text style={styles.informationMessage}>
                    <Text style={{fontWeight:'bold',}}>Gizli notlara</Text> şu anda oluşturacağınız şifre ile ulaşabileceksiniz o yüzden akılda kalıcı ve güvenli bir şifre oluşturmanızı öneririz
                </Text>
                <View style={styles.inputView}>
                    <View style={styles.iconView}>
                        <Icon name='lock' size={18} color='#fff'/>
                    </View>
                    <TextInput style={styles.input} placeholder='şifrenizi giriniz...'/>
                </View>

                <Text style={styles.informationMessage}>
                    Şifrenizi unuttuğunuz takdirde kolayca hatırlayabilmek için bir ipucu oluşturabilirsiniz
                </Text>

                <View style={styles.inputView}>
                    <View style={styles.iconView}>
                        <IconM name='math' size={18} color='#fff'/>
                    </View>
                    <TextInput style={styles.input} placeholder='şifrenizi giriniz...'/>
                </View>

                <TouchableOpacity style={buttons.loginButton}>
                    <Icon name='check' color=''/>
                    <Text>Onayla</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default observer(Login_Secret_Notes)
