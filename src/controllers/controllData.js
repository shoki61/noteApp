import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';

import saveMethod from './saveData';




class ControllData {

    title = '';
    desc = '' ;

    controllData() {
        if (this.title === '' || this.desc === '') alert('Lütfen boş olan yerleri dolfurunuz!')
        else saveMethod.saveData(this.title,this.desc)
    }



}

decorate(
    ControllData,
    {
        title:observable,
        desc:observable,

        controllData:action

    }
);

export default new ControllData();
