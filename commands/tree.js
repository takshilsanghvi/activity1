let fs=require("fs");
let path=require("path");
function tree(srcPath){
    if(srcPath==undefined){
    srcPath=process.cwd}
    //console.log("tree implemented",srcPath);
    let content =fs.readdirSync(srcPath);
    //console.log(content);
    let parentFolderName=path.basename(srcPath);
    let completePath="└──"+parentFolderName;
    for(let i=0;i<content.length;i++){
        completePath=completePath+"\n\t"+"├──"+content[i];

    }
    console.log(completePath);
}
module.exports={
   treefn:tree
}