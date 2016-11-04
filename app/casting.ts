class Calculator{
    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private output: HTMLSpanElement;

    constructor(xId:string, yId:string, outputId:string){
        // casting is some shit inside "<{cast-type}>"
        // extra definding the type of element
        // in example of document.getElementById - returns HTMLElement type
        // but we need more specific and it's can be done via `casting`

        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);

        this.wireEvents();
    }


    wireEvents(){
        document.getElementById('Add').addEventListener('click', event => {

        })
    }
}