import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';

const a = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscin'
class Sticky_Note extends Component{

    renderStickyNote(){
        return(
            <View style={styles.stickyNotesContainer}>
                <View style={styles.stickyNoteView}>
                    <Text style={styles.desc}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </Text>
                    <Text style={styles.date}>10.07.2020-17:01</Text>
                </View>

                <View style={styles.stickyNoteView}>
                    <Text style={styles.desc}>
                        {a}
                    </Text>
                    <Text style={styles.date}>10.07.2020-17:01</Text>
                </View>

            </View>
        )
    }

    render(){
        return(
            <>
                <View style={styles.stickyNoteContainer}>
                    {this.renderStickyNote()}
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add_New_Sticky_Note')} style={[buttons.addButton,buttons.addButtonAbsolute]}>
                    <SImage height={23} source={require('../../icons/plus.png')}/>
                </TouchableOpacity>
            </>
        )
    }
}

export default  Sticky_Note;
