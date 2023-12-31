export class ConsoleUtil{

    private _padding :number = 0;
    private _lineCounter:number = 0;


    constructor(padding: number, lineCounter: number) {
        this._padding = padding;
        this._lineCounter = lineCounter;
    }

    get padding(): number {return this._padding;}
    set padding(value: number) {this._padding = value;}

    get lineCounter(): number {return this._lineCounter;}
    set lineCounter(value: number) {this._lineCounter = value;}

    paddingDigits (num: number) {

        let numSpaces = "";

        for (let i = 0; i <= this._padding; i++) {
            numSpaces= numSpaces + " ";
        }

        return numSpaces + num.toString() + numSpaces;
    }

   dateDivider(date: Date, dateDiveder: string = "-") {

        return (
            "   " + [
                date.getFullYear(),
                this.paddingDigits(date.getMonth() + 1),
                this.paddingDigits(date.getDate()),
            ].join(dateDiveder) +
            " " +
            [
                this.paddingDigits(date.getHours()),
                this.paddingDigits(date.getMinutes()),
                this.paddingDigits(date.getSeconds()),
                this.paddingDigits(date.getMilliseconds()),
            ].join(":") + "    "
        );
    }

    lineNumber(){
        this.lineCounter++;
        return "<span class='primary-util' ><b> "+this.lineCounter+" </b></span>" ;
    }

    rowMessage(message:string,messageType:string,verboseLevel:number){

        let rowItem = "";

        switch(verboseLevel){

            case 0:
                rowItem = "<span class='"+messageType +"' ><b> "+ message +" </b></span>" +"<br>";
                break;
            case 1:
                rowItem = this.lineNumber () + "<span class='"+messageType +"' ><b> "+ message +" </b></span>" +"<br>";
                break;
            case 2:
                let date = this.dateDivider(new Date(), '/');
                rowItem = this.lineNumber () +  "<span class='info-util'>" +date+ "</span>"+ "<span class='"+messageType +"' ><b> "+ message +" </b></span>" +"<br>";
                break;

        }

        return rowItem;
    }

}

export function sayHello(name:string){
    return "Hello, " + name +" !";
}




