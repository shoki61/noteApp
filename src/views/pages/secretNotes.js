import React,{ Component } from 'react';
import {View, Text, ScrollView, TextInput, TouchableOpacity, LayoutAnimation, Button} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/secretNotesStyle';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';

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

    render(){
        return(
            <ScrollView style={{backgroundColor:'#fff'}} contentContainerStyle={{alignItems:'center'}}>
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

                <View style={styles.secretNotesCont}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Show_Secret_Note')} style={styles.secretNoteCont}>
                        <Text numberOfLines={1} style={styles.secretNoteTitle}>
                            Banka hesaplarımın şifreleri
                        </Text>
                        <Text style={styles.content} numberOfLines={8}>
                            tel şifrem: 555
                        </Text>
                        <Text style={styles.dateText}>
                            27.07.2020-17:20
                        </Text>

                    </TouchableOpacity>
                    <View style={styles.secretNoteCont}>
                        <Text style={styles.secretNoteTitle}>
                            Sosyal hesaplarım
                        </Text>
                        <Text style={styles.content}>
                            facebook şifrem : 2559
                        </Text>
                        <Text style={styles.dateText}>
                            27.07.2020-17:20
                        </Text>
                    </View>

                </View>

            </ScrollView>
        )
    }
}
export default observer(Secret_Notes)
