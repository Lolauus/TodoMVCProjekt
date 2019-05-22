
    let getUlist = document.querySelector("#ullist");
    addTodo();
    function addTodo(){
        const form = document.querySelector("form");
        form.onsubmit = event => {
            event.preventDefault();
            
            let toDoInput = document.getElementById("Insertinfo"); 
            let newLi = document.createElement("li");
            newLi.setAttribute("class","");
            let getUl = document.querySelector("#ullist");
            //Create a new input
            let newInput = document.createElement("input");
            newInput.setAttribute("type","checkbox");
            newInput.classList.add("checkbox");
            newInput.onchange = checkboxfunction;

            //Create new label and button
            let newLabel = document.createElement("label");
            let newButton = document.createElement("img");
            newButton.setAttribute("id","RemoveButton");
            newButton.setAttribute("src", "Cross.png");

            let span = document.getElementById("span");
            //let imagedd = document.getElementById("labelchecked");
            //Create the checkbox-image for the
            let imagelabel = document.createElement("label");
            imagelabel.setAttribute("id","imagechecked");
            let imagecheck = document.createElement('img');
            imagecheck.setAttribute("id","checkedimage");
            imagecheck.setAttribute("src", 'checked.png');
            let section = document.querySelector("section");

            let div = document.createElement("div");
            div.setAttribute("id", "imagediv");

            // document.getElementById("labelchecked").onclick = function(){

            //      var checkbox = document.getElementById('labelchecked');
            //      checkbox.checked = !checkbox.checked;

            //  }
                div.onclick = () =>{

                        div.style.backgroundImage = "url('checked.png')";
                }
            
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
                section.appendChild(newInput);
                newLi.appendChild(imagelabel);
                newLi.appendChild(newLabel);
                newLi.appendChild(newButton);
                getUl.appendChild(newLi);
                newLi.appendChild(div);
                span.textContent = getUl.childElementCount + " " + "items left";
                document.createElement("newLi");
                document.getElementById('Insertinfo').value = '';
            }
         
            else{
                return false;
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
    }
     

     


     
