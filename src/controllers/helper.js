import { observable, action, decorate } from 'mobx';

class helper{

    date  = new Date().getDate();
    month = new Date().getMonth() + 1;
    year  = new Date().getFullYear();
    hours = new Date().getHours();
    min   = new Date().getMinutes();


    Date = this.date+'.'+this.month+'.'+this.year
    Time = this.hours+':'+this.min

    selectNote=false;

    selectStickyNote = false;

    asyncNotePassword = '';
    asyncNotePasswordHint = '';

    secretNotePassword = '';
    passwordWarning = false;

    secretNoteHint='';

    controlSelectNote(){
        this.selectNote = !this.selectNote
    }

    controlSelectStickyNote(){
        this.selectStickyNote = !this.selectStickyNote
    }

    buttonOpacity=.8
}

decorate(
    helper,
    {
        Date:observable,
        Time:observable,
        buttonOpacity:observable,
        selectNote:observable,
        selectStickyNote:observable,
        secretNotePassword:observable,
        secretNoteHint:observable,
        passwordWarning:observable,
        asyncNotePassword:observable,
        asyncNotePasswordHint:observable,

        controlSelectNote:action,
        controlSelectStickyNote:action

    }
)

export default new helper();
