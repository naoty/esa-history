<template>
  <div class="container">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.url" @click="open">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  font-size: 16px;
  min-width: 20em;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  border-bottom: 1px solid #aaa;
}

a {
  display: block;
  padding: 0.25em;
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
    chrome.storage.sync.get(null, posts => {
      self.posts = Object.values(posts);
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
