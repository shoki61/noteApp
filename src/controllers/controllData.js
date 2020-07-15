import { observable, action, decorate } from 'mobx';
import { AsyncStorage } from 'react-native';




class ControllData {

    title = '';
    desc = '' ;


}

decorate(
    ControllData,
    {
        title:observable,
        desc:observable
    }
);

export default new ControllData();
