import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../../styles/editNoteStyle';
import controlData from '../../controllers/controlData';
import saveData from '../../controllers/saveData';
import AsyncStorage from '@react-native-community/async-storage';

class Edit_Note extends Component{

    editNote(){
        saveData.userNotes[controlData.editNoteIndex]={
            ...controlData.showNote
        }
        AsyncStorage.setItem('notes', JSON.stringify(saveData.userNotes))
    }

    render(){
        return(
            <View style={styles.editNoteContainer}>
                <Text>{controlData.editNoteIndex}</Text>
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

            </View>

        )
    }
}

export default  observer(Edit_Note);


