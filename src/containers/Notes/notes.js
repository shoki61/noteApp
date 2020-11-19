import React, { Component } from 'react';
import {View, Text,  TextInput, Dimensions,Platform,LayoutAnimation,UIManager} from 'react-native';
import { observer } from 'mobx-react';
import { SearchableFlatList } from "react-native-searchable-list";
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button/Button';

import styles from './style';
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

    state={
        selectNote:false,
        select:false,
        showSearch:false,
        searchTerm: '',
        searchAttribute: 'title',
        ignoreCase: true,
    }
    
    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    }


    deleteNote = (index) => {
        saveData.userNotes.splice(index,1)
        saveDataAsyncStorage.saveNotes()
    }

    deleteAllNote = async() => {
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
                            <Button
                                opacity={helper.buttonOpacity}
                                clicked={()=> this.deleteNote(index)}
                                styles={[buttons.selectButton]}>
                                <Icon name='trash-2' color='#ff6666' size={20}/>
                            </Button>
                        </View>
                    }
                    <Button
                        opacity={helper.buttonOpacity}
                        clicked={()=> { controlData.setShowNote(index); this.props.navigation.navigate('Show_Note') }}
                        styles={[styles.noteContainer,helper.selectNote &&{width:'83%'}]}
                    >
                        <View style={styles.Title_Desc_View}>
                            <Text numberOfLines={1} style={styles.noteTitle}>{value.title}</Text>
                            <Text numberOfLines={1} style={styles.noteDesc}>{value.desc}</Text>
                        </View>
                        <View style={styles.Date_Time_View}>
                            <Text style={styles.noteDate}>{value.date}</Text>
                            <Text style={styles.noteTime}>{value.time}</Text>
                        </View>
                    </Button>
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
                            <Button
                                opacity={helper.buttonOpacity}
                                styles={buttons.deleteAllSticky}
                                clicked={this.deleteAllNote}>
                                        <Text style={buttons.deleteAllNoteText}>Tüm notları sil</Text>
                                    </Button>

                            </View>
                        }

                        {
                            saveData.userNotes.length > 0 &&
                            <View style={[{width:w-75,height:50,marginBottom:10},!this.state.showSearch&&{alignItems:'space-between'}]}>
                            <Button
                                opacity={helper.buttonOpacity}
                                clicked={() => this.setState({ showSearch: true })}
                                styles={[styles.searchView, !this.state.showSearch && { width: 45, height: 45, justifyContent: 'center', backgroundColor: '#fff', elevation: 3 }]}>
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
                                        <Button styles={buttons.closeInputButton} clicked={()=> {
                                            this.setState({showSearch: false,searchTerm:''});
                                        }}
                                        >
                                            <Icon name='x'  size={20} color='#adadad'/>
                                        </Button>
                                    }
                                </Button>
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
                            <Button
                                styles={[saveData.userNotes.length>0?buttons.addButtonAbsolute:buttons.addButton,{backgroundColor:'#1bb7e2'}]}
                                opacity={helper.buttonOpacity}
                                clicked={()=> {
                                    helper.selectNote=false
                                    this.props.navigation.navigate('Add_New_Note');
                                }}
                            >
                                <Icon name='plus' size={30} color='#fff'/>
                            </Button>
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
