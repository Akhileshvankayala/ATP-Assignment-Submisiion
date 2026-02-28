// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP Sent Successfully")
a=10;
let intervalId=setInterval(()=>{
    console.log(a)
    a--;
    if(a===0){
        console.log("you can send the otp")
        clearInterval(intervalId)
    }
},1000)