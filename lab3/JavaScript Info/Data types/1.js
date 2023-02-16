//1
// let a = prompt("Write value for a")
// let b = prompt("Write value for b")
//
// alert(+a + +b)


//2
//alert( Math.round(6.35 * 10)/10 )

//3
// let input
// while(!isFinite(input)){
//     input = prompt("Write a number")
// }
//
//
// if(input == null || input == ''){
//     alert("Read: null")
// } else alert(`Read: ${input}`)

//4
// function random(min, max){
//     return (max - min) * Math.random() + min
// }
//
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525
//
// while (true){
//     alert( random(0, 6) );
// }


//5
function randomInteger(min, max){
    return Math.trunc((max - min) * Math.random() + min)
}


alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5