import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SImage from 'react-native-scalable-image';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../../styles/homeStyle';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';



class Home extends Component{

    constructor(props) {
        super(props);
        this.state={
            showNoteNav:false
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('notes')
            .then(v=>{
                if(v!==null) {
                    let tmp = JSON.parse(v);
                    saveData.userNotes = tmp;
                    this.setState({showNoteNav:true})
                }
            })
        AsyncStorage.getItem('stickyNotes')
            .then(v=>{
                if(v!==null) {
                    let tmp = JSON.parse(v);
                    saveData.userStickyNotes = tmp;
                    this.setState({showNoteNav:true})
                }
            })
    }

    renderCreateNote(){
      return(
          <View style={styles.createNoteCont}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Notes')} style={buttons.addButton}>
                  <SImage height={23} source={require('../../icons/plus.png')}/>
              </TouchableOpacity>
              <Text style={styles.createNoteText}>Not oluştur</Text>
          </View>
      )
    }


    renderHome(){
     return(
         <View>
             <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('Notes')}
                 style={buttons.notesButton}>
                 <Text style={buttons.buttonText}>Notlar</Text>
             </TouchableOpacity>

             <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('Sticky_Notes')}
                 style={buttons.notesButton}>
                 <Text style={buttons.buttonText}>Yapışkan notlar</Text>
             </TouchableOpacity>

         </View>

     )
 }

    render() {

        return (
            <View style={styles.Container}>

                {
                    !this.state.showNoteNav &&
                    this.renderCreateNote()
                }

                {
                    this.state.showNoteNav &&
                    this.renderHome()
                }

            </View>
        )
    }
}

export default  Home;
