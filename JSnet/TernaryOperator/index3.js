function foo(bar){
    bar=typeof(bar)!=='undefined'? bar:10;
    console.log(bar);
}
foo();      //10
foo(20);    //20