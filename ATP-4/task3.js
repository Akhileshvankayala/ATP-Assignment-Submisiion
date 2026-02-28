// Goal: Learn object cloning & adding new property
                        
//                         You are given:
                                
//                                 let user = {
//                                   name: "Ravi",
//                                   city: "Hyderabad"
//                                 };
                        
                        
                        
//                         Tasks
                        
//                               -> Create a new object updatedUser
                              
//                               -> Copy all properties from user
                              
//                               -> Add a new property age: 25
                              
//                               -> Print both objects
                        
                        
                        
//                         ✅ Expected Output
//                               { name: "Ravi", city: "Hyderabad" }
//                               { name: "Ravi", city: "Hyderabad", age: 25 }
                        
//                         👉 Original object should remain unchanged.

let user = {
    name: "Ravi",
    city: "Hyderabad"
};

let updatedUser={...user,age:25}//copied ad added using spread operator
console.log(user)
console.log(updatedUser)