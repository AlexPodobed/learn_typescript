/*
interface IRectangle {
    height: number;
    width: number;
    getArea(): number
}

namespace Shapes {
    export class Rectangle implements IRectangle {
        constructor(public height: number,
                    public width: number) {
        }

        getArea() {
            return this.height * this.width
        }
    }
}

namespace myapp {
  function run(){
      let rect: IRectangle = new Shapes.Rectangle(10, 5);
      let message = "current area: " + rect.getArea();
      toastr.info(message);
  }


  run()
}

*/
