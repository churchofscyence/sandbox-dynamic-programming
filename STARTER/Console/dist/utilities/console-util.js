export class ConsoleUtil {
    constructor(padding, lineCounter) {
        this._padding = 0;
        this._lineCounter = 0;
        this._padding = padding;
        this._lineCounter = lineCounter;
    }
    get padding() { return this._padding; }
    set padding(value) { this._padding = value; }
    get lineCounter() { return this._lineCounter; }
    set lineCounter(value) { this._lineCounter = value; }
    paddingDigits(num) {
        let numSpaces = "";
        for (let i = 0; i <= this._padding; i++) {
            numSpaces = numSpaces + " ";
        }
        return numSpaces + num.toString() + numSpaces;
    }
    dateDivider(date, dateDiveder = "-") {
        return ("   " + [
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
            ].join(":") + "    ");
    }
    lineNumber() {
        this.lineCounter++;
        return "<span class='primary-util' ><b> " + this.lineCounter + " </b></span>";
    }
}
export function sayHello(name) {
    return "Hello, " + name + " !";
}
//# sourceMappingURL=console-util.js.map