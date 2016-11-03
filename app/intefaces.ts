module interfacesModule {

    interface ISquereFunction {
        (x: number): number;
    }

    interface IRectangle {
        h: number,
        w?: number
    }

    interface IPerson {
        favoriteMovie: string;
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    interface ISessionEval {
        addRating: (rating: number) => void;
        calcRating: ()=> number
    }

    let squareItBasic: ISquereFunction = (num)=>num * num;

    let squereIt: (rect: IRectangle) => number;

    let rectA = {h: 7};
    let rectB = {h: 7, w: 12};


    squereIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h
        }
        return rect.h * rect.w;
    };


    let p: IPerson = {
        favoriteMovie: "",
        name: "Alex",
        age: 26,
        kids: 0,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },
        greet: function (msg: string) {
            return `${msg}, ${this.name}`
        }
    };

    function sessionEvaluator():ISessionEval{
        let ratings: number[] = [];
        let addRating = (rating: number = 5)=>{
            ratings.push(rating);
        };
        let calcRating = () => {
            let sum: number = 0;
            ratings.forEach((score)=> sum+= score);
            return sum / ratings.length;
        };

        return {
            addRating,
            calcRating
        }
    }

    let s = sessionEvaluator();

    s.addRating(5);
    s.addRating(4.8);
    s.addRating(4.7);
    s.addRating(5);
    let result = s.calcRating();

    console.log(result);

}