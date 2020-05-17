

let x = document.querySelector('[data-text="true"]');

function print(){
    console.log(x.innerHTML);
    x.innerHTML = "Hello";
    console.log(x);
}

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(msg,sender,response){
//     console.log(msg.message);
//     print();
// };
