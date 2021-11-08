var fs = require("fs")
var fs2 =  require("fs")
fs.readFile("1.txt","utf-8",function(err,data){
        if(err){
            console.log(err);
        }else 
        console.log(data,'1');
})
console.log('end');

var data = fs.readFileSync("1.txt","utf-8");
console.log(data,'2');

 fs2.readFile("1.txt","utf-8", async function(err,data){
    if(err){
      await  console.log(err);
    }else 
      await console.log(data,'3');
})

// exports.add = function(a,b){
//     return a+b
// }
let add = function(a,b){
    return a+b
}

exports.add = add