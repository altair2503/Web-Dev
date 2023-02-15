let age = prompt("Write your age")

if(age<14 || age>90){
    alert("You are allowed")
} else{
    alert("You are not allowed")
}


age = prompt("Try again")

if(!(age<14 || age>90)){
    alert("You are not allowed")
} else{
    alert("You are allowed")
}