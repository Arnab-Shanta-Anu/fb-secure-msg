function sayHello(tab){
    if(tab.url.indexOf('facebook.com/messages') >-1 ){
        //console.log("match");
        let msg = {
            message: "send me message to encrypt"
        }
        chrome.tabs.sendMessage(tab.id, msg);
    }
};
chrome.browserAction.onClicked.addListener(sayHello);
