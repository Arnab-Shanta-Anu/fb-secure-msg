////////////// rot-13

function shift(m) {
  var code = m.charCodeAt(0);
  console.log(code);

  let c;
  if (code >= 65 && code <= 90) c = ((code - 65 + 13) % 26) + 65;
  else if (code >= 97 && code <= 122) c = ((code - 97 + 13) % 26) + 97;
  else c = m;

  return String.fromCharCode(c);
}

function sayHello(tab) {
  if (tab.url.indexOf("facebook.com/messages") > -1) {
    //console.log("match");
    chrome.tabs.sendMessage(
      tab.id,
      (msg = {
        message: "send me message to encrypt",
      })
    );
  }
}
chrome.browserAction.onClicked.addListener(sayHello);

function receiveMsg(msg, sender, sendResponse) {
  for (m in msg.msg) {
    console.log(msg.msg[m]);

    console.log("after shift: " + shift(msg.msg[m]));
  }
}
chrome.runtime.onMessage.addListener(receiveMsg);
