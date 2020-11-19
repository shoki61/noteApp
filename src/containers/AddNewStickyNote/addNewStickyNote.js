import React, { Component } from 'react';
import {View, Text, TextInput, ScrollView, LayoutAnimation} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import Button from '../../components/Button/Button';

import styles from './style';
import buttons from '../../styles/buttons';
import controlData from '../../controllers/controlData';

class Add_New_Sticky_Note extends Component{

    state={
        desc:''
    }

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    render(){
        return(
               <ScrollView style={styles.addStickyNoteCont}  keyboardDismissMode='on-drag' contentContainerStyle={{alignItems:'center'}}>
                   <View style={styles.addStickyNote}>
                       <TextInput
                           style={styles.addStickyNoteInput}
                           multiline={true}
                           maxLength={150}
                           placeholder={'içerik...'}
                           value={this.state.desc}
                           onChangeText={text=> {
                               this.setState({desc: text});
                               controlData.stickyDesc=text
                           }}
                       />
                       <Text style={styles.maxLengthText}>({this.state.desc.length}/150)</Text>
                   </View>

                    <View style={{width:'100%',marginBottom:25,marginTop:10,alignItems:'flex-end'}}>
                        <Button
                            styles={[buttons.saveButton,{backgroundColor:'#ff9d5b'},this.state.desc !== '' &&{width:'35%'}]}
                            clicked={()=> {
                                controlData.controlStickyData();
                                this.props.navigation.navigate('Sticky_Notes');
                            }}
                        >
                            <Icon size={23} name='check' style={{fontWeight:'100'}} color='#fff'/>
                            <Text style={buttons.saveButtonText}>Kaydet</Text>
                        </Button>
                    </View>
               </ScrollView>
        )
    }
}

export default  Add_New_Sticky_Note;
