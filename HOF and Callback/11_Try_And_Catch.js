 //Try and catch => Inside the Try blocks you need to write all erroable code for execution . And catch block declare error, Which types  error inside the try blocks. and need write inside the catch.

 //Note : If this code have any error then Catch will be excecuted, else not. But Finally always will be excecute as it have errors  or have not error.

 // throw => Thorw the custom messege



// syntax
try{
    let firstName = "Pradip";
    console.log(firstName + " " + lastName )
    
     let i = 10;
     if (i==10){
          throw "Ref"
     }
    
}catch(err){
     // console.log(err.name);
     console.log( err.message);
}finally{
     console.log("I AM FINALLY")     

}