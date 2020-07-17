import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';


class Sticky_Note extends Component{

    renderStickyNote(value){
        return(
            <View style={styles.stickyNoteView}>
                <Text style={styles.desc}>
                    {value.desc}
                </Text>
                <Text style={styles.date}>{value.date}-{value.time}</Text>
            </View>
        )
    }

    render(){
        return(
            <>
                <View style={styles.stickyNoteContainer}>
                    <FlatList
                        contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start'}}
                        style={{width:'95%'}}
                        data={saveData.userStickyNotes}
                        renderItem={value=>this.renderStickyNote(value.item)}
                    />
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add_New_Sticky_Note')} style={[buttons.addButton,buttons.addButtonAbsolute]}>
                    <SImage height={23} source={require('../../icons/plus.png')}/>
                </TouchableOpacity>
            </>
        )
    }
}

export default  observer(Sticky_Note);
