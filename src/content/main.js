import parse from "./parse";

if (location.href.match(/esa\.io\/posts\/\d+$/) !== null) {
  const post = parse();

  const item = {};

  // unique to subdomain and post id
  item[location.href] = post;

  chrome.storage.sync.set(item);
}
