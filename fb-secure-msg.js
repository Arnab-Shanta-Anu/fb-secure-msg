//document.body.textContent = "";

//var header = document.createElement('h1');
//header.textContent = "This page has been eaten";
//document.body.appendChild(header);

let x = document.querySelector('[data-text="true"]');
x.addEventListener('click', print);
x.addEventListener('keyup',print);

function print(){
    console.log(x.innerText);
}