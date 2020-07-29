import React,{ Component } from 'react';
import {View, Text, ScrollView, TextInput, TouchableOpacity, LayoutAnimation, Button, FlatList} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/secretNotesStyle';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';
import saveData from '../../controllers/saveData';

class Secret_Notes extends Component{

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    constructor(props) {
        super(props);
        this.state={
            showInput:false
        };
    }

    renderSecretNotes(item, index){
        return(
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Show_Secret_Note')} style={styles.secretNoteCont}>
                    <Text numberOfLines={1} style={styles.secretNoteTitle}>
                        {item.title}
                    </Text>
                    <Text style={styles.content} numberOfLines={8}>
                        {item.desc}
                    </Text>
                    <Text style={styles.dateText}>
                        {item.date}-{item.time}
                    </Text>
                </TouchableOpacity>
        )
    }

    render(){
        return(
            <>
            <ScrollView>
                <View style={{backgroundColor:'#fff',alignItems:'center',flex:1}}>
                    <View style={[{width:'85%',height:50,marginBottom:10,marginTop:15},!this.state.showInput&&{alignItems:'space-between'}]}>
                        <TouchableOpacity activeOpacity={helper.buttonOpacity} onPress={()=>this.setState({showInput:true})} style={[styles.searchView,!this.state.showInput&&{width:45,height:45,justifyContent:'center',backgroundColor:'#fff',elevation:3}]}>
                            <Icon name='search' color={this.state.showInput?'#adadad':'#fc5db0'} size={20}/>
                            {
                                this.state.showInput&&
                                <TextInput style={styles.input}
                                           placeholder={'not başlığı ile ara...'}/>
                            }
                            {
                                this.state.showInput&&
                                <TouchableOpacity style={buttons.closeInputButton} onPress={()=> {
                                    this.setState({showInput: false});
                                }}
                                >
                                    <Icon name='x'  size={20} color='#adadad'/>
                                </TouchableOpacity>
                            }
                        </TouchableOpacity>
                    </View>


                    <FlatList
                        contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',paddingBottom:100,padding:5}}
                        style={styles.secretNotesCont}
                        data={saveData.userSecretNotes}
                        renderItem={data => this.renderSecretNotes(data.item, data.index)}
                    />




                </View>
            </ScrollView>
                <TouchableOpacity
                    style={[saveData.userNotes.length>0?buttons.addButtonAbsolute:buttons.addButton,{backgroundColor:'#fc5db0'}]}
                    activeOpacity={helper.buttonOpacity}
                    onPress={()=> {
                        helper.selectNote=false
                        this.props.navigation.navigate('Add_Secret_Note');
                    }}
                >
                    <Icon name='plus' size={30} color='#fff'/>
                </TouchableOpacity>
                {
                    saveData.userSecretNotes.length<=0 &&
                    <Text style={[buttons.addNewNoteText,{color:'#1bb7e2'}]}>Gizli not oluştur</Text>
                }
            </>
        )
    }
}
export default observer(Secret_Notes)
