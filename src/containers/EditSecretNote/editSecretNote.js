import React, { Component } from 'react';
import {View, TextInput, Text, LayoutAnimation, ScrollView} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';


import Button from '../../components/Button/Button';

import styles from './style';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';
import saveData from '../../controllers/saveData';
import controlData from '../../controllers/controlData';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

class Edit_Secret_Note extends Component {

    state = {
        title:saveData.userSecretNotes[controlData.editSecretNoteIndex].title,
        desc:saveData.userSecretNotes[controlData.editSecretNoteIndex].desc,
    }
    
    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    editSecretNote=async()=>{
        saveData.userSecretNotes[controlData.editSecretNoteIndex]={
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
                            style={[styles.desc,this.state.title !== saveData.userSecretNotes[controlData.editSecretNoteIndex].title&&{paddingBottom:60},this.state.desc !== saveData.userSecretNotes[controlData.editSecretNoteIndex].desc&&{paddingBottom:60}]}
                            multiline
                            value={this.state.desc}
                            onChangeText={desc=>this.setState({desc:desc})}
                        />
                    </View>
                </ScrollView>
                <Button
                    styles={[buttons.saveButton,{backgroundColor:'#fc5db0'},this.state.title !== saveData.userSecretNotes[controlData.editSecretNoteIndex].title&&{width:'100%'},this.state.desc !== saveData.userSecretNotes[controlData.editSecretNoteIndex].desc&&{width:'100%'}]}
                    clicked={()=>this.editSecretNote()}
                    opacity={helper.buttonOpacity}
                >
                    <Icon name='check' color='#fff' size={23}/>
                    <Text style={buttons.saveButtonText}>Değişikliği kaydet</Text>
                </Button>

            </>
        )
    }
};

export default observer(Edit_Secret_Note);

