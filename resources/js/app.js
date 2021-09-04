require("./bootstrap");

import "bootstrap";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import NavBar from "./components/partials/Navbar.vue";
import Footer from "./components/partials/Footer.vue";
import Carousel from "./components/partials/Carousel.vue";
import routes from "./routes";
import { store } from "./store/store";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: "login"
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: "home"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

Vue.component("nav-section", NavBar);
Vue.component("carousel", Carousel);
Vue.component("footer-section", Footer);

Vue.component("not-found", require("./components/NotFound.vue").default);

Vue.component(
    "profile-header",
    require("./components/pages/profile/partials/_profileHeaders.vue").default
);

Vue.component(
    "profile-nav",
    require("./components/pages/profile/partials/_profileNavigation.vue")
        .default
);

Vue.mixin({
    methods: {
        presentPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",") + " FCFA";
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }
});

const app = new Vue({
    router,
    store,
    el: "#app",
    created() {
        store
            .dispatch("getProducts")
            .then(() => {})
            .catch(error => console.error(error));
        store
            .dispatch("getCategory")
            .then(() => {})
            .catch(error => console.error(error));
    }
});
