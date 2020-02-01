export default function() {
  const url = location.href;
  const id = parseInt(url.split("/").pop());
  const title = document.title.split(" - ")[0];
  const timestamp = Date.now();

  return { id, url, title, timestamp };
}
