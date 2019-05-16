// function addTodo(){
    //      var txtVal = document.getElementById('Insertinfo').nodeValue,
    //      listNode = document.getElementById('list'),
    //      liNode = document.createElement("Li"),
    //      txtNode = document.createTextNode(txtVal);
    //      liNode.appendChild(txtNode);
    //      listNode.appendChild(liNode);
    //list.innerHTML += "<li>" + input.value + <"li">
    
    // }
    addTodo();

    function addTodo(){
        const form = document.querySelector("form");
        form.onsubmit = event => {
            event.preventDefault();
        
<<<<<<< HEAD
            let toDoInput = document.getElementById("Insertinfo");
            let getUl = document.querySelector("#ullist");
            let newLi = document.createElement("li");
            let newInput = document.createElement("input");
            let newLabel = document.createElement("label");
            let newButton = document.createElement("button");
            newInput.value = toDoInput.value;

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);
            newLi.appendChild(newButton);
=======
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
>>>>>>> 0a56d2de83d16c4c20553d8b16e418ee9e17fec0

            getUl.appendChild(newLi);

            getUl.createElement(newLi);

            getUl.textContent = toDoInput.value;
            //document.body.appendChild(newToDo);
>>>>>>> c8c403807314aef5c376f20b0e9f9cea4edc29a2
            document.getElementById('Insertinfo').value = '';
        }
        if(document.getElementById("Insertinfo" === "")){

            alert("You must write something, bitch ")

        }

}
    