//create http sever
import exp from 'express'//module already developed so no path required and it is a default export so we are taking the name as exp
const app=exp()//app is a special variable name to hold express application
//express application internally contains http server+many things
//every http requiresa port number to listen to the client requests

//use body parser middleware
app.use(exp.json())

const port=3000//set port number
app.listen(port,()=>console.log("sever listening on port numer:",port))//used to assign port number to the http server
//http server on a computer is called as a webserver,as http software is installed in my pc

//APIs-connection between the applications
//we should genrally keep server and apis in differenet files
// REpresentational State Transfer-REST API
//app.method(path,request handler)

//test data(replace this test data with database)
let users=[]
let products=[]
//create USER API
    //route to handle get request of client(http://localhost:3000/users)
    app.get('/users',(req,res)=>{
        //data is sent by the server to the client
        //send res to client
        //route handles the request and client sends the request
        res.json({message:"all users",payload:users})
        
    })
    
    //we need to write the url path as we already reached http server
    //route to handle post request of a client
    //data is sent by the client to the server
    //send res to the client

    app.get('/users/:id',(req,res)=>{
        //get user if URL param exists
        let idOfURL=Number(req.params.id);
        //find user
        let user=users.find(userObj=>userObj.id===idOfURL)
        if(user===undefined){
            res.json({message:"user not found"})
        }
        else{
            res.json({message:"user found",payload:user})
        }
        //send res
    })
    
    app.post('/users',(req,res)=>{

        //get new user from client
        let newUser=req.body
        //push user to users
        users.push(newUser)
        //send res  
        res.json({message:"user recieved"})
          
        

    })
    
    //route to handle put request of a client
    
    app.put('/users',(req,res)=>{
        //get the modified user from client
        let updateUser=req.body
        //get index of existing user
        let index=users.findIndex((userObj)=>userObj.id===updateUser.id)
        if(index===-1){
            res.json({message:"user not found"})
        }
        //update using splice
        users.splice(index,1,updateUser)
        //send response back
        res.json({message:"user updated"})
    })
    
    //route to handle delete request of a client
    
    app.delete('/users/:id',(req,res)=>{
        //get id of user from url parameter
        //url parameter values are always in string;
        let idOfURL=Number(req.params.id);
        //find index
        let index=users.findIndex((userObj)=>userObj.id===idOfURL)
        if(index===-1){
            res.json({message:"user not found"})
        }
        //delete user by index-splice
        users.splice(index,1)
        //send response
        res.json({message:"user deleted"})
    })
    //postman and rest client behaves like a client side application


//create a product API with below operations
    //create new product({productId,name,brand,price})
    //read all products
    //read all products by brand
    //update a product
    //delete a product by id

app.get('/products',(req,res)=>{
    res.json({message:"all products are listed below,",payload:products})
})

app.get('/products/:name',(req,res)=>{
    let nameOfURL=req.params.name
    console.log(nameOfURL)
    let productOfBrand=products.filter(productObj=>productObj.name===nameOfURL)
    console.log(productOfBrand)
    if(productOfBrand.length===0){
        res.json({message:"product is not there"})
    }
    else{
        res.json({message:"product of that brand is found",payload:productOfBrand})
    }
})

app.post('/products',(req,res)=>{
    //get the info from the client
    let product=req.body
    //push to the products
    products.push(product)
    //send response
    res.json({message:"product is posted"})
})

app.put('/products',(req,res)=>{
    let product=req.body
    //find the index of the body
    let index=products.findIndex(productObj=>productObj.id===product.id)
    //replace using splice
    products.splice(index,1,product)
    //send response
    res.json({message:"product details updated"})
})

app.delete('/products/:id',(req,res)=>{
    let productId=Number(req.params.id)
    let index=products.findIndex(productObj=>productObj.id===productId)
    if(index==-1){
        res.json({message:"product id not found"})
    }
    products.splice(index,1)
    res.json({message:"product id is deleted"}) 

})




