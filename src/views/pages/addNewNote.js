import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { observer } from 'mobx-react';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../../styles/addNewNoteStyle';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';
import helper from '../../controllers/helper';

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
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff'}}>
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

                </View>

                    {
                        this.state.title !== '' && this.state.desc !== ''&&
                        <LinearGradient colors={['#b3c5f5', '#5373bd', '#2f4ca3']} style={[buttons.saveButton,{marginTop:15}]}>
                            <TouchableOpacity onPress={()=> {
                                controlData.controlData();
                                this.props.navigation.navigate('Notes')
                            }} activeOpacity={helper.buttonOpacity} >
                                <Text style={buttons.saveButtonText}>Kaydet</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    }
            </View>
            </ScrollView>
        )
    }
}

export default observer(Add_New_Note);
