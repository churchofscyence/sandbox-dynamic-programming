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
        let numSpaces = " ";
        for (let i = 0; i <= this._padding; i++) {
            numSpaces = numSpaces + " &nbsp;  ";
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
    rowMessage(message, messageType, verboseLevel) {
        let rowItem = "";
        switch (verboseLevel) {
            case 0:
                rowItem = "<span class='" + messageType + "' ><b> " + message + " </b></span>" + "<br>";
                break;
            case 1:
                rowItem = this.lineNumber() + "<span class='" + messageType + "' ><b> " + message + " </b></span>" + "<br>";
                break;
            case 2:
                let date = this.dateDivider(new Date(), '/');
                rowItem = this.lineNumber() + "<span class='info-util'>" + date + "</span>" + "<span class='" + messageType + "' ><b> " + message + " </b></span>" + "<br>";
                break;
        }
        return rowItem;
    }
}
//# sourceMappingURL=console-util.js.map