//input
let inputArr=process.argv.slice(2);
let helpObj=require("./commands/help");
let treeObj=require("./commands/tree");
let organizeObj=require("./commands/organize");
//console.log(inputArr);
let cmd=inputArr[0];
switch(cmd){
    case "help":
        console.log("Help implemented");
        break;
    case"tree":
        treeObj.treefn(inputArr[1]);
        console.log("tree implemented",inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeFn(inputArr[1]);
        console.log("organize implemented",inputArr[1]);
        break;
    default:
        console.log(`Wrong Command.
        Kindly enter help to see all the commands`);
        break;
}