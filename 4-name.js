const John = 'johnnie baba';
const peter= 'peter';

module.exports={John};
 

const data = [{name:"sudip",age:30,occupation:"Engineer"},{name:"hari",age:30,occupation:"doctor"},{name:"suupp",age:30,occupation:"Engineer"}];

data.map((person)=>{
    const {name,age,occupation}=person;
    console.log(`${name} is ${age}`)

})