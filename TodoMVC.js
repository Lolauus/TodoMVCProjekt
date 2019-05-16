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
<<<<<<< HEAD
            const newToDo = document.createElement("ul");
            const newList = document.createElement("li");
            newToDo.appendChild(newList);
            newToDo.textContent = toDoInput.value;
            document.body.appendChild(newToDo);
=======
            const getUl = document.querySelector("#ullist");
            const newLi = document.createElement("li");
            const newInput = document.createElement("input");
            const newLabel = document.createElement("label");
            const newButton = document.createElement("button");

            console.log("#ulList");
            console.log(getUl);
            getUl.appendChild(newLi);
            newLi.appendChild(newInput, newLabel, newButton);

            getUl.textContent = toDoInput.value;
            //document.body.appendChild(newToDo);
>>>>>>> c8c403807314aef5c376f20b0e9f9cea4edc29a2
            document.getElementById('Insertinfo').value = '';
        }
        if(document.getElementById("Insertinfo" === "")){

            alert("You must write something, bitch ")

        }

}
    