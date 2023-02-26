import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import router from "./router";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import VueMask from "v-mask";
import Vuelidate from "vuelidate";
import Vuex from "vuex";

Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      love: "fun",
      telephone: "",
      website: "",
    },
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    getLoggedInUser(context) {
      axios
        .get("http://localhost:3000/user")
        .then((response) => {
          context.commit("updateUser", response.data);
        })
        .catch((err) => {
          console.log("err", err);
          const userData = {
            firstName: "Sriram",
            lastName: "Kumar",
            email: "sriram@gmail.com",
            love: "fun",
            telephone: "(800) 555-5555",
            website: "https://dev.to/sriram",
          };
          context.commit("updateUser", userData);
        });
    },
    updateUserData(context, payload) {
      const userCopy = { ...context.state.user };
      userCopy[payload.property] = payload.value;
      context.commit("updateUser", userCopy);
    },
  },
});

new Vue({
  render: (h) => h(App),
  store: store,
  router,
}).$mount("#app");
