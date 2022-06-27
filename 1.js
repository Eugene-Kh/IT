/* (function () {
console.log(1);
setTimeout(function (){
    console.log(2);
    }, 1000);
setTimeout(function (){
    console.log(3);
    }, 0);
    console.log(4);   
}) (); */

/*console.log(+'1'+'1'+'2');
console.log('A'-'B'+'2');
console.log('A'-'B'+ 2);*/

/* var num = 2;
function func(num) {
    var num;
    console.log(num);
    num=5;
}
func(10);
console.log(num); */

function func(x) {
    console.log(typeof x);
    console.log(arguments.length);
}
func();
func('1', '2', '3');