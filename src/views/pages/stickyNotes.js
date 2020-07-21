import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {observer} from 'mobx-react';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import Icon from 'react-native-vector-icons/Feather';


class Sticky_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            selectStickyNote:false
        }
    }

    renderStickyNote(value,index){
        return(
            <>
                {
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Icon name='edit-3'/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='trash-2'/>
                        </TouchableOpacity>
                    </View>
                }
                <View style={styles.stickyNoteView}>
                    <Text style={styles.desc}>
                        {value.desc}
                    </Text>
                    <Text style={styles.date}>{value.date}-{value.time}</Text>
                </View>

            </>
        )
    }

    render(){
        return(
            <>
                <View style={styles.stickyNoteContainer}>
                    <View style={{width:'100%',alignItems:'flex-end',paddingRight:20}}>
                        <TouchableOpacity onPress={()=>this.setState({selectStickyNote:!this.state.selectStickyNote})}   style={buttons.settingButton}>
                            {
                                this.state.selectStickyNote?<Icon color='#748bce' size={20} name='x'/>:<Icon color='#748bce' size={20} name='more-vertical'/>
                            }
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start'}}
                        style={{width:'95%'}}
                        data={saveData.userStickyNotes}
                        renderItem={value=>this.renderStickyNote(value.item,value.index)}
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
