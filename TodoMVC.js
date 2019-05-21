
    let getUlist = document.querySelector("#ullist");
    addTodo();
    function addTodo(){
        const form = document.querySelector("form");
        form.onsubmit = event => {
            event.preventDefault();
            
            let toDoInput = document.getElementById("Insertinfo"); 
            let newLi = document.createElement("li");
            //newLi.setAttribute("id", "li");
            newLi.setAttribute("class","");
            let getUl = document.querySelector("#ullist");
            let newInput = document.createElement("input");
            newInput.setAttribute("type", "checkbox");
            newInput.classList.add("checkbox");
            newInput.onchange = checkboxfunction;
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

        }
            
    }   
        if(getUlist.childElementCount != 0){
        checkboxfunction();
    }
      function checkboxfunction(){
        let getCheckbox = Array.from(document.querySelectorAll(".checkbox"));
        let href =  document.querySelector(".Completed").href = "#/Completed";
        for (const box of getCheckbox) {

            box.parentElement.classList.toggle("Completed", box.checked);
        }
        // i funktionen vill vi koppla klassen Completed till url #/Completed, alltså
        // på knapptryck av Completed (möjligtvis en egen funktion?) så vill vi kalla på alla klasserna med namnet Completed(?)

}
        function showCompleted(){
            let getCompleted = document.querySelectorAll(".Completed");
            
        }

     

     


     
