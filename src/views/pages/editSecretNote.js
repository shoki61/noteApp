import React, { Component } from 'react';
import {View, TextInput, TouchableOpacity, Text, LayoutAnimation, ScrollView} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/editSecretNoteStyle';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';
import saveData from '../../controllers/saveData';
import controlData from '../../controllers/controlData';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

class Edit_Secret_Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:saveData.userSecretNotes[controlData.secretNoteIndex].title,
            desc:saveData.userSecretNotes[controlData.secretNoteIndex].desc,
        }
    }
    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    editSecretNote=async()=>{
        saveData.userSecretNotes[controlData.secretNoteIndex]={
            title:this.state.title,
            desc:this.state.desc,
            date:helper.Date,
            time:helper.Time
        };
        await saveDataAsyncStorage.saveSecretNotes()
        this.props.navigation.navigate('Secret_Notes')

    }

    render(){
        return(
            <>
                <ScrollView style={styles.container}>
                <View >
                    <TextInput
                        style={styles.title}
                        multiline
                        value={this.state.title}
                        onChangeText={title=>this.setState({title:title})}
                    />
                    <TextInput
                        style={[styles.desc,this.state.title !== saveData.userSecretNotes[controlData.secretNoteIndex].title&&{paddingBottom:50},this.state.desc !== saveData.userSecretNotes[controlData.secretNoteIndex].desc&&{paddingBottom:50}]}
                        multiline
                        value={this.state.desc}
                        onChangeText={desc=>this.setState({desc:desc})}
                    />
                </View>
                </ScrollView>
                    <TouchableOpacity
                        style={[buttons.saveButton,{backgroundColor:'#fc5db0'},this.state.title !== saveData.userSecretNotes[controlData.secretNoteIndex].title&&{width:'100%'},this.state.desc !== saveData.userSecretNotes[controlData.secretNoteIndex].desc&&{width:'100%'}]}
                        onPress={()=>this.editSecretNote()}
                        activeOpacity={helper.buttonOpacity}
                    >
                        <Icon name='check' color='#fff' size={23}/>
                        <Text style={buttons.saveButtonText}>Değişikliği kaydet</Text>
                    </TouchableOpacity>

</>


        )
    }
};

export default observer(Edit_Secret_Note);

