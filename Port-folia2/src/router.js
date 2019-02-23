import Vue from "vue";
import Router from "vue-router";

import Top from "./views/Top.vue";
import About from "./views/About.vue";
import Languages from "./views/Languages.vue";
import External_activities from "./views/External_activities.vue";
import Research from "./views/Research.vue";
import Contacts from "./views/Contacts.vue";

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
    {
      path: "/languages",
      name: "languages",
      component: Languages
    },
    {
      path: "/external_activities",
      name: "external_activities",
      component: External_activities
    },
    {
      path: "/research",
      name: "research",
      component: Research
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }
  ]
});
