// test data:
// const temperatures=[32,35,28,40,38,30,42]
// tasks:
// filter() temperatures above 35
// Map() to convert all temperatures from celcious to frenheit
// reduce() to calculate avterage temperatures
// Find() first temperature above 40
// findIndex of temperature 28
//c/5=f-32/9
const temperatures=[32,35,28,40,38,30,42]
let filterEx=temperatures.filter((element)=>element>35)
console.log(`temperatures above 35 are ${filterEx}`)
let mapEx=temperatures.map(element=>(element*9/5)+32)
console.log(`farenheit converted temperatures are:${mapEx}`)
let reduceEx=temperatures.reduce((accumulator,element)=>accumulator+element)
console.log(`avg temperatures are ${reduceEx}`)
let findEx=temperatures.find(element=>element>40)
console.log(`first element>40 is ${findEx}`)
let findIndexEx=temperatures.findIndex(element=>element===28)
console.log(`index of 28 is ${findIndexEx}`)