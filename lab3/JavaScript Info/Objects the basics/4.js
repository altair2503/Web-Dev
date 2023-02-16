//1
// function camelize(str) {
//     return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
// }
//
// alert(camelize("background-color"));
// alert(camelize("list-style-image"));
// alert(camelize("-webkit-transition"));

//2
// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered );
//
// alert( arr );


//3
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
//
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]

//4
// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a);
//
// alert( arr );

//5
// function copySorted(arr) {
//     return arr.slice().sort();
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// alert( sorted );
// alert( arr );

//6
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [ john, pete, mary ];
//
// let names = users.map(item => item.name);
//
// alert( names ); // John, Pete, Mary

//7
// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let arr = [ pete, john, mary ];
//
// sortByAge(arr);
//
// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);


//8
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
//
// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);

//9
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
//
// let arr = [ john, pete, mary ];
//
// alert( getAverageAge(arr) ); // 28

