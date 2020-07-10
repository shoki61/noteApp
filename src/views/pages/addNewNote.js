import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from '../../styles/addNewNoteStyle';
import buttons from '../../styles/buttons';

class Add_New_Note extends Component{
    render(){
        return(
            <View style={styles.addNewNoteContainer}>
                <View style={{width:'100%'}}>
                    <TextInput
                        multiline={true}
                        //autoFocus
                        style={styles.inputTitle}
                        placeholder={'başlık...'}
                    />
                    <TextInput
                        multiline={true}
                        style={styles.inputDesc}
                        placeholder={'içerik...'}
                    />
                </View>
                <TouchableOpacity style={buttons.saveButton}>
                    <Text style={buttons.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default  Add_New_Note;
