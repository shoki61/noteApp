import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';

import saveMethod from './saveData';




class ControlData {

    title = '';
    desc = '' ;

    stickyDesc = '';

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

        controlData:action,
        controlStickyData:action

    }
);

export default new ControlData();
