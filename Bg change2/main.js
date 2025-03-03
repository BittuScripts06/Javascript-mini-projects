let body = document.querySelector('body');
let divs = document.querySelectorAll('.box');
let h1=document.querySelector('h1')

divs.forEach(function (div) {
    div.addEventListener("click", (e) => {
        if (e.target.innerText == "Purple") {
            body.style.background = "purple";
            h1.style.color="white";
        }
        if (e.target.innerText == "Grey") {
            body.style.background = "grey";
            h1.style.color="blue";
        }
        if (e.target.innerText == "Yellow") {
            body.style.background = "yellow";
            h1.style.color="red";
        }
        if (e.target.innerText == "Green") {
            body.style.background = "green";
            h1.style.color="white";
        }
        if (e.target.innerText == "Coral") {
            body.style.background = "coral";
            h1.style.color="black";
        }
        if (e.target.innerText == "Blue") {
            body.style.background = "blue";
            h1.style.color="white";
        }

    })
})