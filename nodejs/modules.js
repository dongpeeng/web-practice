// exports.add = function(a,b){
//     return a+b
// }
// exports.minus = function(a,b){
//     return a-b
// }

const add = function(a,b){
    return a+b
}

 const minus = function(a,b){
    return a-b
}
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.sex={
            old:age,
            young:this.age
        }
    }
    sex2={
        old:33,
        young:18
    }
}
Person.prototype.sayHello = function(){
    console.log("sayHello");
}
Person.prototype.school = {
    teacher:'zhangsan',
    age:222
}
Person.prototype.sayYes = ()=>{
    console.log('yes');
}

module.exports = {
    add,
    minus,
    Person
}