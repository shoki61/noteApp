import React, { Component } from 'react';
import {View, Text, TouchableOpacity,  TextInput, Dimensions,Platform, ScrollView,LayoutAnimation,UIManager,Image} from 'react-native';
import { observer } from 'mobx-react';
import { SearchableFlatList } from "react-native-searchable-list";
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/notesStyle';
import buttons from '../../styles/buttons';
import saveData from '../../controllers/saveData';
import controlData from '../../controllers/controlData';

import helper from '../../controllers/helper';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

const w = Dimensions.get('window').width;
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

class Notes extends Component{

    constructor(props) {
        super(props);
        this.state={
            selectNote:false,
            select:false,
            showSearch:false,
            searchTerm: '',
            searchAttribute: 'title',
            ignoreCase: true,
        }
    }
    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    }


    deleteNote(index){
        saveData.userNotes.splice(index,1)
        saveDataAsyncStorage.saveNotes()
    }

    deleteAllNote=async()=>{

        saveData.userNotes = [];
        saveDataAsyncStorage.saveNotes()
        this.setState({selectNote:false})

    }



    renderNotes(value,index){
        return(

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:w-75}}>
                    {
                        helper.selectNote &&
                        <View style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity
                                activeOpacity={helper.buttonOpacity}
                                onPress={()=> this.deleteNote(index)}
                                style={[buttons.selectButton]}>
                                <Icon name='trash-2' color='#ff6666' size={20}/>
                            </TouchableOpacity>
                        </View>
                    }
                    <TouchableOpacity
                        activeOpacity={helper.buttonOpacity}
                        onPress={()=> { controlData.setShowNote(index); this.props.navigation.navigate('Show_Note') }}
                        style={[styles.noteContainer,helper.selectNote &&{width:'83%'}]}
                    >
                        <View style={styles.Title_Desc_View}>
                            <Text numberOfLines={1} style={styles.noteTitle}>{value.title}</Text>
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

                    <View style={[styles.notesContainer,saveData.userNotes.length <=0 &&{justifyContent:'center'}]}>
                            {
                            helper.selectNote && saveData.userNotes.length>1 &&
                            <View
                                style={[styles.settingCont, helper.selectNote && {justifyContent: 'space-between'}]}>


                                    <TouchableOpacity activeOpacity={helper.buttonOpacity}
                                                      style={buttons.deleteAllSticky}
                                                      onPress={() => this.deleteAllNote()}>
                                        <Text style={buttons.deleteAllNoteText}>Tüm notları sil</Text>
                                    </TouchableOpacity>

                            </View>
                        }

                        {
                            saveData.userNotes.length > 0 &&
                            <View style={[{width:w-75,height:50,marginBottom:10},!this.state.showSearch&&{alignItems:'space-between'}]}>
                                <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=>this.setState({showSearch:true})} style={[styles.searchView,!this.state.showSearch&&{width:45,height:45,justifyContent:'center',backgroundColor:'#fff',elevation:3}]}>
                                    <Icon name='search' color={this.state.showSearch?'#adadad':'#1bb7e2'} size={20}/>
                                    {
                                        this.state.showSearch&&
                                        <TextInput style={styles.searchInput}
                                                   onChangeText={searchTerm => this.setState({searchTerm})}
                                                   autoFocus
                                                   placeholder={'not başlığı ile ara...'}/>
                                    }
                                    {
                                        this.state.showSearch&&
                                        <TouchableOpacity style={buttons.closeInputButton} onPress={()=> {
                                            this.setState({showSearch: false,searchTerm:''});
                                        }}
                                        >
                                            <Icon name='x'  size={20} color='#adadad'/>
                                        </TouchableOpacity>
                                    }
                                </TouchableOpacity>
                            </View>
                        }

                        {
                            saveData.userNotes.length > 0 &&
                            <SearchableFlatList
                                showsVerticalScrollIndicator={false}
                                searchTerm={this.state.searchTerm}
                                searchAttribute={this.state.searchAttribute}
                                ignoreCase={this.state.ignoreCase}
                                contentContainerStyle={{alignItems: 'center', paddingBottom: 110}}
                                style={{width: '100%'}}
                                data={saveData.userNotes}
                                renderItem={value => this.renderNotes(value.item, value.index)}
                            />
                        }
                            <TouchableOpacity
                                style={[saveData.userNotes.length>0?buttons.addButtonAbsolute:buttons.addButton,{backgroundColor:'#1bb7e2'}]}
                                activeOpacity={helper.buttonOpacity}
                                onPress={()=> {
                                    helper.selectNote=false
                                    this.props.navigation.navigate('Add_New_Note');
                                }}
                            >
                                <Icon name='plus' size={30} color='#fff'/>
                            </TouchableOpacity>
                        {
                            saveData.userNotes.length<=0 &&
                            <Text style={[buttons.addNewNoteText,{color:'#1bb7e2'}]}>Yeni not oluştur</Text>
                        }

                    </View>




            </>
        )
    }
}

export default  observer(Notes);
