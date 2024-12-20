
    let add = document.getElementById("add")
    
    // addEventListener
    add.addEventListener("click", function(){
        
            const input = document.getElementById("input")
            input.value   
            var mainTaskContainer = document.getElementById("mainTaskContainer")

        // Check Input Impty Or Not
        if (input.value === "") {
            alert("Input Can't be Impty!")
        }
        else{
      
            // Create Task
            var taskContainer = document.createElement('div');
            taskContainer.className = 'taskContainer';

            taskContainer.innerHTML = `
            <div class="task" id="task">
            <input id="hilight" type="checkbox">
            <p id="para">${input.value}</p>
            </div>
            <div class="deleteAndEdit">
            <i id="edit" class="fa-regular fa-pen-to-square"></i>
            <i id="delete" class="fa-solid fa-trash"></i>
            </div>
            `    
                  
            input.value = ""  
            mainTaskContainer.appendChild(taskContainer)
          
            

            const search_Task = document.getElementById("search_Task")
            para = taskContainer.querySelector("#para")
                   
            search_Task.addEventListener("input", function(e){
            
              searchValues = e.target.value.toLowerCase()
              
              if (searchValues) {

                if (para.innerHTML.toLowerCase().includes(searchValues)) {
                  // mainTaskContainer.innerHTML = ""                  
                      // mainTaskContainer.appendChild(taskContainer)  
                      para.style.background = "yellow"
                }
             
              }
              else{
                // mainTaskContainer.appendChild(taskContainer)
                para.style.background = ""
              }
         
               })



            // Task is Completed 
            const completed = document.querySelector("#completed")

            completed.addEventListener("click", function(){

                  if (mainTaskContainer.innerHTML === "") {
                    alert("Task is Empty!")
                  }
                  else{
                mainTaskContainer.style.display = "none"  

                input.placeholder = "Can't Search"
                search_Task.placeholder = "Can't Search"
                clearAll.innerHTML = "Disabled"
                add.innerHTML = "Disabled"

                input.disabled = true;
                search_Task.disabled = true;
                clearAll.disabled = true;
                add.disabled = true;
                input.style.background = "#b3acac"
                search_Task.style.background = "#b3acac"
                clearAll.style.background = "#b3acac"
                add.style.background = "#b3acac"

               
                
                  }
            })



            // Display all Task 
            const all = document.querySelector("#all")
        
            all.addEventListener("click", function(){

                if (mainTaskContainer.innerHTML === "") {
                    alert("Task is Empty!")
                  }

                mainTaskContainer.style.display = "block"
                taskContainer.style.marginLeft = "20px"

                
                input.placeholder = "Add new Task"
                search_Task.placeholder = "search Task"
                add.innerHTML = "Add"
                clearAll.innerHTML = "Clear All"

                input.disabled = false;
                search_Task.disabled = false;
                clearAll.disabled = false;
                add.disabled = false;
                input.style.background = ""
                search_Task.style.background = ""
                clearAll.style.background = ""
                add.style.background = ""

            })



            // Delete All Task
            const clearAll = document.querySelector("#clearAll")
           
            clearAll.addEventListener("click", function(){

               if (mainTaskContainer.innerHTML === "") {
                    alert("Task is Empty!")
                  }
                  taskContainer.remove()
            })



             //  Delete Perticuler Task
             const Delete = taskContainer.querySelector("#delete")
             Delete.addEventListener("click", function(){
                 mainTaskContainer.removeChild(taskContainer);
                })
                
        
                
                // Edit Perticuler Task
                var flags = true
                var para
                var update
                const Edit = taskContainer.querySelector("#edit")
                Edit.addEventListener("click", function(){

               if (flags == true) {
                 para = taskContainer.querySelector("#para")
                 update = document.createElement("input")
                update.style.padding = "3px"
                update.style.font = "18px"
                update.style.fontWeight = "800" 
                update.value = para.innerHTML
                para.innerHTML = ""
                para.appendChild(update)
                flags = false
               }
               else{
                para.innerHTML = update.value
                flags = true
               }
                })



                // Hilight Task 
                var flag = true;
                var checks 
                var para
                const hilight = taskContainer.querySelector("#hilight")
                hilight.addEventListener("click", function(){
                    
                    if (flag === true) {
        
                         checks = document.createElement("del")
                         para = taskContainer.querySelector("#para")
                        checks.innerHTML = para.innerHTML
                        para.innerHTML = ""
                        para.appendChild(checks)
                        flag = false;
                    }
                    else{ 
                        para.innerHTML = checks.innerHTML
                        flag = true
                    }
                })
    
        }
        
    })


