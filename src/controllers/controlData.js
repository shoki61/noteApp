import { observable, action, decorate } from 'mobx';

import saveMethod from './saveData';
import saveDataAsyncStorage from './saveDataAsyncStorage';
import helper from './helper';
import AsyncStorage from '@react-native-community/async-storage';




class ControlData {

    title = '';
    desc = '' ;

    stickyDesc = '';

    selectNote=false;

    selectNotes=[]

    showNote = '';

    editNoteIndex='';

    editStickyNoteIndex='';

    setShowNote(index){
        this.showNote = saveMethod.userNotes[index]
        this.editNoteIndex = index
    }

    controlPassword=async (password,hint)=>{
        if(password === '') helper.passwordWarning = true
        else {
            await saveDataAsyncStorage.saveSecretNotePassword(password, hint);
            AsyncStorage.getItem('secretNotePassword')
                .then(v=>{
                    helper.asyncNotePassword=v
                })
            AsyncStorage.getItem('secretNotePasswordHint')
                .then(v=>{
                    helper.asyncNotePasswordHint=v
                })
        }

    }

    controlData() {
        if (this.title === '' || this.desc === '') alert('Lütfen boş olan yerleri dolfurunuz!')
        else {
            saveMethod.saveData(this.title, this.desc)
        }
    }

    controlStickyData(){
        if(this.stickyDesc==='') alert('Daha hiç bir şey yazmadınız')
        else saveMethod.saveStickyData(this.stickyDesc)
    }



}

decorate(
    ControlData,
    {
        title:observable,
        desc:observable,
        stickyDesc:observable,
        selectNote:observable,
        selectNotes:observable,
        showNote:observable,
        editNoteIndex:observable,
        editStickyNoteIndex:observable,

        controlData:action,
        controlStickyData:action,
        setSelectNote:action,
        setShowNote:action,
        controlPassword:action,

    }
);

export default new ControlData();
