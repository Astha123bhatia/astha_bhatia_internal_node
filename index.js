const prompt=require('prompt-sync')({siginit:true});
const fs = require("fs"); 
const { resolve } = require("path");
const path = require("path");
const pathname = path.join(__dirname, "NumberSeparation");




const num=prompt('Enter number : ');
console.log('Number is = ');
console.log(Number(num));

if(Number(num%2==0)){
    console.log('Number is even');
    fs.writeFileSync(pathname + "/even.txt",+num+ ": evennumber ");
    try{
        const data=fs.readFileSync(pathname+'/even.txt','utf8');
        
    }
    catch(err){
        console.error(err);
    }

}
else{
    console.log('Number is odd');
    fs.writeFileSync(pathname + "/odd.txt",+num+ ": oddnumber ");
    try{
        const data=fs.readFileSync(pathname+'/odd.txt','utf8');
        
    }
    catch(err){
        console.error(err);
    }


}
