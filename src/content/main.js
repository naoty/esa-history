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

chrome.storage.sync.get(null, items => {
  const posts = Object.values(items);
  posts.sort((a, b) => (a.timestamp - b.timestamp) * -1);

  const ids = posts.slice(5).map(post => post.id.toString());
  chrome.storage.sync.remove(ids);
});
