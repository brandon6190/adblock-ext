// This callback will run before a TCP connection is made.

chrome.webRequest.onBeforeRequest.addListener(
  details => {cancel: true},
  { urls: [
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.moat.com/*"
  ]},
  ["blocking"]
);