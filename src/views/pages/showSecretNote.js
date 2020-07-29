import React,{ Component } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/showSecretNoteStyle';
import saveData from '../../controllers/saveData';
import controlData from '../../controllers/controlData';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

class Show_Secret_Notes extends Component{

    deleteSecretNote=async()=>{
        saveData.userSecretNotes.splice(controlData.editSecretNoteIndex,1);
        saveDataAsyncStorage.saveSecretNotes();
        this.props.navigation.navigate('Secret_Notes')
    }
    componentWillMount=async()=> {
        this.setState({secretNote:controlData.showSecretNote})
    }

    constructor(props) {
        super(props);
        this.state = {
            secretNote:''
        }
    }

    render(){
        return(
                <ScrollView
                    contentContainerStyle={{flexGrow:1,justifyContent:'center'}}
                    style={styles.container}>
                    <Text style={styles.date}>{this.state.secretNote.date}-{this.state.secretNote.time}</Text>
                    {
                        this.state.secretNote.title!==''&&
                        <Text style={styles.title}>{this.state.secretNote.title}</Text>
                    }
                    <Text style={styles.desc}>{this.state.secretNote.desc}</Text>
                    <View style={styles.bottomButtonsCont}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('Edit_Secret_Note')}
                            style={styles.bottomButton}
                        >
                            <Icon name='edit' size={20} color='#fc5db0'/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>this.deleteSecretNote()}
                            style={styles.bottomButton}
                        >
                            <Icon name='trash-2' size={20} color='#ff8080'/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        )
    }
};

export default observer(Show_Secret_Notes)
