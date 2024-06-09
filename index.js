let addbtn=document.getElementById("addbtn")
let overlay=document.querySelector(".i-overlay")
let popup=document.querySelector(".popup")

addbtn.addEventListener("click",function(){
    overlay.style.display="block";
    popup.style.display="block";
    
    
})

let cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none";
    popup.style.display="none";
    
})
let container=document.querySelector(".container")
let Bname=document.getElementById("Bname")
let Aname=document.getElementById("Aname")
let Bdesc=document.getElementById("Bdesc")



let add=document.getElementById("add")
add.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none";
    popup.style.display="none";
      let div=document.createElement("div")
         div.setAttribute("class","book-container")
         div.innerHTML=`<h2>${Bname.value}</h2>
               <h4>${Aname.value}</h4>
               <p>${Bdesc.value}</p>
               <button onclick="del(event)">Delete</button>`
               container.append(div)
    
})

function del(event){
      event.target.parentElement.remove()
}


