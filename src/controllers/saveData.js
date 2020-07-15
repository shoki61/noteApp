import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import NativeJSCSamplingProfiler from 'react-native/Libraries/Performance/NativeJSCSamplingProfiler';




class SaveData {

    notes = []
    saveData(title,desc){
        let notes={
            title:title,
            desc:desc
        }
        this.notes.push({
            ...notes
        })
        //alert(JSON.stringify(this.notes))

        AsyncStorage.setItem('notes',JSON.stringify(this.notes))
        setTimeout(()=>{
            AsyncStorage.getItem('notes')
                .then(v=>{
                    alert(JSON.stringify(v))
                }).catch(er=>{
                    alert(er);
            })

        },1000)
    }

}

decorate(
    SaveData,
    {
        saveData:action,
        notes:observable

    }
);

export default new SaveData();
