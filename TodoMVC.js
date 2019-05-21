
    let getUlist = document.querySelector("#ullist");
    addTodo();
    function addTodo(){
        const form = document.querySelector("form");
        form.onsubmit = event => {
            event.preventDefault();
            
            let toDoInput = document.getElementById("Insertinfo"); 
            let newLi = document.createElement("li");
            newLi.setAttribute("id", "li");
            newLi.setAttribute("class","");
            let getUl = document.querySelector("#ullist");
            let newInput = document.createElement("input");
            newInput.setAttribute("type", "checkbox");
            newInput.setAttribute("id","checkbox");
            newInput.onclick = function(){checkboxfunction(this)};
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
            
    }   if(getUlist.childElementCount != 0){

        checkboxfunction();
    }
      function checkboxfunction(){
        let getCheckbox = Array.from(document.querySelectorAll("#checkbox"));
        for (const box of getCheckbox) {
            if (box.checked)
            {
                document.querySelector("#li").className = "Completed";
            }
            else{
                document.querySelector("#li").className = "";
            }
        }
          //let hrefpung =  document.querySelector(".Completed").href = "#/Completed";

        }

     

     


     
