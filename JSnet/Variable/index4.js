//global variable
var message="Hello";
function say(){
    //Local variable
    var message="Hi";
    console.log(message);

}
say();  //Hi

console.log(message);   //Hello