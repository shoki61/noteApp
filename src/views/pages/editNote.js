import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../../styles/editNoteStyle';
import controlData from '../../controllers/controlData';
import saveData from '../../controllers/saveData';
import AsyncStorage from '@react-native-community/async-storage';
import helper from '../../controllers/helper';

class Edit_Note extends Component{

    editNote(){
        saveData.userNotes[controlData.editNoteIndex]={
            ...controlData.showNote,
            date:helper.Date,
            time:helper.Time
        }
        AsyncStorage.setItem('notes', JSON.stringify(saveData.userNotes))
    }

    render(){
        return(
            <View style={styles.editNoteContainer}>
                <ScrollView>
               <View>
                   <TextInput
                       value={controlData.showNote.title}
                       multiline={true}
                       onChangeText={text=>controlData.showNote.title = text}
                       style={styles.inputTitle}/>

                   <TextInput
                       value={controlData.showNote.desc}
                       multiline={true}
                       onChangeText={(text)=>controlData.showNote.desc = text}
                       style={styles.inputDesc}
                   />
               </View>

                <TouchableOpacity onPress={()=>this.editNote()}>
                    <Text>Değişikliği kaydet</Text>
                </TouchableOpacity>
                </ScrollView>

            </View>

        )
    }
}

export default  observer(Edit_Note);


