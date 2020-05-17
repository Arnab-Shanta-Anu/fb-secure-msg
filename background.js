function sayHello(tab){
    if(tab.url.indexOf('facebook.com/messages')>-1){
        console.log("match");
    }
};
chrome.browserAction.onClicked.addListener(sayHello);
