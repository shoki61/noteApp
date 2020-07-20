import { observable, action, decorate } from 'mobx';

import saveMethod from './saveData';




class ControlData {

    title = '';
    desc = '' ;

    stickyDesc = '';

    selectNote=false;

    selectNotes=[]
    a=''

    showNote = '';

    editNoteIndex='';

    setShowNote(index){
        this.showNote = saveMethod.userNotes[index]
        this.editNoteIndex = index
    }

    setSelectNote=(value)=>{

        this.selectNotes.push({
            ...value
        })

        //alert(JSON.stringify(this.selectNotes))
    }

    controlData() {
        if (this.title === '' || this.desc === '') alert('Lütfen boş olan yerleri dolfurunuz!')
        else saveMethod.saveData(this.title, this.desc).then(r => alert('true')).catch(e=>alert(e))
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

        controlData:action,
        controlStickyData:action,
        setSelectNote:action,
        setShowNote:action,

    }
);

export default new ControlData();
