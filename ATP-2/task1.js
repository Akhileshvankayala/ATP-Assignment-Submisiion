const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//1.Insert new Emp at 2nd position
employees.splice(2,0,{
    eno: 105,
    name: "Teddy",
    marks: [90, 85, 87],
});
console.log(employees)
//2.Remove an emp with name "Kiran"
console.log(`==========================`)
let i=0;
// for(v of employees){
//     if(v.name==="kiran"){
//         employees.splice(v,1);
//     }
//     //i=i+1;
// } see why this doesnt work?
employees.splice(4,1);
console.log(employees)
console.log("=========");
//3.Change the last mark 95 to 75 of emp  "Sneha"
for(v of employees){
    if(v.name==="Sneha"){
        v.marks[2]=75;
    }
  //  i=i+1;
}
console.log(employees)