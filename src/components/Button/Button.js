import React from 'react';
import { TouchableOpacity } from 'react-native';


const button = props => (
    <TouchableOpacity
        activeOpacity={props.opacity}
        onPress={props.clicked}
        style={props.styles}
    >
        {props.children}
    </TouchableOpacity>
);

export default button;