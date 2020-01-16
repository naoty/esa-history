const url = location.href;
const id = parseInt(url.split("/").pop());
const title = document.title.split(" - ")[0];
const timestamp = Date.now();

const post = {};
post[id] = { id, url, title, timestamp };

chrome.storage.sync.set(post);
