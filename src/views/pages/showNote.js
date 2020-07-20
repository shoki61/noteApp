import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';


import styles from '../../styles/showNoteStyle';
import Icon from 'react-native-vector-icons/Feather';
import controlData from '../../controllers/controlData';


class Show_Note extends Component{

    constructor(props) {
        super(props);
        this.state={
            note:''
        }
    }

    componentWillMount=async()=> {
        await this.setState({note:controlData.showNote})
    }

    render(){
        return(
            <View style={styles.showNoteCont}>
                <View style={styles.closeButtonView}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Notes')}>
                        <Icon name='x' size={35} color='#0BABC4'/>
                    </TouchableOpacity>
                </View>

                <View style={styles.noteContainer}>
                    <Text style={styles.noteTitle}>{this.state.note.title}</Text>
                    <Text style={styles.noteDesc}>
                        {this.state.note.desc}
                    </Text>
                    <Text style={styles.noteDate}>{this.state.note.date} - {this.state.note.time}</Text>
                </View>

                <View style={styles.footerButtonCont}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Edit_Note')} activeOpacity={.8} style={styles.footerButton}>
                        <Icon name='edit' size={23} color='#0BABC4'/>
                        <Text style={styles.footerButtonText}>Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={styles.footerButton}>
                        <Icon name='trash' size={23} color='#0BABC4'/>
                        <Text style={styles.footerButtonText}>Sil</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

export default  observer(Show_Note);
