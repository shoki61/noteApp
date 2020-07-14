import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from '../../styles/addStickyNoteStyle';
import buttons from '../../styles/buttons';

class Add_New_Sticky_Note extends Component{
    render(){
        return(
            <View style={styles.addStickyNoteCont}>
                <View style={styles.addStickyNote}>
                    <TextInput
                        style={styles.addStickyNoteInput}
                        multiline={true}
                        maxLength={170}
                        value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscin'}

                    />

                </View>

            </View>
        )
    }
}

export default  Add_New_Sticky_Note;
