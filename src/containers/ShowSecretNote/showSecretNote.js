import React,{ Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';


import Button from '../../components/Button/Button';

import styles from './style';
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

    state = {
        secretNote:''
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
                        <Button
                            clicked={()=>this.props.navigation.navigate('Edit_Secret_Note')}
                            styles={styles.bottomButton}
                        >
                            <Icon name='edit' size={20} color='#fc5db0'/>
                        </Button>
                        <Button
                            clicked={()=>this.deleteSecretNote()}
                            styles={styles.bottomButton}
                        >
                            <Icon name='trash-2' size={20} color='#ff8080'/>
                        </Button>
                    </View>
                </ScrollView>
        )
    }
};

export default observer(Show_Secret_Notes)
