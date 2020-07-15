import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from '../../styles/addNewNoteStyle';
import buttons from '../../styles/buttons';
import ControllData from '../../controllers/controllData';

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
                        value={this.state.title}
                        multiline={true}
                        onChangeText={title=> {
                            this.setState({title:title})
                            ControllData.title = title;
                        }}
                        style={styles.inputTitle}
                        placeholder={'başlık...'}
                    />
                    <TextInput
                        value={this.state.desc}
                        multiline={true}
                        onChangeText={desc=> {
                            this.setState({desc:desc})
                            ControllData.desc = desc;
                        }}
                        style={styles.inputDesc}
                        placeholder={'içerik...'}
                    />
                </View>
                <TouchableOpacity onPress={()=>ControllData.controllData()} activeOpacity={.8} style={buttons.saveButton}>
                    <Text style={buttons.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default  Add_New_Note;
