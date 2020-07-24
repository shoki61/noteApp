import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import styles from '../../styles/addStickyNoteStyle';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';

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
                           maxLength={150}
                           placeholder={'içerik...'}
                           value={this.state.desc}
                           onChangeText={text=> {
                               this.setState({desc: text});
                               controlData.stickyDesc=text
                           }}
                       />
                       <Text style={styles.maxLengthText}>({this.state.desc.length}/150)</Text>

                   </View>
                   {
                       this.state.desc !== ''&&
                       <LinearGradient colors={['#b3c5f5', '#5373bd', '#2f4ca3']} style={[buttons.saveButton,{marginTop:15}]}>
                           <TouchableOpacity
                               style={buttons.notesSubButton}
                               onPress={()=> {
                                   controlData.controlStickyData();
                                   this.props.navigation.navigate('Sticky_Notes');
                               }}
                           >
                               <Text style={buttons.saveButtonText}>Kaydet</Text>
                           </TouchableOpacity>
                       </LinearGradient>
                   }
               </ScrollView>

        )
    }
}

export default  Add_New_Sticky_Note;
