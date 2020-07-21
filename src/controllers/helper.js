import { observable, decorate } from 'mobx';

class helper{

    date  = new Date().getDate();
    month = new Date().getMonth() + 1;
    year  = new Date().getFullYear();
    hours = new Date().getHours();
    min   = new Date().getMinutes();


    Date = this.date+'.'+this.month+'.'+this.year
    Time = this.hours+':'+this.min


    buttonOpacity=.8
}

decorate(
    helper,
    {
        Date:observable,
        Time:observable,
        buttonOpacity:observable
    }
)

export default new helper();
