import React, { Component } from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/editSecretNoteStyle';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';

class Edit_Secret_Note extends Component {
    render(){
        return(
            <>
            <View style={styles.container}>
                <View >
                    <TextInput
                        style={styles.title}
                        multiline
                        value='Lorem ipsum Dolar'
                    />
                    <TextInput
                        style={styles.desc}
                        multiline
                        value='Lorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit amet'
                    />
                </View>
                <View style={{width:'100%',marginBottom:25,marginTop:10,alignItems:'flex-end'}}>
                    <TouchableOpacity
                        style={[buttons.saveButton,{backgroundColor:'#fc5db0',width:'45%'}]}
                        activeOpacity={helper.buttonOpacity}>
                        <Icon name='check' size={20} color='#fff'/>
                        <Text style={buttons.saveButtonText}>Değişikliği kaydet</Text>
                    </TouchableOpacity>
                </View>

            </View>

            </>
        )
    }
};

export default observer(Edit_Secret_Note);

