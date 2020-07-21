import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {observer} from 'mobx-react';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import Icon from 'react-native-vector-icons/Feather';
import helper from '../../controllers/helper';
import controlData from '../../controllers/controlData';


class Sticky_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            selectStickyNote:false
        }
    }

    deleteStickyNote(index){
        saveData.userStickyNotes.splice(index,1)
        this.setState({})
    }

    renderStickyNote(value,index){
        return(
            <>

                <View style={styles.stickyNoteView}>
                    <Text style={styles.desc}>
                        {value.desc}
                    </Text>
                    <Text style={styles.date}>{value.date}-{value.time}</Text>
                    {
                        this.state.selectStickyNote&&
                        <View style={styles.editView}>
                            <TouchableOpacity activeOpacity={helper.buttonOpacity} style={buttons.stickyNoteEdit}>
                                <Icon size={17} color='#4dc1ff' name='edit-3'/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.deleteStickyNote(index)} activeOpacity={helper.buttonOpacity} style={buttons.stickyNoteEdit}>
                                <Icon size={17} color='#ff4d4d' name='trash-2'/>
                            </TouchableOpacity>
                        </View>
                    }
                </View>




            </>
        )
    }

    render(){
        return(
            <>
                <View style={styles.stickyNoteContainer}>
                    <View style={[{width:'100%',alignItems:'flex-end',paddingRight:20,paddingLeft:15,marginBottom:7,height:35},this.state.selectStickyNote&&{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                        {
                            this.state.selectStickyNote&&
                            <TouchableOpacity activeOpacity={helper.buttonOpacity} style={buttons.deleteAllSticky}>
                                <Text style={buttons.deleteAllStickyText}>Hepsini sil</Text>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=>this.setState({selectStickyNote:!this.state.selectStickyNote})}   style={buttons.settingButton}>
                            {
                                this.state.selectStickyNote?<Icon color='#748bce' size={20} name='x'/>:<Icon color='#748bce' size={20} name='more-horizontal'/>
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
                <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=>this.props.navigation.navigate('Add_New_Sticky_Note')} style={[buttons.addButton,buttons.addButtonAbsolute]}>
                    <Icon name='plus' size={30} color='#fff'/>
                </TouchableOpacity>
            </>
        )
    }
}

export default  observer(Sticky_Note);
