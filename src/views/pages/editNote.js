import React, { Component } from 'react';
import { View, Text,TextInput } from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../../styles/editNoteStyle';
import controlData from '../../controllers/controlData';

class Edit_Note extends Component{
    constructor(props) {
        super(props);
        this.state={
            title:'Lorem ipsum dolar sit amet',
            desc:'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nişi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    }
    render(){
        return(
            <View style={styles.editNoteContainer}>
                <TextInput
                    value={controlData.showNote.title}
                    multiline={true}
                    onChangeText={text=>controlData.showNote.title = text}
                    style={styles.inputTitle}/>

                <TextInput
                    value={controlData.showNote.desc}
                    multiline={true}
                    onChangeText={(text)=>this.setState({desc:text})}
                    style={styles.inputDesc}
                />

            </View>
        )
    }
}

export default  observer(Edit_Note);


