import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import styles from '../../styles/editSecretNoteStyle';

class Edit_Secret_Note extends Component {
    render(){
        return(
            <View>
                <Text>
                    salam
                </Text>
            </View>
        )
    }
};

export default observer(Edit_Secret_Note);

