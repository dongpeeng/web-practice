let adds = require('./2.fs')
  let s  =   adds.add(2,3)
   console.log(s,'//fs');

const {  add,minus,Person } = require('./modules');
  let a  =   add(2,3)
  let b  =   minus(3,2)
  let p1 = new Person('lisi',23)
   console.log(a,b,'//modules');
   console.log(p1,'//p1');
   p1.sayHello()
   p1.sayYes()
   console.log(p1.school);