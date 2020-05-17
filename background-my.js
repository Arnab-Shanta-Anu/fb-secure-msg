function sayHello(tab) {
  if (tab.url.indexOf("facebook.com/messages") > -1) {
    //console.log("match");
    let msg = {
      message: "send me message to encrypt",
    };
    var port = chrome.runtime.connect({ name: "fb-sec-msg" });
    port.postMessage(msg);
    port.onMessage.addListener(function (msg) {
      console.log(msg.message);
    });
  }
}
chrome.browserAction.onClicked.addListener(sayHello);
