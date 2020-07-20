import React, { Component } from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput, Dimensions, ScrollView,} from 'react-native';
import { observer } from 'mobx-react';
import LinearGradient from 'react-native-linear-gradient';
import { SearchableFlatList } from "react-native-searchable-list";

import styles from '../../styles/notesStyle';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import controlData from '../../controllers/controlData';

import Icon from 'react-native-vector-icons/Feather';
import helper from '../../controllers/helper';
import AsyncStorage from '@react-native-community/async-storage';

const w = Dimensions.get('window').width;

class Notes extends Component{

    constructor(props) {
        super(props);
        this.state={
            selectNote:false,
            select:false
        }
    }

    controlSelectNote(){
        if(!this.state.selectNote)this.setState({selectNote:true})
        else {
            controlData.selectNotes=[]
            this.setState({selectNote: false});
        }
    }

    removeSelectNote=async()=>{

        let i = 0;
        while(i<saveData.userNotes.length){
            saveData.userNotes.splice(controlData.selectNotes[i].index,1)
            i++
        }


       // for(let i=0; i < controlData.selectNotes.length; i++){
       //     //alert(JSON.stringify(tmp[i].index))
       //     await saveData.userNotes.splice(controlData.selectNotes[i].index,1)
       //
       // }
       // controlData.selectNotes=[]
       //
       //  this.setState({selectNote:false})
        // setTimeout(()=>{
        //     this.setState({selectNote:false})
        //     AsyncStorage.setItem('notes', JSON.stringify(saveData.userNotes))
        //     controlData.selectNotes=[]
        // },1500)
    }

    pushNote(value,index){
        controlData.setSelectNote(index)
    }

    renderNotes(value,index){
        return(

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:w-75}}>
                    {
                        this.state.selectNote &&
                        <View style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity
                                onPress={()=> this.pushNote(value,index)}
                                style={[buttons.selectButton,controlData.a.includes(value.desc)&&{backgroundColor:'#8a8a8a'}]}>
                                <Icon name='check' color='#fff' size={20}/>
                            </TouchableOpacity>
                        </View>
                    }
                    <TouchableOpacity
                        onPress={()=> { controlData.setShowNote(index); this.props.navigation.navigate('Show_Note') }}
                        activeOpacity={.9}
                        style={[styles.noteContainer,this.state.selectNote &&{width:'85%'}]}
                    >
                        <View style={styles.Title_Desc_View}>
                            <Text numberOfLines={1} style={styles.noteTitle}>{controlData.selectNotes.length}{value.title}</Text>
                            <Text numberOfLines={1} style={styles.noteDesc}>{value.desc}</Text>
                        </View>
                        <View style={styles.Date_Time_View}>
                            <Text style={styles.noteDate}>{value.date}</Text>
                            <Text style={styles.noteTime}>{value.time}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

        )
    }
    render(){
        return(
            <>

                <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff',flex:1}}>
                    <View style={styles.notesContainer}>
                        <Text>{JSON.stringify(saveData.userNotes)}</Text>
                        <View style={[styles.settingCont,controlData.selectNotes.length<=0&&{justifyContent:'flex-end'}]}>
                            {
                                controlData.selectNotes.length > 0 &&
                                <TouchableOpacity onPress={()=> this.removeSelectNote()}>
                                    <Text style={buttons.deleteButtonText}>Sil</Text>
                                </TouchableOpacity>
                            }
                            <TouchableOpacity onPress={()=> this.controlSelectNote()} style={buttons.settingButton}>
                                {
                                    this.state.selectNote?<Icon color='#748bce' size={20} name='x'/>:<Text style={{color:'#748bce'}}>seç</Text>
                                }
                            </TouchableOpacity>
                        </View>
                        <Text>{JSON.stringify(controlData.selectNotes)}</Text>
                        <View style={styles.searchView}>
                            <Icon name='search' color='#adadad' size={18}/>
                            <TextInput style={styles.searchInput}  placeholder={'ara...'}/>
                        </View>

                        <FlatList
                            contentContainerStyle={{alignItems:'center',paddingBottom:110}}
                            style={{width:'100%'}}
                            data={saveData.userNotes}
                            renderItem={value=>this.renderNotes(value.item,value.index)}
                        />
                    </View>
                </ScrollView>
                <LinearGradient style={[buttons.addButton,buttons.addButtonAbsolute]} colors={['#a2b9ff', '#5373bd', '#2f4ca3']}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add_New_Note')} >
                        <Icon name='plus' size={30} color='#fff'/>
                    </TouchableOpacity>
                </LinearGradient>


            </>
        )
    }
}

export default  observer(Notes);
