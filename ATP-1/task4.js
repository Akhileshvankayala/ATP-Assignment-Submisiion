//find the smallest element in ,marks array
min=marks[0];
for(let i=1;i<marks.length;i++){
    if(marks[i]<min){
        min=marks[i];
    }
}
console.log(min);