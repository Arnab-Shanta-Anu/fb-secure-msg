//window.addEventListener('keyup',print,true);
document.addEventListener("keyup", print);

var inputs = [];
let x = document.querySelector('[data-text="true"]');
x.setAttribute("contenteditable", "true");

if (x.innerHTML !== "") {
  let a = Array.from(x.innerHTML);
  for (X in a) {
    inputs.push(a[X]);
  }
}

function print(e) {
  //console.log(x.innerHTML);
  //console.log(e.key);
  if (e.key === "Backspace") inputs.pop();
  if (e.key !== "Tab" || e.key !== "Delete" || e.key !== "Space")
    inputs.push(e.key);
  console.log(inputs);
}

function receiveMsg(msg, sender, sendResponse) {
  if (msg.message === "send me message to encrypt") {
    chrome.runtime.sendMessage({ msg: inputs });
  }
}

chrome.runtime.onMessage.addListener(receiveMsg);
