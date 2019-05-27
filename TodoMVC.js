
    let getUlist = document.querySelector("#ullist");
    let counter = document.getElementsByClassName("Completed");
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
            newInput.setAttribute("id","check");
            newInput.classList.add("checkbox");
            newInput.onchange = checkboxfunction;
            let newLabel = document.createElement("label");
            let RemoveButton = document.createElement("img");
            RemoveButton.setAttribute("id","RemoveButton");
            RemoveButton.setAttribute("src", "Cross.png");
            let span = document.getElementById("span");
            let imagelabel = document.createElement("label");
            imagelabel.setAttribute("id","imagechecked");
            let imagecheck = document.createElement('img');
            imagecheck.setAttribute("id","checkedimage");
            imagecheck.setAttribute("src", 'checked.png');
            let div = document.createElement("div");
            div.setAttribute("class", "imagediv");
            

                
                div.onclick = () =>{
                       div.parentElement.classList.toggle("Completed");
                    if(div.parentElement.classList.contains ("Completed")){

                        newInput.checked = true;
                        span.textContent = getUl.children.length-counter.length + " " + "items left";
                    }
                    else{
                            
                            span.textContent = getUl.children.length - counter.length + " " + "items left";
                            newInput.checked = false;
                    }
                                  
                }
                RemoveButton.onclick = () => {

                newLi.remove("selected");
                span.textContent = getUl.children.length + " " + "items left";

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
                newLi.appendChild(imagelabel);
                newLi.appendChild(newLabel);
                newLi.appendChild(RemoveButton);
                getUl.appendChild(newLi);
                newLi.appendChild(div);
                span.textContent = getUl.children.length + " " + "items left";
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
        let href =  document.querySelector(".CompletedList").href = "#/Completed";
        for (const box of getCheckbox) {

            box.parentElement.classList.toggle("Completed", box.checked);
        }
       
}
    }   
    // function for Clear completed button
          let clearCompleted = document.querySelector(".Clear")
          let Completed = document.getElementsByClassName("Completed");;
              clearCompleted.onclick = () => {
               
            while (Completed.length > 0) {
                    Completed[length].remove();
                  }            
           if(getUlist.textContent == ""){
        
             footer.style.display = "none";
           
          }
    }                   
        
        // function for show all button
        let Alltodos = document.querySelector(".All")
        Alltodos.onclick = () =>{
            
         if(Alltodos = ("Selected")){
           let Alltodos = document.querySelector(".All")
            Alltodos.style.borderColor = "rgba(175, 47, 47, 0.1)";
            document.querySelector(".Active").style.borderColor = "transparent";
            document.querySelector(".Completedlist").style.borderColor = "transparent";
        }

           getUlist.childNodes.forEach(li => {
               if(!li.classList.contains("Completed")){
                   li.style.display = "block";
               }
              else if(li.classList.contains("Completed")){

               li.style.display = "block";


              }
           });
   }
        // function for active button 
        let active = document.querySelector(".Active")
        active.onclick = () =>{
            if(active = ("Selected")){
                let active = document.querySelector(".Active")
                 active.style.borderColor = "rgba(175, 47, 47, 0.1)";
                 document.querySelector(".All").style.borderColor = "transparent";
                 document.querySelector(".Completedlist").style.borderColor = "transparent";
             }
             getUlist.childNodes.forEach(li => {
            if(!li.classList.contains("Completed")){
                li.style.display = "block";
            }
            else if(li.classList.contains("Completed")){

                li.style.display = "none";
            }
            
           
        });
        } 
    
         // function for Completed button  
        let Completedlist = document.querySelector(".Completedlist")
        Completedlist.onclick = () =>{

            if(Completed = ("Selected")){
                let Completedlist = document.querySelector(".Completedlist")
                Completedlist.style.borderColor = "rgba(175, 47, 47, 0.1)";
                 document.querySelector(".Active").style.borderColor = "transparent";
                 document.querySelector(".All").style.borderColor = "transparent";
             }

            getUlist.childNodes.forEach(li => {
                if(!li.classList.contains("Completed")){
                    li.style.display = "none";
                }
               else if(li.classList.contains("Completed")){

                li.style.display = "block";

               
               }
            });
      
 }
 //Markera/Avmarkera alla
 uncheckcheck.onclick = () =>{
    let getCheckbox = Array.from(document.querySelectorAll(".checkbox"));
    if(getCheckbox.some(x=> x.checked)){

        for(i =0; i <getCheckbox.length; i++){

            getCheckbox[i].checked = false
            getCheckbox[i].closest("li").classList.remove("Completed");
            
        }
        span.textContent = getUlist.children.length + counter.length + " " + "items left";
    }
    else{
        for(i =0; i <getCheckbox.length; i++){

            getCheckbox[i].checked = true
            getCheckbox[i].closest("li").classList.add("Completed");
        }
        span.textContent = getUlist.children.length - counter.length + " " + "items left";
    }
}
   

    





        


     


     
