import parse from "./parse";

if (location.href.match(/esa\.io\/posts\/\d+$/) !== null) {
  const post = parse();

  const item = {};
  item[post.id] = post;

  chrome.storage.sync.set(item);

  chrome.storage.sync.get(null, items => {
    const posts = Object.values(items);
    posts.sort((a, b) => (a.timestamp - b.timestamp) * -1);

    const ids = posts.slice(5).map(post => post.id.toString());
    chrome.storage.sync.remove(ids);
  });
}
