import React, { Component } from 'react';
import {View, Text, TextInput, ScrollView, LayoutAnimation} from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';


import Button from '../../components/Button/Button';

import styles from './style';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';
import helper from '../../controllers/helper';

class Add_New_Note extends Component{

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    state={
        title:'',
        desc:''
    }
    
    render(){
        return(
            <>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff'}}>
                <View style={styles.addNewNoteContainer}>
                <View style={[{width:'100%'},this.state.desc !== '' && {marginBottom:60}]}>
                    <TextInput
                        value={this.state.title}
                        multiline={true}
                        onChangeText={title=> {
                            this.setState({title:title})
                            controlData.title = title;
                        }}
                        style={styles.inputTitle}
                        placeholder={'başlık...'}
                    />
                    <TextInput
                        value={this.state.desc}
                        multiline={true}
                        onChangeText={desc=> {
                            this.setState({desc:desc})
                            controlData.desc = desc;
                        }}
                        style={styles.inputDesc}
                        placeholder={'içerik...'}
                    />
                </View>
            </View>
            </ScrollView>
        <Button
            styles={[buttons.saveButton,{backgroundColor:'#1bb7e2'},this.state.desc!=='' &&{width:'100%'}]}
            clicked={()=>{
                controlData.controlData();
                this.props.navigation.navigate('Notes')
            }}
            opacity={helper.buttonOpacity}
        >
            <Icon name='check' color='#fff' size={23}/>
            <Text style={buttons.saveButtonText}>Kaydet</Text>
        </Button>
        </>
        )
    }
}

export default observer(Add_New_Note);
