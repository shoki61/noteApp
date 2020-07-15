import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import NativeJSCSamplingProfiler from 'react-native/Libraries/Performance/NativeJSCSamplingProfiler';
import {not} from 'react-native-reanimated';




class SaveData {

    notes = []
    note=[]
    saveData(title,desc){
        this.notes.push({
            title:title,
            desc:desc
        })

        AsyncStorage.setItem('notes', JSON.stringify(this.notes))

        setTimeout(()=>{
            AsyncStorage.getItem('notes')
                .then((v)=>{
                    this.note=v
                    alert(JSON.stringify(v.replace(/[^a-z 0-9]/g,':')))
                })
        },1000)

    }

}

decorate(
    SaveData,
    {
        saveData:action,
        notes:observable,

        note:observable

    }
);

export default new SaveData();
