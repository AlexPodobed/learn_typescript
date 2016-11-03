module demo{
    let data:any;
    let info:any;
    let doSmng :any = function (arg:any) {
        return arg;
    };

    let x = doSmng({});

    // primitives
    let age : number = 35;
    let score: number = 11;
    let rating = 100;

    let hasData: boolean = true;
    let isReady = true;

    let isBald = function () {
        return 'yes'
    };


    let hasAir = isBald();

    let firstName: string = "Alex";
    let lastName: string = "Podobed";

    // str arr
    function getArrayLength(x:string[]){
        let len:number = x.length;
        return len;
    }

    let names:string[] = [firstName, lastName];

    getArrayLength(names);

    // null
    let guitarSales:any = null;
    let animal:any = null;
    let orderDate: Date = null;

    //undefined
    let company:any = undefined;



    // objects

    let points:Object = {
        test: 1,
        x:10,
        y:20
    };

    let rectangle = {
        h:10,
        w:10,
        caclArea: function () {
            return this.h * this.w
        }
    };

    rectangle.caclArea();



    let squeareIt1 = function (x:number) {
        return x * x;
    };

    squeareIt1(2);

    let squeareIt = function (rect:{h:number; w?:number}) {
        if(rect.w === undefined){
            return rect.h * rect.h
        }
        return rect.h * rect.w;
    };

    let sq1:number = squeareIt({h:10});
    let sq2:number = squeareIt({h:10, w:20});


    // functions
}