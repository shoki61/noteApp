import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import {Text} from 'react-native';
import React from 'react';



class SaveData {

    userNotes = []

    userStickyNotes = []

     saveData=async(title,desc)=>{

           //let date  = new Date().getDate();
           //let month = new Date().getMonth() + 1;
           //let year  = new Date().getFullYear();
           //let hours = new Date().getHours();
           //let min   = new Date().getMinutes();
           //let sec   = new Date().getSeconds();

        this.userNotes.push({
            title:title,
            desc:desc,
            //date:date+'.'+month+'.'+year,
            //time:hours+':'+min+':'+sec
        })
        alert(JSON.stringify(this.userNotes))
        setTimeout(()=>{
            AsyncStorage.setItem('notes', JSON.stringify(this.userNotes))
        },1500)
    }

}

decorate(
    SaveData,
    {
        saveData:action,
        userNotes:observable,
        userStickyNotes:observable


    }
);

export default new SaveData();
