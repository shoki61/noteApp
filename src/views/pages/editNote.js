import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../../styles/editNoteStyle';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';
import saveData from '../../controllers/saveData';
import helper from '../../controllers/helper';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

let originNote = []
originNote.push({...controlData.showNote})

class Edit_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            title:controlData.showNote.title,
            desc:controlData.showNote.desc,
            showButton:false
        }
    }



    editNote(){
        saveData.userNotes[controlData.editNoteIndex]={
            ...this.state,
            date:helper.Date,
            time:helper.Time
        }
        saveDataAsyncStorage.saveNotes()
        this.props.navigation.navigate('Notes')
    }

    render(){
        return(
            <View style={styles.editNoteContainer}>
                <ScrollView>
               <View style={{minHeight:Dimensions.get('window').height/2}}>
                   <TextInput
                       value={this.state.title}
                       multiline={true}
                       onChangeText={text=> this.setState({title: text}) }
                       style={styles.inputTitle}/>

                   <TextInput
                       value={this.state.desc}
                       multiline={true}
                       onChangeText={(text)=> this.setState({desc: text})}
                       style={styles.inputDesc}
                   />
               </View>

                <View style={{alignItems:'center',marginTop:15}}>
                    <TouchableOpacity onPress={()=>this.editNote()} style={buttons.saveButton}>
                        <Text style={buttons.buttonText}>Değişikliği kaydet</Text>
                    </TouchableOpacity>
                </View>

                </ScrollView>

            </View>

        )
    }
}

export default  observer(Edit_Note);


