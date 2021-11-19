import Vant, { Col, Image as VanImage, Lazyload, Row } from "vant";
import "vant/lib/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";

createApp(App)
  .use(i18n)
  .use(Vant)
  .use(VanImage)
  .use(Lazyload)
  .use(Col)
  .use(Row)
  .mount("#app");
