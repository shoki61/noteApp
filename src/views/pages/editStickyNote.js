import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {observer} from 'mobx-react';

import styles from '../../styles/addStickyNoteStyle';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';
import saveData from '../../controllers/saveData';
import helper from '../../controllers/helper';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

class Edit_Sticky_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            desc:saveData.userStickyNotes[controlData.editStickyNoteIndex].desc
        }
    }

    editStickyNote(){
        saveData.userStickyNotes[controlData.editStickyNoteIndex]={
            desc:this.state.desc,
            date:helper.Date,
            time:helper.Time
        }
        saveDataAsyncStorage.saveStickyNotes()
        this.props.navigation.goBack()
    }

    render(){
        return(
            <ScrollView style={styles.addStickyNoteCont}  keyboardDismissMode='on-drag' contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.addStickyNote}>
                    <TextInput
                        style={styles.addStickyNoteInput}
                        multiline={true}
                        maxLength={170}
                        placeholder={'içerik...'}
                        value={this.state.desc}
                        onChangeText={text=> {
                            this.setState({desc: text});
                        }}
                    />
                    <Text style={styles.maxLengthText}>({this.state.desc.length}/170)</Text>
                </View>
                {
                    this.state.desc !== saveData.userStickyNotes[controlData.editStickyNoteIndex].desc&&
                    <TouchableOpacity onPress={()=>this.editStickyNote()} style={buttons.saveButton}>
                    <Text style={buttons.buttonText}>Değişikliği kaydet</Text>
                    </TouchableOpacity>
                }
            </ScrollView>

        )
    }
}

export default  observer(Edit_Sticky_Note);
