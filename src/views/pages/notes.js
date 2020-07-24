import React, { Component } from 'react';
import {View, Text, TouchableOpacity,  TextInput, Dimensions,Platform, ScrollView,LayoutAnimation,UIManager,Image} from 'react-native';
import { observer } from 'mobx-react';
import LinearGradient from 'react-native-linear-gradient';
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


    controlSelectNote(){
        if(!this.state.selectNote)this.setState({selectNote:true})
        else {
            controlData.selectNotes=[]
            this.setState({selectNote: false});
        }
    }

    deleteAllNote=async()=>{

        saveData.userNotes = [];
        saveDataAsyncStorage.saveNotes()
        this.setState({selectNote:false})

        // let i = 0;
        // while(i<controlData.selectNotes.length){
        //     saveData.userNotes.splice(controlData.selectNotes[i].index,1)
        //     i++
        // }


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
                        helper.selectNote &&
                        <View style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity
                                activeOpacity={helper.buttonOpacity}
                                onPress={()=> this.pushNote(value,index)}
                                style={[buttons.selectButton,controlData.a.includes(value.desc)&&{backgroundColor:'#8a8a8a'}]}>
                                <Icon name='check' color='#fff' size={20}/>
                            </TouchableOpacity>
                        </View>
                    }
                    <TouchableOpacity
                        activeOpacity={helper.buttonOpacity}
                        onPress={()=> { controlData.setShowNote(index); this.props.navigation.navigate('Show_Note') }}
                        style={[styles.noteContainer,helper.selectNote &&{width:'85%'}]}
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

                    <View style={[styles.notesContainer,saveData.userNotes.length <=0 &&{justifyContent:'center'}]}>
                        {
                            helper.selectNote && saveData.userNotes.length>0&&
                            <View
                                style={[styles.settingCont, helper.selectNote && {justifyContent: 'space-between'}]}>

                                {
                                    helper.selectNote &&
                                    <TouchableOpacity activeOpacity={helper.buttonOpacity}
                                                      style={buttons.deleteAllSticky}
                                                      onPress={() => this.deleteAllNote()}>
                                        <Text style={buttons.deleteAllNoteText}>Tüm notları sil</Text>
                                    </TouchableOpacity>
                                }

                            </View>
                        }

                        {
                            saveData.userNotes.length > 0 &&
                            <View style={[{width:w-75,height:50,marginBottom:10},!this.state.showSearch&&{alignItems:'space-between'}]}>
                                <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=>this.setState({showSearch:true})} style={[styles.searchView,!this.state.showSearch&&{width:45,height:45,justifyContent:'center',backgroundColor:'rgba(255,54,141,0.5)'}]}>
                                    <Icon name='search' color={this.state.showSearch?'#adadad':'#fff'} size={20}/>
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
                        <LinearGradient style={saveData.userNotes.length <= 0 ? buttons.addButton:buttons.addButtonAbsolute} colors={['#a2b9ff', '#5373bd', '#2f4ca3']}>
                            <TouchableOpacity style={buttons.notesSubButton} activeOpacity={helper.buttonOpacity} onPress={()=>this.props.navigation.navigate('Add_New_Note')} >
                                <Icon name='plus' size={30} color='#fff'/>
                            </TouchableOpacity>
                        </LinearGradient>
                        {
                            saveData.userNotes.length<=0 &&
                            <Text style={buttons.addNewNoteText}>Yeni not oluştur</Text>
                        }

                    </View>




            </>
        )
    }
}

export default  observer(Notes);
