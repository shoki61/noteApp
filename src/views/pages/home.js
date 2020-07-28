import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../styles/homeStyle';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import helper from '../../controllers/helper';



class Home extends Component{



    componentWillMount() {
        AsyncStorage.getItem('notes')
            .then(v=>{
                if(v!==null) {
                    let tmp = JSON.parse(v);
                    saveData.userNotes = tmp;
                }
            })
        AsyncStorage.getItem('stickyNotes')
            .then(v=>{
                if(v!==null) {
                    let tmp = JSON.parse(v);
                    saveData.userStickyNotes = tmp;
                }
            })
        AsyncStorage.getItem('secretNotes')
            .then(v=>{
                if(v!==null) {
                    let tmp = JSON.parse(v);
                    saveData.userSecretNotes = tmp;
                }
            })

        AsyncStorage.getItem('secretNotePassword')
            .then(v=>{
                helper.asyncNotePassword=v
            })
        AsyncStorage.getItem('secretNotePasswordHint')
            .then(v=>{
                helper.asyncNotePasswordHint=v
            })
    }



    renderHome(){
     return(
         <View style={{width:'100%',alignItems:'center'}}>

                 <TouchableOpacity
                     style={[buttons.navButton,{borderColor:'#1bb7e2'}]}
                     onPress={()=>this.props.navigation.navigate('Notes')}
                     >
                     <View style={[styles.navigationIconView,{backgroundColor:'#1bb7e2'}]}>
                         <Icon size={27} name='notebook' color='#fff'/>
                     </View>
                     <Text style={[buttons.buttonText,{color:'#1bb7e2'}]}>Notlar</Text>
                 </TouchableOpacity>


             <TouchableOpacity
                 style={[buttons.navButton,{borderColor:'#ff9d5b'}]}
                 onPress={()=>this.props.navigation.navigate('Sticky_Notes')}
             >
                 <View style={[styles.navigationIconView,{backgroundColor:'#ff9d5b'}]}>
                     <Icon size={27} name='sticker' color='#fff'/>
                 </View>
                 <Text style={[buttons.buttonText,{color:'#ff9d5b'}]}>Yapışkan notlar</Text>
             </TouchableOpacity>

             <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('Login_Secret_Notes')}
                 style={[buttons.navButton,{borderColor:'#fc5db0'}]}
             >
                 <View style={[styles.navigationIconView,{backgroundColor:'#fc5db0'}]}>
                    <Icon size={27} name='book-lock' color='#fff'/>
                 </View>
                 <Text style={[buttons.buttonText,{color:'#fc5db0'}]}>Gizli notlar</Text>
             </TouchableOpacity>

         </View>

     )
 }

    render() {

        return (
            <View style={styles.Container}>

                {this.renderHome()}


            </View>
        )
    }
}


export default  Home;
