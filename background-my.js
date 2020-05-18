function shift(m) {
  var code = m.charCodeAt;
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
    //shift(m);
    console.log(m);
  }
}
chrome.runtime.onMessage.addListener(receiveMsg);
