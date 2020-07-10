import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../../styles/notesStyle';
import buttons from '../../styles/buttons';

class Notes extends Component{
    renderNotes(){
        return(
            <>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Show_Note')} activeOpacity={.9} style={styles.noteContainer}>
                    <View style={styles.Title_Desc_View}>
                        <Text numberOfLines={1} style={styles.noteTitle}>Lorem ipsum Dolar sit amet</Text>
                        <Text numberOfLines={1} style={styles.noteDesc}>Lorem ipsum dolar sit amet bla bla lala oo lulu</Text>
                    </View>
                    <View style={styles.Date_Time_View}>
                        <Text style={styles.noteDate}>10.07.2020</Text>
                        <Text style={styles.noteTime}>10:16</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.9} style={styles.noteContainer}>
                    <View style={styles.Title_Desc_View}>
                        <Text numberOfLines={1} style={styles.noteTitle}>Lorem ipsum Dolar sit amet</Text>
                        <Text numberOfLines={1} style={styles.noteDesc}>Lorem ipsum dolar sit amet bla bla lala oo lulu</Text>
                    </View>
                    <View style={styles.Date_Time_View}>
                        <Text style={styles.noteDate}>10.07.2020</Text>
                        <Text style={styles.noteTime}>10:16</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    render(){
        return(
            <>
                <View style={styles.notesContainer}>
                    {this.renderNotes()}
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add_New_Note')} style={[buttons.addButton,buttons.addButtonAbsolute]}>
                    <SImage height={23} source={require('../../icons/plus.png')}/>
                </TouchableOpacity>
            </>
        )
    }
}

export default  Notes;
