export interface IDataService{
    msg: string;
    getMessage():string;
}

export class DataService implements  IDataService{
    msg: string = "Welcome to the Show!";
    getMessage(){
        return this.msg
    }

}
