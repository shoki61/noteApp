import React,{ Component } from 'react';
import {View, Text, TextInput, ScrollView, LayoutAnimation} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';


import Button from '../../components/Button/Button';

import styles from './style'
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
                    style={[styles.desc,controlData.secretDesc!==''&&{paddingBottom:60},controlData.secretTitle!==''&&{paddingBottom:60}]}
                    multiline
                    placeholder='içerik...'
                    onChangeText={desc =>controlData.secretDesc = desc}
                />
            </View>

            </ScrollView>
                <Button
                    styles={[buttons.saveButton,{backgroundColor:'#fc5db0'},controlData.secretDesc!=='' &&{width:'100%'}]}
                    clicked={()=> {
                        controlData.controlSecretData();
                        controlData.secretTitle = '';
                        controlData.secretDesc = '';
                        this.props.navigation.navigate('Secret_Notes')
                    }}
                    opacity={helper.buttonOpacity}
                >
                    <Icon name='check' color='#fff' size={23}/>
                    <Text style={buttons.saveButtonText}>Kaydet</Text>
                </Button>
            </>
        )
    }
};

export default observer(Add_Secret_Note)
