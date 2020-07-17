import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';



class SaveData {

     date  = new Date().getDate();
     month = new Date().getMonth() + 1;
     year  = new Date().getFullYear();
     hours = new Date().getHours();
     min   = new Date().getMinutes();

    userNotes = []

    userStickyNotes = []

    saveStickyData=async(desc)=>{
        this.userStickyNotes.push({
            desc:desc,
            date:this.date+'.'+this.month+'.'+this.year,
            time:this.hours+':'+this.min
        })
        AsyncStorage.setItem('stickyNotes', JSON.stringify(this.userStickyNotes))
    }

     saveData=async(title,desc)=>{

        this.userNotes.push({
            title:title,
            desc:desc,
            date:this.date+'.'+this.month+'.'+this.year,
            time:this.hours+':'+this.min
        })

         AsyncStorage.setItem('notes', JSON.stringify(this.userNotes))
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
