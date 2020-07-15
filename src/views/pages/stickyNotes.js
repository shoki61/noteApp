import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';


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
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                        sed do
                        eiusmod tempor incididunt
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
