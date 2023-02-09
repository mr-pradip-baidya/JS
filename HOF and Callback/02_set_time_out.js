
// 01  Set Time Out

// Syntax : setTimeOut ( functionName , delay ) ;

setTimeout (()=>{
    console.log(`Five Second Delay`)
},5000);

// or

function setTime() {
    console.log(`This is a timer There have 3 second of delay`)
}

setTimeout(setTime,3000)


