module inheretance {

    interface IEngine{
        start(
            callback: (startStatus: boolean, engineType: string) => void
        ):void;
        stop(
            callback: (startStatus: boolean, engineType: string) => void
        ):void;
    }


    class Engine implements IEngine{
        constructor(public hoursePower: number,
                    public engineType: string) {
        }

        start(callback: (startStatus: boolean, engineType: string)=>void) {
            setTimeout(()=> {
                callback(true, this.engineType)
            }, 1e3)
        }

        stop(callback: (stopStatus: boolean, engineType: string)=>void) {
            setTimeout(()=> {
                callback(true, this.engineType)
            }, 1e3)
        }
    }


    class CustomEngine implements IEngine{
        start(callback: (startStatus: boolean, engineType: string)=>void) {
            setTimeout(()=> {
                callback(true, "custom engine")
            }, 1e3)
        }

        stop(callback: (stopStatus: boolean, engineType: string)=>void) {
            setTimeout(()=> {
                callback(true, "custom engine")
            }, 1e3)
        }
    }

    class Accessory {
        constructor(public accessoryNumber: number, public title: string) {
        }
    }

    class Auto {
        private _basePrice: number;
        private _engine: IEngine;
        make: string;
        model: string;
        accessoryList: string;

        constructor(basePrice: number, engine: IEngine, make: string, model: string) {
            this._engine = engine;
            this._basePrice = basePrice;
            this.make = make;
            this.model = model;
        }

        calculateTotal(): number {
            let taxRate = 0.8;
            return this._basePrice + (taxRate * this._basePrice);
        }

        addAccessories(...accessories: Accessory[]) {
            this.accessoryList = '';
            for (let i = 0; i < accessories.length; i++) {
                let ac = accessories[i];
                this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />'
            }
        }

        getAccessoryList(): string {
            return this.accessoryList;
        }

        get basePrice(): number {
            return this._basePrice;
        }

        set basePrice(val: number) {
            if (val <= 0) throw 'price must be >= 0';
            this._basePrice = val;
        }

        get engine():IEngine{
            return this._engine;
        }

        set engine(val:IEngine){
            if(val == undefined) throw 'Please supply an engine';
            this._engine = val;
        }
    }

    class Track extends Auto{
        fourByFour: boolean;
        bedLength: string;

        constructor(basePrice: number, engine: IEngine, make: string, model: string, bedLength:string, fourByFour:boolean){
            super(basePrice, engine, make, model);
            this.fourByFour = fourByFour;
            this.bedLength = bedLength;
        }
    }


    let track = new Track(40000, new Engine(300, 'v8'), 'Chevy', 'Silverado', '3', true);

    // console.log(track.engine.engineType);
    // console.log(track.engine.hoursePower);
    console.log(track.bedLength);
    // cast Engine class here to get access to engineType and horsePower
    let myEngine = <Engine>track.engine;
    console.log(myEngine.engineType);
    console.log(myEngine.hoursePower);
    console.log(track.calculateTotal());


    track.addAccessories(new Accessory(1234, 'sunroof'), new Accessory(331,'package'));
    track.engine.start((status:boolean, engineType:string)=> {
        alert(`${engineType} was started`);
    })



    // case with custom engine

    let tracCustom = new Track(40000, new CustomEngine(), 'chevy', 'silverado', '4', true);


    tracCustom.engine.start((status:boolean, engineType:string) => {
        alert(status + ' '+engineType)
    })


    /* class Auto{
     engine: Engine;
     constructor(engine:Engine){
     this.engine = engine;
     }
     }

     class Truck extends Auto{
     fourByFour: boolean;

     constructor(engine:Engine, fourByFour: boolean){
     super(engine);

     this.fourByFour = fourByFour;
     }
     }


     let engine2 = new Engine(300, 'V8');
     let track = new Truck(engine2, true)*/
    ;
}