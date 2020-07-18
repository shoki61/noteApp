import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


import styles from '../../styles/showNoteStyle';
import Icon from 'react-native-vector-icons/Feather';


class Show_Note extends Component{
    render(){
        return(
            <View style={styles.showNoteCont}>
                <View style={styles.closeButtonView}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Notes')}>
                        <Icon name='x' size={35} color='#0BABC4'/>
                    </TouchableOpacity>
                </View>

                <View style={styles.noteContainer}>
                    <Text style={styles.noteTitle}>Lorem ipsum dolar sit amet bla bla gla gla lululu</Text>
                    <Text style={styles.noteDesc}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nişi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt, in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text style={styles.noteDate}>10.17.2020-12:08</Text>
                </View>

                <View style={styles.footerButtonCont}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Edit_Note')} activeOpacity={.8} style={styles.footerButton}>
                        <Icon name='edit' size={23} color='#0BABC4'/>
                        <Text style={styles.footerButtonText}>Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={styles.footerButton}>
                        <Icon name='trash' size={23} color='#0BABC4'/>
                        <Text style={styles.footerButtonText}>Sil</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

export default  Show_Note;
