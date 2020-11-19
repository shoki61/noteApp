import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import saveData from './saveData';

class saveDataAsyncStorage {

    saveNotes(){
        AsyncStorage.setItem('notes', JSON.stringify(saveData.userNotes))
    }

    saveStickyNotes(){
        AsyncStorage.setItem('stickyNotes', JSON.stringify(saveData.userStickyNotes))
    }
    saveSecretNotes(){
        AsyncStorage.setItem('secretNotes', JSON.stringify(saveData.userSecretNotes))
    }

    saveSecretNotePassword(password, hint){
        if(hint!=='') {
            AsyncStorage.setItem('secretNotePassword', password);
            AsyncStorage.setItem('secretNotePasswordHint', hint)
        }
        else AsyncStorage.setItem('secretNotePassword', password)
    }

    saveWarning=async()=>{
        let warning = ''
        await AsyncStorage.getItem('warning')
            .then(value=>{
                warning = value
            })
        if(warning === null) AsyncStorage.setItem('warning','true')
    }

}

decorate(
    saveDataAsyncStorage,
    {
        saveNotes:action,
        saveStickyNotes:action,
        saveSecretNotePassword:action
    }
)

export default new saveDataAsyncStorage();
