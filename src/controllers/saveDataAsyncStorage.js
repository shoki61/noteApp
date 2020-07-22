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
        saveStickyNotes:action


    }
)

export default new saveDataAsyncStorage();
