import React,{ Component } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/showSecretNoteStyle';

class Show_Secret_Notes extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <Text style={styles.title}>Lorem ipsum Dolar</Text>
                    <Text style={styles.desc}>Lorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit ametLorem ipsum dolar sit amet</Text>
                    <View style={styles.bottomButtonsCont}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Edit_Secret_Note')} style={styles.bottomButton}>
                            <Icon name='edit' size={20} color='#fc5db0'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButton}>
                            <Icon name='trash-2' size={20} color='#ff8080'/>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
};

export default observer(Show_Secret_Notes)
