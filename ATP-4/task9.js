//i will send 10000 rupees tomorrow
let willSend=true
let promiseObj=new Promise((ful,rej)=>{
    setTimeout(()=>{
        if(willSend===true){
            ful("money sent to google pay😉")
        }else{
            rej("money lev broo😢😢")
        }
    },10000)
})
promiseObj.then((message)=>{console.log("message is:",message)})
.catch((message)=>{console.log("message is:",message)})
