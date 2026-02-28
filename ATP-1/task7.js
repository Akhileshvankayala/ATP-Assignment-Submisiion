//7.write a function that receives and array & search elements as args and returns the index of 
// that search element in the array.It should return "not found" when search element not found.
function find(a,b){
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            return true;
        }
    }
    return "not found";
}
let a=[3,5,4,3,56,64]
b=4
console.log(find(a,4))