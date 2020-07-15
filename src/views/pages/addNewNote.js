import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from '../../styles/addNewNoteStyle';
import buttons from '../../styles/buttons';

class Add_New_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            title:'',
            desc:''
        }
    }
    render(){
        return(
            <View style={styles.addNewNoteContainer}>
                <View style={{width:'100%'}}>
                    <TextInput
                        value={this.state.value}
                        multiline={true}
                        style={styles.inputTitle}
                        placeholder={'başlık...'}
                    />
                    <TextInput
                        value={this.state.desc}
                        multiline={true}
                        style={styles.inputDesc}
                        placeholder={'içerik...'}
                    />
                </View>
                <TouchableOpacity onPress={()=>{}} activeOpacity={.8} style={buttons.saveButton}>
                    <Text style={buttons.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default  Add_New_Note;
