import React,{ Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, LayoutAnimation} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';


import styles from '../../styles/addSecretNoteStyle'
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';
import controlData from '../../controllers/controlData';

class Add_Secret_Note extends Component{


    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    render() {
        return (
            <>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff'}}>
            <View style={styles.container}>
                <TextInput
                    value={controlData.secretTitle}
                    style={styles.title}
                    multiline
                    placeholder='başlık...'
                    onChangeText={title=> controlData.secretTitle = title}
                />
                <TextInput
                    value={controlData.secretDesc}
                    style={[styles.desc,controlData.secretDesc!==''&&{paddingBottom:50},controlData.secretTitle!==''&&{paddingBottom:50}]}
                    multiline
                    placeholder='içerik...'
                    onChangeText={desc =>controlData.secretDesc = desc}
                />
            </View>

            </ScrollView>
                <TouchableOpacity
                    style={[buttons.saveButton,{backgroundColor:'#fc5db0'},controlData.secretDesc!=='' &&{width:'100%'}]}
                    onPress={()=> {
                        controlData.controlSecretData();
                        controlData.secretTitle = '';
                        controlData.secretDesc = '';
                        this.props.navigation.navigate('Secret_Notes')
                    }}
                    activeOpacity={helper.buttonOpacity}
                >
                    <Icon name='check' color='#fff' size={23}/>
                    <Text style={buttons.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
            </>
        )
    }
};

export default observer(Add_Secret_Note)
