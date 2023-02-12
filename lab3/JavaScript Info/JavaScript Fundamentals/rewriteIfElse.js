let message;


let login = prompt("Write your login")

alert((login=='Employee') ? "Hello" : (login=="Director"))

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}