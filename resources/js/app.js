require('./bootstrap');

import "bootstrap";
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import NavBar from './components/partials/Navbar.vue';
import Footer from './components/partials/Footer.vue';
import Carousel from './components/partials/Carousel.vue';
import routes from './routes';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});


const store = new Vuex.Store({
    state: {
        cart: [],
        products: []
    },

    mutations: {
        setProducts(state, products) {
            state.products = products;
        },

        addProductToCart(state, product) {

            const duplicatedProductIndex = state.cart.findIndex(item => item.id === product.id);

            if (duplicatedProductIndex !== -1) {
                state.cart[duplicatedProductIndex].qty++;
                return;
            }

            product.qty = 1;
            state.cart.push(product);
        },

        removeProductToCart(state, index) {
            state.cart.splice(index, 1);
        },
    },

    actions: {
        getProducts({ commit }) {
            axios.get('/api/v1/products')
                .then((response) => {
                    commit('setProducts', response.data.data)
                })
                .catch((error) => console.error(error))
        },
    },

});

Vue.component('nav-section', NavBar);
Vue.component('carousel', Carousel);
Vue.component('footer-section', Footer);


Vue.component(
    'not-found',
    require('./components/NotFound.vue').default
);

Vue.component(
    'profile-header',
    require('./components/pages/profile/partials/_profileHeaders.vue').default
);

Vue.component(
    'profile-nav',
    require('./components/pages/profile/partials/_profileNavigation.vue').default
);

Vue.mixin({
    methods: {
        presentPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')+ ' FCFA'
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
});

const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('getProducts').then(() => {}).catch((error) => console.error(error));
        
    },
    
});