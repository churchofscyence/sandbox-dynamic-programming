import { ConsoleUtil } from "./utilities/console-util.js";
import { MessageEnum } from "./enums/message-enum.js";
import { SolutionUtil } from "./utilities/solution-util.js";
$(document).ready(function () {
    let consoleUtil = new ConsoleUtil(3, 0);
    let points = [2, 3, 1, 4];
    $("#solution-1").before(consoleUtil.rowMessage("<b> List of Points </b>", MessageEnum.Failure, 0));
    $("#solution-1").before(consoleUtil.rowMessage(" ", MessageEnum.Successful, 0));
    $("#solution-1").before(consoleUtil.rowMessage("| Index | Points |", MessageEnum.Successful, 0));
    $("#solution-1").before(consoleUtil.rowMessage("| ------- | ------ |", MessageEnum.Successful, 0));
    for (const [index, element] of points.entries()) {
        let row = " | " + index + " | " + element + " | ";
        $("#solution-1").before(consoleUtil.rowMessage(row, MessageEnum.Successful, 0));
    }
    $("#solution-1").before(consoleUtil.rowMessage(" ", MessageEnum.Successful, 0));
    $("#solution-1").before(consoleUtil.rowMessage("<b> Area Calculations </b>", MessageEnum.Failure, 0));
    $("#solution-1").before(consoleUtil.rowMessage(" ", MessageEnum.Successful, 0));
    $("#solution-1").before(consoleUtil.rowMessage("| Index |  Comparer  |  Pointer  | Height  | Width  | Area  |", MessageEnum.Successful, 0));
    $("#solution-1").before(consoleUtil.rowMessage("| ------- | ------- | ------- | ------- | ------- | ------- |", MessageEnum.Successful, 0));
    let result = SolutionUtil.generateCompareIndex(points);
    consoleUtil.padding = 2;
    for (const [index, element] of result.entries()) {
        let height = SolutionUtil.shortestHeight(points[element.comparer], points[element.pointer]);
        let width = SolutionUtil.calculateWidth(element.comparer, element.pointer);
        let area = SolutionUtil.calculateArea(width, height);
        let row = " | " + consoleUtil.paddingDigits(index) +
            " | " + consoleUtil.paddingDigits(element.comparer) +
            " | " + consoleUtil.paddingDigits(element.pointer) +
            " | " + consoleUtil.paddingDigits(height) +
            " | " + consoleUtil.paddingDigits(width) +
            " | " + consoleUtil.paddingDigits(area) +
            " | ";
        $("#solution-1").before(consoleUtil.rowMessage(row, MessageEnum.Successful, 0));
    }
});
//# sourceMappingURL=app.js.map