import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../../styles/notesStyle';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';

class Notes extends Component{
    renderNotes(value){
        return(
            <>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Show_Note')} activeOpacity={.9} style={styles.noteContainer}>
                    <View style={styles.Title_Desc_View}>
                        <Text numberOfLines={1} style={styles.noteTitle}>{value.title}</Text>
                        <Text numberOfLines={1} style={styles.noteDesc}>{value.desc}</Text>
                    </View>
                    <View style={styles.Date_Time_View}>
                        <Text style={styles.noteDate}>{value.date}</Text>
                        <Text style={styles.noteTime}>{value.time}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    render(){
        return(
            <>
                <View style={styles.notesContainer}>

                    <Text>{new Date().getDate()}.{ new Date().getMonth() + 1}.{new Date().getFullYear()}.{new Date().getHours()}.{new Date().getMinutes()}.{new Date().getSeconds()}
                    </Text>
                    <FlatList
                        contentContainerStyle={{alignItems:'center'}}
                        style={{width:'100%',paddingBottom:45}}
                        data={saveData.userNotes}
                        renderItem={value=>this.renderNotes(value.item)}
                    />
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add_New_Note')} style={[buttons.addButton,buttons.addButtonAbsolute]}>
                    <SImage height={23} source={require('../../icons/plus.png')}/>
                </TouchableOpacity>
            </>
        )
    }
}

export default  Notes;
