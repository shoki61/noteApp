import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import styles from '../../styles/addSecretNoteStyle'

class Add_Secret_Note extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value='Lorem ipsum dolar sit amet'
                    style={styles.title}
                    multiline
                />
                <TextInput
                    value='Lorem ipsum dolar sit amet'
                    style={styles.desc}
                    multiline
                />
            </View>
        )
    }
};

export default observer(Add_Secret_Note)
