// window.addEventListener('keyup',print,true);
// document.addEventListener('keyup',print,true);

// var inputs = [];
// let x = document.querySelector('[data-text="true"]');
// x.setAttribute("contenteditable","true");
// x.onkeyup = print();

// function print(e){
//     console.log(x.innerHTML);
//     console.log(e.key||"nothing");
//     if(e.key !== "Backspace"||
//         e.key !== "Delete")
//         inputs.push(e.key);
//     console.log(inputs);
// }
//function receiveMsg(msg, sender, sendResponse){
//    console.log(msg.message);
//}
//chrome.runtime.onMessage.addListener(receiveMsg);

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name == "fb-sec-msg");
  port.onMessage.addListener(function (msg) {
    console.log(msg.message);
    port.postMessage({ message: "hello ag" });
  });
});
