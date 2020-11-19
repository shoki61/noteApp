import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, LayoutAnimation, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';


import Button from '../../components/Button/Button';

import styles from './style';
import buttons from '../../styles/buttons';
import helper from '../../controllers/helper';
import saveData from '../../controllers/saveData';
import controlData from '../../controllers/controlData';
import saveDataAsyncStorage from '../../controllers/saveDataAsyncStorage';

class Secret_Notes extends Component {

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    };

    state = {
        showInput: false,
        select: false
    };

    deleteSecretNote = (index) => {
        saveData.userSecretNotes.splice(index, 1);
        saveDataAsyncStorage.saveSecretNotes();
    };

    renderSecretNotes = (item, index) => {
        return (
            <>
                <Button
                    clicked={() => {
                        controlData.setShowSecretNote(index)
                        this.props.navigation.navigate('Show_Secret_Note');
                    }}
                    styles={styles.secretNoteCont}
                >
                    {
                        item.title !== '' &&
                        <Text numberOfLines={1} style={styles.secretNoteTitle}>
                            {item.title}
                        </Text>
                    }
                    <Text style={[styles.content, item.title === '' && { marginTop: 10 }]} numberOfLines={8}>
                        {item.desc}
                    </Text>
                    <Text style={styles.dateText}>
                        {item.date}-{item.time}
                    </Text>
                    {
                        this.state.select &&
                        <View style={styles.selectView}>
                            <Button
                                clicked={() => {
                                    controlData.setShowSecretNote(index)
                                    this.props.navigation.navigate('Edit_Secret_Note')
                                    this.setState({ select: false })
                                }}
                                styles={buttons.selectButton}>
                                <Icon name='edit' color='#fc5db0' size={20} />
                            </Button>
                            <Button
                                clicked={() => this.deleteSecretNote(index)}
                                styles={buttons.selectButton}>
                                <Icon name='trash-2' color='#ff8080' size={20} />
                            </Button>

                        </View>
                    }
                </Button>
            </>
        )
    }

    allDeleteSecretNote() {
        saveData.userSecretNotes = [];
        saveDataAsyncStorage.saveSecretNotes();
    }

    render() {
        return (
            <View style={[{ flex: 1, backgroundColor: '#fff' }, saveData.userSecretNotes.length <= 0 && { justifyContent: 'center', alignItems: 'center' }]}>
                {
                    saveData.userSecretNotes.length > 0 &&
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: '#fff' }}
                    >
                        <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
                            <View style={[styles.headerBar, this.state.showInput && { flexDirection: 'column', alignItems: 'flex-end' }]}>
                                <View style={[{ flexDirection: 'row', alignItems: 'center' }, this.state.showInput && { width: '100%', flexDirection: 'row-reverse', justifyContent: 'space-between' }]}>
                                    <Button
                                        clicked={() => this.setState({ select: !this.state.select })}
                                        styles={[buttons.selectButton, this.state.showInput && { marginBottom: 15 }]}>
                                        <Text style={buttons.selectButtonText}>{this.state.select ? 'Vazgeç' : 'Seç'}</Text>
                                    </Button>
                                    {
                                        this.state.select &&
                                        <Button
                                            clicked={() => this.allDeleteSecretNote()}
                                            styles={[buttons.deleteAllNote, this.state.showInput && { marginBottom: 15 }, this.state.select && !this.state.showInput && { marginLeft: 20 }]}>
                                            <Text style={buttons.selectButtonText}>Hepsini sil</Text>
                                        </Button>
                                    }
                                </View>
                                <Button opacity={helper.buttonOpacity} clicked={() => this.setState({ showInput: true })} styles={[styles.searchView, !this.state.showInput && { width: 45, height: 45, justifyContent: 'center', backgroundColor: '#fff', elevation: 3 }]}>
                                    <Icon name='search' color={this.state.showInput ? '#adadad' : '#fc5db0'} size={20} />
                                    {
                                        this.state.showInput &&
                                        <TextInput style={styles.input}
                                            autoFocus
                                            placeholder={'not başlığı ile ara...'} />
                                    }
                                    {
                                        this.state.showInput &&
                                        <Button styles={buttons.closeInputButton} clicked={() => {
                                            this.setState({ showInput: false });
                                        }}
                                        >
                                            <Icon name='x' size={20} color='#adadad' />
                                        </Button>
                                    }
                                </Button>
                            </View>


                            <FlatList
                                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingBottom: 100, padding: 5 }}
                                style={styles.secretNotesCont}
                                data={saveData.userSecretNotes}
                                renderItem={data => this.renderSecretNotes(data.item, data.index)}
                            />




                        </View>
                    </ScrollView>
                }
                <Button
                    styles={[saveData.userSecretNotes.length > 0 ? buttons.addButtonAbsolute : buttons.addButton, { backgroundColor: '#fc5db0' }]}
                    opacity={helper.buttonOpacity}
                    clicked={() => {
                        helper.selectNote = false
                        this.props.navigation.navigate('Add_Secret_Note');
                    }}
                >
                    <Icon name='plus' size={30} color='#fff' />
                </Button>
                {
                    saveData.userSecretNotes.length <= 0 &&
                    <Text style={[buttons.addNewNoteText, { color: '#fc5db0' }]}>Gizli not oluştur</Text>
                }
            </View>
        )
    }
}
export default observer(Secret_Notes)
