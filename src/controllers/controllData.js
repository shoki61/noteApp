import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';

import saveMethod from './saveData';




class ControllData {

    title = '';
    desc = '' ;

    controlData() {
        if (this.title === '' || this.desc === '') alert('Lütfen boş olan yerleri dolfurunuz!')
        else saveMethod.saveData(this.title, this.desc).then(r => alert('true')).catch(e=>alert(e))
    }



}

decorate(
    ControllData,
    {
        title:observable,
        desc:observable,

        controlData:action

    }
);

export default new ControllData();
