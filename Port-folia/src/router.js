import Vue from "vue";
import Router from "vue-router";

import Top from "./views/Top.vue";
import About from "./views/About.vue";
// import Languages from "./views/Languages.vue";
import Research from "./views/Research.vue";
import Activity from "./views/Activity.vue";
// import Contacts from "./views/Contacts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "top",
      component: Top
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    // {
    //   path: "/languages",
    //   name: "languages",
    //   component: Languages
    // },
    {
      path: "/research",
      name: "research",
      component: Research
    },
    {
      path: "/activity",
      name: "activity",
      component: Activity
    }
    // {
    //   path: "/contacts",
    //   name: "contacts",
    //   component: Contacts
    // }
  ]
});
