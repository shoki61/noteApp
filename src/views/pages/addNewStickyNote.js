import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView,Button} from 'react-native';

import styles from '../../styles/addStickyNoteStyle';
import buttons from '../../styles/buttons';

class Add_New_Sticky_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            desc:''
        }

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
                           onChangeText={text=>this.setState({desc:text})}
                       />
                       <Text style={styles.maxLengthText}>({this.state.desc.length}/170)</Text>

                   </View>
                   <TouchableOpacity style={buttons.saveButton}>
                       <Text style={buttons.buttonText}>Kaydet</Text>
                   </TouchableOpacity>
               </ScrollView>

        )
    }
}

export default  Add_New_Sticky_Note;
