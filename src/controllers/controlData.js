import { observable, action, decorate } from 'mobx';

import saveMethod from './saveData';
import AwesomeAlert from 'react-native-awesome-alerts';




class ControlData {

    title = '';
    desc = '' ;

    stickyDesc = '';

    selectNote=false;

    selectNotes=[]
    a=''

    showNote = '';

    editNoteIndex='';

    editStickyNoteIndex='';

    setShowNote(index){
        this.showNote = saveMethod.userNotes[index]
        this.editNoteIndex = index
    }

    setSelectNote=(index)=>{

        this.selectNotes.push({
            index:index
        })
        //alert(JSON.stringify(this.selectNotes))
    }

    controlData() {
        if (this.title === '' || this.desc === '') alert('Lütfen boş olan yerleri dolfurunuz!')
        else saveMethod.saveData(this.title, this.desc).then(r => {}).catch(e=>alert(e))
    }

    controlStickyData(){
        if(this.stickyDesc==='') alert('Daha hiç bir şey yazmadınız')
        else saveMethod.saveStickyData(this.stickyDesc).then(r=>alert(r)).catch(e=>alert(e))

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
        a:observable,
        showNote:observable,
        editNoteIndex:observable,
        editStickyNoteIndex:observable,

        controlData:action,
        controlStickyData:action,
        setSelectNote:action,
        setShowNote:action,

    }
);

export default new ControlData();
