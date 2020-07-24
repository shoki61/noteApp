import React, { Component } from 'react';
import {View, Text, TouchableOpacity, FlatList,} from 'react-native';
import {observer} from 'mobx-react';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/stickyNotesStyles';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import helper from '../../controllers/helper';
import controlData from '../../controllers/controlData';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

let i = ''

class Sticky_Note extends Component{

    componentWillMount() {
        saveDataAsyncStorage.saveWarning()
    }

    constructor(props) {
        super(props);
        this.state={
            selectStickyNote:false,
            showAlert: false
        }
    }


    deleteStickyNote=async(index)=>{

        let warning = '';
        await AsyncStorage.getItem('warning')
            .then(value=>{
                warning = value
            })
        if(warning === 'true')this.setState({showAlert:true})
        else{
             saveData.userStickyNotes.splice(index,1)
             saveDataAsyncStorage.saveStickyNotes()
        }
    }


    deleteAllStickyNote(){
        saveData.userStickyNotes=[]
        saveDataAsyncStorage.saveStickyNotes()
    }

    pushEditStickyNote(index){
        controlData.editStickyNoteIndex=index
        this.props.navigation.navigate('Edit_Sticky_Note')
        this.setState({selectStickyNote:false})
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
                            <TouchableOpacity onPress={()=> {
                                i = index
                                this.deleteStickyNote(index);
                            }} activeOpacity={helper.buttonOpacity} style={buttons.stickyNoteEdit}>
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
                <View style={[styles.stickyNoteContainer,saveData.userStickyNotes.length<=0&&{justifyContent:'center'}]}>
                    {
                        saveData.userStickyNotes.length > 0 &&
                        <View style={[{width:'100%',alignItems:'flex-end',paddingRight:20,paddingLeft:15,marginBottom:7,height:35},this.state.selectStickyNote&&{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                            {
                                this.state.selectStickyNote&&
                                <TouchableOpacity onPress={()=>this.deleteAllStickyNote()} activeOpacity={helper.buttonOpacity} style={buttons.deleteAllSticky}>
                                    <Text style={buttons.deleteAllNoteText}>Hepsini sil</Text>
                                </TouchableOpacity>
                            }
                            <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=>this.setState({selectStickyNote:!this.state.selectStickyNote})}   style={buttons.settingButton}>
                                {
                                    this.state.selectStickyNote?<Icon color='#748bce' size={20} name='x'/>:<Icon color='#748bce' size={20} name='more-horizontal'/>
                                }
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        saveData.userStickyNotes.length>0&&
                        <FlatList
                            contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start',paddingBottom:100}}
                            style={{width:'95%'}}
                            data={saveData.userStickyNotes}
                            renderItem={value=>this.renderStickyNote(value.item,value.index)}
                        />
                    }
                    <LinearGradient style={saveData.userStickyNotes.length <= 0 ? buttons.addButton:buttons.addButtonAbsolute} colors={['#a2b9ff', '#5373bd', '#2f4ca3']}>
                        <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=> this.props.navigation.navigate('Add_New_Sticky_Note')} >
                            <Icon name='plus' size={30} color='#ededed'/>
                        </TouchableOpacity>
                    </LinearGradient>
                    {
                        saveData.userStickyNotes<=0&&
                            <Text style={buttons.addNewNoteText}>Yeni yapışkan not oluştur</Text>
                    }
                </View>


                <AwesomeAlert
                    show={this.state.showAlert}
                    title="Uyarı"
                    message="Bu notu silmek istediğinizden eminmisiniz"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="Birdaha sorma"
                    cancelButtonColor='#fff'
                    cancelButtonTextStyle={{color:'#7b7b7b'}}
                    confirmText="Evet"
                    confirmButtonColor="#ff5c5c"
                    cancelButtonStyle={{paddingLeft:15,paddingRight:15,paddingTop:4,paddingBottom:4,borderRadius:3,elevation:2}}
                    confirmButtonStyle={{paddingLeft:15,paddingRight:15,paddingTop:4,paddingBottom:4,borderRadius:3,elevation:5}}
                    onCancelPressed={async() => {
                        await AsyncStorage.setItem('warning','false')
                        this.setState({showAlert:false})
                    }}
                    onConfirmPressed={async ()=> {
                        saveData.userStickyNotes.splice(i,1)
                        await saveDataAsyncStorage.saveStickyNotes()
                        this.setState({showAlert:false})
                    }}
                />

            </>
        )
    }
}

export default  observer(Sticky_Note);
