export default function() {
  const url = location.href;
  const id = parseInt(url.split("/").pop());
  const title = document.title.split(" - ")[0];
  const timestamp = Date.now();
  const author = document.querySelector(".post-author__user > a").innerText;
  const doc = title.toLowerCase();

  return { id, url, title, timestamp, author, document: doc };
}
