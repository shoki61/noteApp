import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

class Secret_Notes extends Component{
    render(){
        return(
            <View>
                <Text>Salam</Text>
            </View>
        )
    }
}
export default observer(Secret_Notes)
