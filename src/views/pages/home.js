import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SImage from 'react-native-scalable-image';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

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
              <TouchableOpacity
                  onPress={()=>this.props.navigation.navigate('Notes')} style={buttons.addButton}>
                  <SImage height={23} source={require('../../icons/plus.png')}/>
              </TouchableOpacity>
              <Text style={styles.createNoteText}>Not oluştur</Text>
          </View>
      )
    }


    renderHome(){
     return(
         <View>
             <LinearGradient
                             colors={['#b3c5f5', '#5373bd', '#2f4ca3']} style={buttons.notesButton}>
                 <TouchableOpacity
                     style={buttons.notesSubButton}
                     onPress={()=>this.props.navigation.navigate('Notes')}
                     >
                     <Text style={buttons.buttonText}>Notlar</Text>
                 </TouchableOpacity>
             </LinearGradient>

             <LinearGradient
                 colors={['#b3c5f5', '#5373bd', '#2f4ca3']} style={buttons.notesButton}>
             <TouchableOpacity
                 style={buttons.notesSubButton}
                 onPress={()=>this.props.navigation.navigate('Sticky_Notes')}
             >
                 <Text style={buttons.buttonText}>Yapışkan notlar</Text>
             </TouchableOpacity>
             </LinearGradient>

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
