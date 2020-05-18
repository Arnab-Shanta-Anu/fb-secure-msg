var inputs = [];
let x = document.querySelector('[data-text="true"]');
x.setAttribute("contenteditable", "true");

function fn() {
  if (x.innerHTML !== "") {
    let a = Array.from(x.innerHTML);
    for (X of a) {
      inputs.push(X);
    }
  }
  console.log("fired once: " + inputs);
}
window.addEventListener("load", fn);

function print(e) {
  if (e.key === "Backspace") inputs.pop();
  else if (e.key !== "Tab" || e.key !== "Delete" || e.key !== "Space")
    inputs.push(e.key);
  console.log(inputs);
}
document.addEventListener("keyup", print);

function receiveMsg(msg, sender, sendResponse) {
  if (msg.message === "send me message to encrypt") {
    chrome.runtime.sendMessage({ msg: inputs });
  }
}

chrome.runtime.onMessage.addListener(receiveMsg);
