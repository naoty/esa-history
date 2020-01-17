<template>
  <div class="container">
    <h1>esa-history</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.url" @click="open">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  font-family: "Lato", Arial, Emoji, "ヒラギノ角ゴPro W3", "HiraKakuPro-W3",
    "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro", "Hiragino Sans", "メイリオ",
    Meiryo, "ＭＳ Ｐゴシック", sans-serif;
  font-size: 15px;
  color: #3c4a60;
  min-width: 20em;
  padding: 1em;
}

h1 {
  font-size: 180%;
  font-weight: 400;
  margin: 0;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}

ul {
  margin: 0;
  padding-left: 2em;
}

li {
  margin-bottom: 1em;
}

li:last-child {
  margin-bottom: 0;
}

a {
  color: #0a9b94;
  text-decoration: none;
}
</style>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    const self = this;
    chrome.storage.sync.get(null, items => {
      const posts = Object.values(items);
      posts.sort((a, b) => (a.timestamp - b.timestamp) * -1);

      self.posts = posts;
    });
  },
  methods: {
    open(event) {
      chrome.tabs.query({ active: true }, tabs => {
        if (tabs.length == 0) {
          return;
        }

        chrome.tabs.update(tabs[0].id, { url: event.target.href });
      });
    }
  }
};
</script>
