//write a function that receives an array as arg and return their sum
let sum=function(a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
    }
    return sum;
}
let a=[5,7,3,7,45,90]
let result=sum(a);
console.log(result)