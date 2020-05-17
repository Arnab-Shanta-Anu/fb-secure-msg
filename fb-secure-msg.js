
let x = document.querySelector('[data-text="true"]');
x.setAttribute("contenteditable","true");
x.onkeyup = print();

function print(){
    console.log(x.innerHTML);
}
