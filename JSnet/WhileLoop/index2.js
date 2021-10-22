let rands=[];
let count=0;
const size=5;

while(count<size){
    rands.push(Math.round(Math.random() * 10));
    count++;
    console.log('The current size of the array is ' + count);
}
console.log(rands);



/* O/P
The current size of the array is 1
The current size of the array is 2
The current size of the array is 3
The current size of the array is 4
The current size of the array is 5
[ 3, 4, 5, 10, 8 ]
*/