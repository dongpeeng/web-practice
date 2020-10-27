//  let a=666;
//  let fn1=() =>{
//     console.log('hello');
// }
// export{a,fn1};
class   Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
sleep(){
    console.log(this.name+' is sleeping');
}
}

export default Person;