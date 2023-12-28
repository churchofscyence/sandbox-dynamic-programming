import {sayHello, ConsoleUtil} from "./utilities/console-util.js";

$(document).ready(function () {

    let consoleUtil = new ConsoleUtil(3, 100);

    for(let i = 0; i < 10; i++){
        $( "#solution-1" ).before(  consoleUtil.rowMessage(sayHello("Billy" ) , 'success-util' ) );
    }

    for(let i = 0; i < 10; i++){
        $( "#solution-1" ).before( consoleUtil.rowMessage(sayHello("Johnny" ) , 'fail-util' ) );
    }

});
