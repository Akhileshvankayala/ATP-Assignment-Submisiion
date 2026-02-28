//5.a function that recieves  3 number args and return the big array
let max=function(a,b,c){
    return (a>b && b>c)?a:(b>c)?b:c;
}
let result=max(5,6,7);
console.log(`biggest number is : ${result}`);