module test{
    let myFunc = function (h: number, w: number): number {
        return h + w;
    };

    let myArrowFunc = (h: number, w: number): number => h * w;

    let helloWorld: (name?: string) => void;

    helloWorld = (name) => {
        console.log(`Hello ${name || 'unknown person'}`)
    };


    helloWorld();


    let squereIt: (rect: {h:number; w?:number}) => number;

    let rectA = {h:7};
    let rectB = {h:7, w: 12};


    squereIt = function (rect) {
        if(rect.w === undefined){
            return rect.h * rect.h
        }
        return rect.h * rect.w;
    };


    console.log(squereIt(rectB))
}