import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';


import styles from '../../styles/showNoteStyle';
import Icon from 'react-native-vector-icons/Feather';
import controlData from '../../controllers/controlData';
import saveData from '../../controllers/saveData';
import AsyncStorage from '@react-native-community/async-storage';
import helper from '../../controllers/helper';

const h = Dimensions.get('window').height;

class Show_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            note:''
        }
    }


    deleteNote=async()=>{
        saveData.userNotes.splice(controlData.editNoteIndex,1)
        AsyncStorage.setItem('notes', JSON.stringify(saveData.userNotes))
        this.props.navigation.navigate('Notes')
    }

    componentWillMount=async()=> {
        await this.setState({note:controlData.showNote})
    }

    render(){
        return(
            <View style={styles.showNoteCont} >

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent:'center',minHeight:'100%'}}>
                <View style={styles.noteContainer}>

                    <Text style={styles.noteTitle}>{this.state.note.title}</Text>


                    <Text style={styles.noteDesc}>
                        {this.state.note.desc}
                    </Text>

                    <Text style={styles.noteDate}>{this.state.note.date} - {this.state.note.time}</Text>
                </View>

                <View style={styles.footerButtonCont}>
                    <TouchableOpacity activeOpacity={helper.buttonOpacity} style={styles.footerButton} onPress={()=>this.props.navigation.navigate('Notes')}>
                        <Icon name='arrow-left' size={20} color='#787878'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Edit_Note')} activeOpacity={.8} style={styles.footerButton}>
                        <Icon name='edit' size={20} color='#0BABC4'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.deleteNote()} activeOpacity={.8} style={styles.footerButton}>
                        <Icon name='trash-2' size={20} color='#ff8080'/>
                    </TouchableOpacity>
                </View>
                </ScrollView>

            </View>
        )
    }
}

export default  observer(Show_Note);
