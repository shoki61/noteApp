import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
class Add_Secret_Note extends Component{
    render() {
        return (
            <View>
                <Text>Salam</Text>
            </View>
        )
    }
};

export default observer(Add_Secret_Note)
