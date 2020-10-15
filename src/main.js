import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import routes from "./routes";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import VueScrollTo from 'vue-scrollto';
import VueCookies from 'vue-cookies';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ProgressPlugin,
  CarouselPlugin
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ProgressPlugin,
  CarouselPlugin
].forEach((x) => Vue.use(x));

axios.defaults.withCredentials = true;
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
Vue.use(Vuelidate);
Vue.use(VueScrollTo);
Vue.use(VueCookies);

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
const shared_data = {
  username: localStorage.username,
  name:"אורח",
  async login(username) {
    const response = await axios.post(
      "https://asafhadadbackend.herokuapp.com/login",
      {
        username: username,
      }
    );
    this.name=response.data.name;
    localStorage.setItem("asafhadadBarbershop", username);
    this.username = username;
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("asafhadadBarbershop");
    this.username = undefined;
  },
};
Vue.prototype.$store = shared_data;


new Vue({
  router,
  data() {
    return {
      store: shared_data
    };
  },
  methods: {
    toast(title, content, variant = null, append = true) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000
      });
    }

    // makeToast(variant = null) { this.$bvToast.toast('Toast body content', { title: `Variant ${variant || 'default'}`, variant: variant, solid: true }) }
  },
  render: (h) => h(App)
}).$mount("#app");
export const eventBus = new Vue();