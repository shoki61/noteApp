import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import helper from './helper';



class SaveData {


    userNotes = [];

    userStickyNotes = [];

    userSecretNotes = [];


    saveStickyData=async(desc)=>{
        await this.userStickyNotes.push({
            desc:desc,
            date:helper.Date,
            time:helper.Time
        })
        AsyncStorage.setItem('stickyNotes', JSON.stringify(this.userStickyNotes))
    }

    saveData=async(title,desc)=>{

        await this.userNotes.push({
            title:title,
            desc:desc,
            date:helper.Date,
            time:helper.Time
        })

         AsyncStorage.setItem('notes', JSON.stringify(this.userNotes))
         //alert(JSON.stringify(this.userNotes[0].date))
    }

    saveSecretNote = async(title,desc)=> {
        await this.userSecretNotes.push({
            title:title,
            desc:desc,
            date:helper.Date,
            time:helper.Time
        });
        AsyncStorage.setItem('secretNotes', JSON.stringify(this.userSecretNotes))
    }

}

decorate(
    SaveData,
    {
        saveData:action,
        saveStickyData:action,
        saveSecretNote:action,

        userNotes:observable,
        userStickyNotes:observable,
        userSecretNotes:observable,


    }
);

export default new SaveData();
