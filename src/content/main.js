const url = location.href;

if (url.match(/esa\.io\/posts\/\d+$/) === null) {
  return;
}

const id = parseInt(url.split("/").pop());
const title = document.title.split(" - ")[0];
const timestamp = Date.now();

const post = {};
post[id] = { id, url, title, timestamp };

chrome.storage.sync.set(post);
