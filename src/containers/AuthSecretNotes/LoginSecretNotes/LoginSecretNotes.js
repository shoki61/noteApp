import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';


import Button from '../../../components/Button/Button';

import styles from '../style';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';

class LoginSecretNotes extends Component{
    render() {
        return (
            <View style={[styles.loginContainer,{alignItems:'center'}]}>
                {
                    this.props.showHint &&
                    <Text style={[styles.informationMessage,{marginBottom:10,marginTop:100}]}>
                        <Text style={{fontWeight:'bold',}}>İpucu :</Text> {helper.asyncNotePasswordHint}
                    </Text>
                }
                <View style={[styles.inputView,!this.props.showHint && {marginTop:150}]}>
                    <View style={styles.iconView}>
                        <Icon name='lock' size={18} color='#fff'/>
                    </View>
                    <TextInput
                        value={helper.loginPassword}
                        style={styles.input}
                        onChangeText={ password => {
                            helper.loginPassword = password;
                            this.props.clickError
                        }}
                        placeholder='şifre...'/>
                </View>
                {
                    this.props.showError &&
                    <Text style={styles.warningText}>
                        hatalı giriş
                    </Text>
                }
                {
                    helper.loginPassword !== ''&&
                    <Button
                        opacity={helper.buttonOpacity}
                        styles={buttons.loginButton}
                        clicked={this.props.loginFunc}
                    >
                        <IconM color='#fff' size={23} name='login' />
                        <Text style={buttons.loginButtonText}>Giriş yap</Text>
                    </Button>
                }
                {
                    helper.asyncNotePasswordHint !==null&&
                    <Button
                        clicked={this.props.clickHind}
                        styles={buttons.hintButton}>
                        <IconM name='lightbulb-on' size={40} color='#ffce5b'/>
                    </Button>
                }
            </View>
        );
    };
};

export default observer(LoginSecretNotes);