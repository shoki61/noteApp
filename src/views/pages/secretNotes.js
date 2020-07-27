import React,{ Component } from 'react';
import {View, Text, ScrollView, TextInput, TouchableOpacity, LayoutAnimation, Button} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/secretNotesStyle';
import buttons from '../../styles/buttons';

class Secret_Notes extends Component{

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    constructor(props) {
        super(props);
        this.state={
            showInput:false
        };
    }

    render(){
        return(
            <ScrollView style={{backgroundColor:'#fff'}} contentContainerStyle={{alignItems:'center'}}>
                <View style={[{width:'85%'},this.state.showInput ? {flexDirection:'row',justifyContent:'center',marginTop:15}:{alignItems:'flex-end',marginTop:15},]}>
                    <TouchableOpacity onPress={()=>this.setState({showInput:true})} style={[styles.searchView,!this.state.showInput&&{width:50}]}>
                        <Icon name='search' size={20} color='#7d7d7d'/>
                        {
                            this.state.showInput &&
                            <TextInput style={styles.input} placeholder='not başlığına göre ara'/>
                        }
                        {
                            this.state.showInput&&
                            <TouchableOpacity onPress={()=>this.setState({showInput:false})} style={buttons.closeInputButton}>
                                <Icon name='x' size={15} color='#6e6e6e'/>
                            </TouchableOpacity>
                        }
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        )
    }
}
export default observer(Secret_Notes)
