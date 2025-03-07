let input =document.querySelector("input");
let name=document.querySelector(".name-tag");
name.innerText=localStorage.getItem("myName");

input.addEventListener("input",(e)=>{
localStorage.setItem("myName", e.target.value);
name.innerText=localStorage.getItem("myName");
})

