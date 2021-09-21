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
import HomeHeader from "./components/pages/home/Header.vue";
import VueCountdownTimer from "vuejs-countdown-timer";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import BootstrapVue from "bootstrap-vue";
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize
} from "vee-validate";
import fr from "vee-validate/dist/locale/fr.json";
import * as rules from "vee-validate/dist/rules";
import OtpInput from "@bachdgvn/vue-otp-input";
import CountdownTimer from "vuejs-countdown-timer";
import firebase from "firebase";
import 'firebase/auth'

// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

localize("fr", fr);

Vue.use(CountdownTimer);
Vue.use(BootstrapVue);
Vue.use(VueTelInput);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueCountdownTimer);
Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyCc2BBFgf_osbxj-5-E_KQKEV4SuATFuRI",
    authDomain: "kalisso-298808.firebaseapp.com",
    projectId: "kalisso-298808",
    storageBucket: "kalisso-298808.appspot.com",
    messagingSenderId: "84460790081",
    appId: "1:84460790081:web:5fd6866e8ca6be405601c0",
    measurementId: "G-GYX9DFZG8J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const router = new VueRouter({
    mode: "history",
    base:process.env.BASE_URL,
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

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.component("nav-section", NavBar);
Vue.component("carousel", Carousel);
Vue.component("footer-section", Footer);
Vue.component("home-header-and-carousel", HomeHeader);
Vue.component("v-otp-input", OtpInput);

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
        store
            .dispatch("getHomeBanner")
            .then(() => {})
            .catch(error => console.error(error));
        if (store.getters.loggedIn) {
            store
                .dispatch("retrieveUserInfo")
                .then(() => {})
                .catch(error => console.error(error));
        }
    }
});
