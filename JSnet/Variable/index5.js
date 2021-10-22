//global variable
var message="Hello";
function say(){
    //Local variable
    message ='Hi';
    console.log(message);

}
say();  //Hi
console.log(message);   //Hi