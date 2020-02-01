import parse from "./parse";

if (location.href.match(/esa\.io\/posts\/\d+$/) !== null) {
  const post = parse();

  const item = {};
  item[post.id] = post;

  chrome.storage.sync.set(item);
}
