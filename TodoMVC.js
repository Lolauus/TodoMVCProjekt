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
        
            let toDoInput = document.getElementById("Insertinfo");
            
            let getUl = document.querySelector("#ullist");
            let newLi = document.createElement("li");
            let newInput = document.createElement("input");
            newInput.setAttribute("type", "checkbox");
            newInput.setAttribute("id","todolist");
            let newLabel = document.createElement("label");
            let newButton = document.createElement("button");
            newButton.setAttribute("id", "RemoveButton");
            let span = document.getElementById("span");


            newButton.onclick = () => {

                newLi.remove("selected");
                span.textContent = getUl.childElementCount + " " + "items left";

                if(getUl.textContent == "")
                {
                    let footer = document.getElementById("footer");
                    footer.style.display = "none";
                   
                }

            }
            newLabel.textContent = toDoInput.value;
            if (newLabel.textContent != "")
            {
                let footer = document.getElementById("footer");
                footer.style.display = "block";


                newLi.appendChild(newInput);
                newLi.appendChild(newLabel);
                newLi.appendChild(newButton);
                getUl.appendChild(newLi);
                span.textContent = getUl.childElementCount + " " + "items left";
                document.createElement("newLi");
                document.getElementById('Insertinfo').value = '';
                
                
            }
            
            else{
                return false;
            }


            //document.body.appendChild(newToDo);
        }

}
