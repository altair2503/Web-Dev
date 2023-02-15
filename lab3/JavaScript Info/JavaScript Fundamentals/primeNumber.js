let n = prompt("Write N number")

for(let i=2; i<=n; i++){{
    let check = true
    for(let j=2; j<i; j++){
        if(i%j===0){
            check = false
            break
        }
    }
    if(check == true){
        alert(i)
    }
}}