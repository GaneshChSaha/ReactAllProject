var a=20, b=10;
{
    let tmp=a;
    a=b;
    b=tmp;
}
console.log(tmp);   //ReferenceError