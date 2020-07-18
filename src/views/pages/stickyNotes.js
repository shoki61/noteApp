import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {observer} from 'mobx-react';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import Icon from 'react-native-vector-icons/Feather';


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
                    <Icon name='plus' size={30} color='#fff'/>
                </TouchableOpacity>
            </>
        )
    }
}

export default  observer(Sticky_Note);
