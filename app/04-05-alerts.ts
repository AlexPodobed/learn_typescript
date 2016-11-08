import {DataService} from "./04-05-dataservice";

export interface IAlerter {
    name: string;
    showMessage(): void;
}

let dataservice = new DataService();

export class Alerter implements IAlerter{
    name = 'Alex';
    showMessage(){
        console.log(this.name);
        let msg = dataservice.getMessage();
        toastr.info(`${msg}, ${this.name}`);
    }
}
