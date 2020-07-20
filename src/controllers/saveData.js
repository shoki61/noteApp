import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import helper from './helper';



class SaveData {


    userNotes = []

    userStickyNotes = []

    saveStickyData=async(desc)=>{
        this.userStickyNotes.push({
            desc:desc,
            date:helper.Date,
            time:helper.Time
        })
        AsyncStorage.setItem('stickyNotes', JSON.stringify(this.userStickyNotes))
    }

     saveData=async(title,desc)=>{

        this.userNotes.push({
            title:title,
            desc:desc,
            date:helper.Date,
            time:helper.Time
        })

         AsyncStorage.setItem('notes', JSON.stringify(this.userNotes))
         //alert(JSON.stringify(this.userNotes[0].date))
    }

}

decorate(
    SaveData,
    {
        saveData:action,
        saveStickyData:action,

        userNotes:observable,
        userStickyNotes:observable


    }
);

export default new SaveData();
