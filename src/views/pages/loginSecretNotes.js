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

    // componentWillMount() {
    //     alert(helper.asyncNotePasswordHint)
    // }

    constructor(props) {
        super(props);
        this.state={
            showHint : false,
            showError: false
        }
    }

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    loginFunc(){
        if(helper.loginPassword === helper.asyncNotePassword) {
            this.props.navigation.navigate('Secret_Notes');
            helper.loginPassword = '';
        }
        else this.setState({showError:true})
    }

    renderLogin(){
        return(
            <View style={[styles.loginContainer]}>
                {
                    this.state.showHint &&
                    <Text style={[styles.informationMessage,{marginBottom:10,marginTop:100}]}>
                        <Text style={{fontWeight:'bold',}}>İpucu :</Text> {helper.asyncNotePasswordHint}
                    </Text>
                }
                <View style={[styles.inputView,!this.state.showHint&&{marginTop:150}]}>
                    <View style={styles.iconView}>
                        <Icon name='lock' size={18} color='#fff'/>
                    </View>
                    <TextInput
                        value={helper.loginPassword}
                        style={styles.input}
                        onChangeText={ password => {
                            helper.loginPassword = password;
                            this.setState({showError:false})
                        }}
                        placeholder='şifre...'/>
                </View>
                {
                    this.state.showError &&
                    <Text style={styles.warningText}>
                        hatalı giriş
                    </Text>
                }
                {
                    helper.loginPassword !== ''&&
                    <TouchableOpacity
                        activeOpacity={helper.buttonOpacity}
                        style={buttons.loginButton}
                        onPress={()=> this.loginFunc()}
                    >
                        <IconM color='#fff' size={23} name='login' />
                        <Text style={buttons.loginButtonText}>Giriş yap</Text>
                    </TouchableOpacity>
                }
                {
                    helper.asyncNotePasswordHint !==null&&
                    <TouchableOpacity
                        onPress={()=>this.setState({showHint:true})}
                        style={buttons.hintButton}>
                        <IconM name='lightbulb-on' size={40} color='#ffce5b'/>
                    </TouchableOpacity>
                }
            </View>
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

                <TouchableOpacity
                    activeOpacity={helper.buttonOpacity}
                    style={buttons.loginButton}
                    onPress={()=> {
                        controlData.controlPassword(helper.secretNotePassword, helper.secretNoteHint);
                        if(!helper.passwordWarning) this.props.navigation.navigate('Secret_Notes')
                    }}
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
                {
                    helper.asyncNotePassword !== null &&
                    this.renderLogin()
                }
                {
                    helper.asyncNotePassword === null &&
                    this.renderSignUp()
                }
            </>
        )
    }
}

export default observer(Login_Secret_Notes)
