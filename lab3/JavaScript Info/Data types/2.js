//1
// function ucFirst(name){
//     return name.charAt(0).toUpperCase() + name.slice(1)
// }
//
// alert(ucFirst("altair"))

//2
// function checkSpam(email){
//     email = email.toLowerCase()
//     if(email.includes("viagra") || email.includes("xxx")){
//         return true
//     }
//     return false
// }
//
//
// alert(checkSpam('buy ViAgRA now'))
// alert(checkSpam('free xxxxx'))
// alert(checkSpam("innocent rabbit"))

//3
// function truncate(text, size){
//     if(text.length > size-1){
//         return text.slice(0, size-1) + "..."
//     }
//     return  text
// }
//
// alert(truncate("What I'd like to tell on this topic is:", 20))
//
// alert(truncate("Hi everyone!", 20))


//4
function extractCurrencyValue(dollar){
    return parseInt(dollar.slice(1))
}

alert( extractCurrencyValue('$120') === 120 );