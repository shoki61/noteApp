import React,{ Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import styles from '../../styles/showSecretNoteStyle';

class Show_Secret_Notes extends Component{
    render(){
        return(
            <View>
                <Text>salam</Text>
            </View>
        )
    }
};

export default observer(Show_Secret_Notes)
