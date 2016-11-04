module inheretance {

    interface IEngine {
        start(callback: (startStatus: boolean, engineType: string) => void): void;
        stop(callback: (startStatus: boolean, engineType: string) => void): void;
    }

    interface IAutoOptions{
        basePrice: number;
        engine: IEngine;
        state: string;
        make: string;
        model: string;
        year: number;
    }

    interface ITrackOptions extends IAutoOptions{
        fourByFour: boolean;
        bedLength: string;
    }


    class Engine implements IEngine {
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


    class CustomEngine implements IEngine {
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
        state: string;
        year: number;
        accessoryList: string;

        constructor(options: IAutoOptions) {
            this._engine = options.engine;
            this._basePrice = options.basePrice;
            this.make = options.make;
            this.model = options.model;
            this.state = options.state;
            this.year = options.year;
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

        get engine(): IEngine {
            return this._engine;
        }

        set engine(val: IEngine) {
            if (val == undefined) throw 'Please supply an engine';
            this._engine = val;
        }
    }

    class Track extends Auto {
        fourByFour: boolean;
        bedLength: string;

        constructor(options: ITrackOptions) {
            super(options);
            this.fourByFour = options.fourByFour;
            this.bedLength = options.bedLength;
        }
    }


    let auto = new Auto({
        engine: new Engine(320, 'V10'),
        basePrice: 13400,
        state: 'Arizona',
        make: 'Ford',
        model: "Shelby",
        year: 2008
    });

    let autoEngine = <Engine>auto.engine;
    console.log(`auto hp: ${autoEngine.hoursePower}`);


    let track = new Track({
        engine: new Engine(200, 'V8'),
        basePrice: 24000,
        state: 'Italy',
        make: 'Scania',
        model: "L340",
        year: 2011,
        fourByFour: true,
        bedLength: '2'
    });


    console.log(`truck bedLength: ${track.bedLength}`);

}