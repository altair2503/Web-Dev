let begin = prompt("Write the login")

if(begin == "Admin"){
    let password = prompt("Password?")
    if(password=="TheMaster"){
        alert("Welcome!")
    } else if (password == null || password == ""){
        alert("Canceled")
    } else{
        alert("wrong password")
    }
} else if(begin == null || begin == ""){
    alert("Canceled")
} else{
    alert("I don't know you")
}