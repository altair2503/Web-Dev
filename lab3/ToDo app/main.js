let addButton = document.querySelector('#add_button');
let toDoContainer = document.querySelector('#to_do_container');
let input = document.querySelector('#input_field');

addButton.addEventListener('click', () => {
    let block = `<div class="deal" id="before_checked">
                <input type="checkbox" style="width: 30px" id="check">
                <td id="doing">${input.value}</td>
                <button id="delete_btn">delete</button>
            </div>`

    if(input.value.length != 0) {
        toDoContainer.insertAdjacentHTML("beforeEnd", block);
        input.value = ""
    }
});

toDoContainer.addEventListener('click', (e) => {
   console.log(e.composedPath()[0]);
   if(e.composedPath()[0].id == "delete_btn"){
       e.composedPath()[1].remove();
   }
});

