import './assets/main.css'
import "vue3-toastify/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Vue3Toasity from "vue3-toastify";
const app = createApp(App);

app.use(createPinia());
app.use(Vue3Toasity, {
  autoClose: 2000,
  position: "top-right",
});
app.mount("#app");
