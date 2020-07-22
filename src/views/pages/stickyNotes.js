import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import {observer} from 'mobx-react';
import AwesomeAlert from 'react-native-awesome-alerts';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import Icon from 'react-native-vector-icons/Feather';
import helper from '../../controllers/helper';
import controlData from '../../controllers/controlData';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';


class Sticky_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            selectStickyNote:false,
            showAlert: false
        }
    }

    deleteStickyNote(index){
        // saveData.userStickyNotes.splice(index,1)
        // this.setState({})
        // saveDataAsyncStorage.saveStickyNotes()
        // Alert.alert(
        //     'Uyarı',
        //           'Silmek istediğinizden eminmisiniz',
        //     [
        //         {
        //             text:'Evet',
        //
        //         },
        //         {
        //             text:'Birdaha sorma',
        //         },
        //         {
        //             text:'İptal',
        //             style:'cancel'
        //         },
        //
        //     ],
        //     { cancelable: false }
        //
        // )
        this.showAlert();
    }
    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    deleteAllStickyNote(){
        saveData.userStickyNotes=[]
        this.setState({})
        saveDataAsyncStorage.saveStickyNotes()
    }

    pushEditStickyNote(index){
        controlData.editStickyNoteIndex=index
        this.props.navigation.navigate('Edit_Sticky_Note')
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
                            <TouchableOpacity onPress={()=>this.pushEditStickyNote(index)} activeOpacity={helper.buttonOpacity} style={buttons.stickyNoteEdit}>
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
        const {showAlert} = this.state;
        return(
            <>
                <View style={styles.stickyNoteContainer}>
                    {
                        saveData.userStickyNotes.length > 0 &&
                        <View style={[{width:'100%',alignItems:'flex-end',paddingRight:20,paddingLeft:15,marginBottom:7,height:35},this.state.selectStickyNote&&{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                            {
                                this.state.selectStickyNote&&
                                <TouchableOpacity onPress={()=>this.deleteAllStickyNote()} activeOpacity={helper.buttonOpacity} style={buttons.deleteAllSticky}>
                                    <Text style={buttons.deleteAllStickyText}>Hepsini sil</Text>
                                </TouchableOpacity>
                            }
                            <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=>this.setState({selectStickyNote:!this.state.selectStickyNote})}   style={buttons.settingButton}>
                                {
                                    this.state.selectStickyNote?<Icon color='#748bce' size={20} name='x'/>:<Icon color='#748bce' size={20} name='more-horizontal'/>
                                }
                            </TouchableOpacity>
                        </View>
                    }
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

                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="AwesomeAlert"
                    message="I have a message for you!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </>
        )
    }
}

export default  observer(Sticky_Note);
