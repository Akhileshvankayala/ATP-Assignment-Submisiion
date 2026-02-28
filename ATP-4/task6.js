// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged


const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
            address: {
                city: "Hyderabad",
                pincode: 500085
            }
    },
    items: [
        { product: "Laptop", price: 70000 },
       // {product:"mobile"}
    ]
};

let orderDeepCopy=structuredClone(order)
//let {orderId,customer:{name:{address:{city,pincode}}},items:[product,price]}=orderDeepCopy
 orderDeepCopy.customer.address.city="bang"
 orderDeepCopy.items[0].price=30000
city="bang"
price=30000
console.log(order)
console.log(orderDeepCopy)