//1
// let styles = ["Jazz", "Blues"]
//
// styles.push("Rock-n-Roll")
//
// styles[Math.floor(styles.length/2)] = "Classics"
//
// console.log(styles.shift())
//
// styles.unshift("Rap", "Reggae")
//
// console.log(styles)
//


//2
// let arr = []
//
// function sumInput(){
//     let a = prompt("Write a value")
//     while (true){
//         a = +prompt("Write a value")
//         if(isFinite(a) && a != ''){
//             arr.push(a)
//         } else{
//             break
//         }
//     }
//     let sum = 0
//     for(let i=0; i<arr.length; i++) sum += arr[i]
//     return sum
// }
//
// alert(sumInput())

//3
// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)


function getMaxSubSum(a){
    let mx = 0
    for(let i=0; i<a.length; i++){
        let sum = 0
        for(let j=i; j<a.length; j++){
            sum += a[j]
            mx = Math.max(mx, sum)
        }

    }
    return mx
}

alert(getMaxSubSum([-1, -2, -3]))
alert(getMaxSubSum([-1, 2, 3, -9]))
alert(getMaxSubSum([2, -1, 2, 3, -9]))
alert(getMaxSubSum([-1, 2, 3, -9, 11]))
alert(getMaxSubSum([-2, -1, 1, 2]))
alert(getMaxSubSum([100, -9, 2, -3, 5]))
alert(getMaxSubSum([1, 2, 3]))

