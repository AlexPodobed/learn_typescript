class Engine {
    constructor(public horsepower: number,
                public engineType: string) {
    }
}

class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
        this._engine = engine;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) throw 'Supply an Engine!';

        this._engine = value;
    }

    start(): void {
        console.log(`car engine started ${this._engine.engineType} with ${this.engine.horsepower} HP`)
    }

}

let engine = new Engine(300, 'V8');
let car = new Car(engine);

car.start();
