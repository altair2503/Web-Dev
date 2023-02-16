//1
// let user = {
//     name: "John",
//     surname: "Smith",
// }
//
// console.log(user)
//
// user.name = "Pete"
//
// console.log(user)
//
// delete user


//2
// function isEmpty(schedule){
//     if(Object.keys(schedule).length == 0){
//         return true
//     }
//     return false
// }
//
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false


//3

// function sumSalaries(salaries){
//     let sum = 0
//     for (let sal in salaries){
//         sum += salaries[sal]
//     }
//     return sum
// }
//
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// console.log(sumSalaries(salaries))
//
//
// console.log(sumSalaries({}))


// before the call
function multiplyNumeric(menu){
    for(let keys in menu){
        if(typeof (menu[keys]) == "number"){
            menu[keys] *= 2
         }
    }
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu)

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

console.log(menu)
