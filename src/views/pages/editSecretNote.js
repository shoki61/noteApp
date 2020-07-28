import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import styles from '../../styles/editSecretNoteStyle';
import Icon from 'react-native-vector-icons/Feather';

class Edit_Secret_Note extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Lorem ipsum Dolar</Text>
                <Text style={styles.desc}>Lorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit amet</Text>
                
            </View>
        )
    }
};

export default observer(Edit_Secret_Note);

