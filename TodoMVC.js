// function addTodo(){
    //      var txtVal = document.getElementById('Insertinfo').nodeValue,
    //      listNode = document.getElementById('list'),
    //      liNode = document.createElement("Li"),
    //      txtNode = document.createTextNode(txtVal);
    //      liNode.appendChild(txtNode);
    //      listNode.appendChild(liNode);
    
    // }
    addTodo();

    function addTodo(){
        const form = document.querySelector("form");
        form.onsubmit = event => {
            event.preventDefault();
        
            const toDoInput = document.getElementById("Insertinfo");
            const newToDo = document.createElement("ul");
            newToDo.textContent = toDoInput.value;
            document.body.appendChild(newToDo);
            document.getElementById('Insertinfo').value = '';
        }

}
    