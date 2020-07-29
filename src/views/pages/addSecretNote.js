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
                    style={styles.desc}
                    multiline
                    placeholder='içerik...'
                    onChangeText={desc =>controlData.secretDesc = desc}
                />
            </View>

                    <View style={{width:'100%',marginBottom:25,marginTop:10,alignItems:'flex-end'}}>

                        <TouchableOpacity
                            style={[buttons.saveButton,{backgroundColor:'#fc5db0'},controlData.secretDesc!==''&&{width:'35%'}]}
                            onPress={()=>controlData.controlSecretData()}
                            activeOpacity={helper.buttonOpacity} >
                            <Icon size={23} name='check'  color='#fff'/>
                            <Text style={buttons.saveButtonText}>Kaydet</Text>
                        </TouchableOpacity>

                    </View>

            </ScrollView>
        )
    }
};

export default observer(Add_Secret_Note)
