import { sayHello, ConsoleUtil } from "./utilities/console-util.js";
$(document).ready(function () {
    let consoleUtil = new ConsoleUtil(3, 100);
    for (let i = 0; i < 10; i++) {
        let date = consoleUtil.dateDivider(new Date(), '/');
        $("#solution-1").before(consoleUtil.lineNumber() + date + "<span class='success-util' ><b> " + sayHello("Johnny") + " </b></span>" + "<br>");
    }
    for (let i = 0; i < 10; i++) {
        let date = consoleUtil.dateDivider(new Date(), '/');
        $("#solution-1").before(consoleUtil.lineNumber() + date + "<span class='fail-util' ><b> " + sayHello("Tommy") + " </b></span>" + "<br>");
    }
});
//# sourceMappingURL=solution1.js.map