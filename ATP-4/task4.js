//💡 Exercise 3: Create a function that receives
// any number of args as arguments and return their sum using REST parameter
function findSum(...s){
    // sum=0
    // for(let element of s){
    //     sum=sum+element;
    // }
    // console.log(sum)
    sum=s.reduce((acc,element)=>element+acc)
    console.log(sum)
}
findSum(1,2,3,4,5,6,7,8,9)