window.addEventListener('keyup',print,true);
document.addEventListener('keyup',print,true);


let x = document.querySelector('[data-text="true"]');
x.setAttribute("contenteditable","true");
x.onkeyup = print();

function print(e){
    console.log(x.innerHTML);
    console.log(e.keycode);
}
