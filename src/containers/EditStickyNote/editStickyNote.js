import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {observer} from 'mobx-react';


import Button from '../../components/Button/Button';

import styles from '../AddNewStickyNote/style';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';
import saveData from '../../controllers/saveData';
import helper from '../../controllers/helper';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

class Edit_Sticky_Note extends Component{

    state={
        desc:saveData.userStickyNotes[controlData.editStickyNoteIndex].desc
    }

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
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

                <View style={{width:'100%',marginBottom:25,marginTop:10,alignItems:'flex-end'}}>
                    <Button
                        styles={[buttons.saveButton,{backgroundColor:'#ff9d5b'},this.state.desc !== saveData.userStickyNotes[controlData.editStickyNoteIndex].desc &&{width:'45%'}]}
                        clicked={()=>this.editStickyNote()}
                        opacity={helper.buttonOpacity}
                    >
                        <Icon size={23} name='check' style={{fontWeight:'100'}} color='#fff'/>
                        <Text style={buttons.saveButtonText}>Değişikliği kaydet</Text>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

export default  observer(Edit_Sticky_Note);
