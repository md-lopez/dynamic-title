var input = prompt("Enter Anything", "Final Project")
        var selector = document.querySelector(".orig")
        selector.innerText = input
        var title = document.querySelector("body")
        var split_title = title.innerText.split('')
        var arr = []

      


      // Splits all letters and puts it inside an array
          split_title.forEach(function(node, index){
          title.innerHTML += "<span class = js-item" + [index] + ">"+ split_title[index] + "</span>"
          arr[index] = index
        
        })
      //------------------------------

      // Adds event listeners to all classes and sets them to inline blocks
          arr.forEach(function(node, index){
          var edit = document.querySelector(".js-item"+[index])

   
          
         edit.style.display = "inline-block"
           
          if (split_title[index] == " "){
            console.log("there is a space")
            edit.innerHTML = "&nbsp"
          }

            else {
                edit.addEventListener('mouseout', mouseOut)
                edit.addEventListener('mouseover', mouseOver)
                

                function mouseOver() {
               
                  edit.style.color = "blue"
                  edit.style.transition = "200ms"
                  edit.style.transform = "scale(1.5) rotate(20deg)"
                  
                }
                function mouseOut() {
                  edit.style.color = "black"
                  edit.style.transform = "scale(1) rotate(0deg)"
                }
                console.log("no space")
              }

        })
      //------------------------------
        

                  // ALL FUNCTIONS HERE

      // Removes original h1 element
          function myFunction(){
          const element = document.querySelector(".orig");
          element.remove()
          }

         myFunction()
        
      // ---------------------------


          


        




