 //Try and catch => Inside the Try blocks you need to write all erroable code for execution . And catch block declare error, Which types  error inside the try blocks. and need write inside the catch.

 //Note : If this code have any error then Catch will be excecuted, else not. But Finally always will be excecute as it have errors  or have not error.

 // throw => Thorw the custom messege



// syntax


try {
     // console.log("Hitesh");
     // console.log(Ineuron);
     let age = 18;
     if (!age < 18){
          throw new Error("hii")
     }
} catch (err) {
     // console.log("Ineuron not Declared");
     // console.log(err.name);
     // console.log(err.message);
}finally{
     // console.log("All is correct.");
}