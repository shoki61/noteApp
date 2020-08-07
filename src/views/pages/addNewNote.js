import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, LayoutAnimation} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/addNewNoteStyle';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';
import helper from '../../controllers/helper';
import saveData from '../../controllers/saveData';

class Add_New_Note extends Component{

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    constructor(props) {
        super(props);
        this.state={
            title:'',
            desc:''
        }
    }
    render(){
        return(
            <>
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


                            <View style={{width:'100%',marginBottom:25,marginTop:10,alignItems:'flex-end'}}>
                                <TouchableOpacity
                                    style={[buttons.saveButton,{backgroundColor:'#1bb7e2'},this.state.title !== '' && this.state.desc !== ''&&{width:'35%'}]}
                                    onPress={()=> {
                                        controlData.controlData();
                                        this.props.navigation.navigate('Notes')
                                    }}
                                    activeOpacity={helper.buttonOpacity} >
                                    <Icon size={23} name='check'  color='#fff'/>
                                    <Text style={buttons.saveButtonText}>Kaydet</Text>
                                </TouchableOpacity>
                            </View>

            </View>
            </ScrollView>
        <TouchableOpacity
            style={[buttons.saveButton,{backgroundColor:'#fc5db0'},this.state.desc!=='' &&{width:'100%'}]}
            onPress={()=>this.editSecretNote()}
            activeOpacity={helper.buttonOpacity}
        >
            <Icon name='check' color='#fff' size={23}/>
            <Text style={buttons.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
        </>
        )
    }
}

export default observer(Add_New_Note);
