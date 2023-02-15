//1. let age = prompt("Write your age")

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?')
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?')
// }

// checkAge(age)

//2. function min(a, b){
//     if(a > b) return b
//     return a
// }
//
// alert(min(2, 5))
// alert(min(3, -1))
// alert(min(1, 1))


//3.
function pow(a, n){
    for(let i=1; i<n; i++){
        a*=a
    }
    return a
}

alert(pow(3, 2))
alert(pow(3, 3))
alert(pow(1, 100))