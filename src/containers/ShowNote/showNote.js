import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import {observer} from 'mobx-react';


import Button from '../../components/Button/Button';

import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import controlData from '../../controllers/controlData';
import saveData from '../../controllers/saveData';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';


class Show_Note extends Component{

    state={
        note:''
    }
    
    deleteNote=async()=>{
        saveData.userNotes.splice(controlData.editNoteIndex,1)
        saveDataAsyncStorage.saveNotes();
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
                    <Button clicked={()=>this.props.navigation.navigate('Edit_Note')} opacity={.8} styles={styles.footerButton}>
                        <Icon name='edit' size={20} color='#0BABC4'/>
                    </Button>
                    <Button clicked={()=>this.deleteNote()} opacity={.8} styles={styles.footerButton}>
                        <Icon name='trash-2' size={20} color='#ff8080'/>
                    </Button>
                </View>
                </ScrollView>

            </View>
        )
    }
}

export default  observer(Show_Note);
