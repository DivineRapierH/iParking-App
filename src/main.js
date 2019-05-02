import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  Button,
  Layout,
  Slider,
  Menu,
  Icon,
  Drawer,
  Row,
  Col,
  Form,
  TimePicker,
  Modal,
  Divider,
  List,
  Avatar,
  Input,
  Select
} from "ant-design-vue";

Vue.config.productionTip = false;

// Vue.use();
Vue.use(Button);
Vue.use(Layout);
Vue.use(Slider);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(TimePicker);
Vue.use(Modal);
Vue.use(Divider);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Input);
Vue.use(Select);

Vue.prototype.$form = Form;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
