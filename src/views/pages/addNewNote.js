import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { observer } from 'mobx-react';

import styles from '../../styles/addNewNoteStyle';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';

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
                            controlData.title = title;
                        }}
                        style={styles.inputTitle}
                        placeholder={'başlık...'}
                    />

                </View>
                <ScrollView style={{width:'100%'}}>
                    <TextInput
                        value={this.state.desc}
                        multiline={true}
                        onChangeText={desc=> {
                            this.setState({desc:desc})
                            controlData.desc = desc;
                        }}
                        style={styles.inputDesc}
                        placeholder={'içerik...'}
                    />
                </ScrollView>
                <TouchableOpacity onPress={()=>controlData.controlData()} activeOpacity={.8} style={buttons.saveButton}>
                    <Text style={buttons.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default observer(Add_New_Note);
