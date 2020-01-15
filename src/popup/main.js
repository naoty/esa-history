import Vue from "vue";
import Root from "./components/Root";

import "normalize.css";

new Vue({
  el: "#vue-root",
  render: h => h(Root)
});
