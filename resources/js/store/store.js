import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

export const store = new Vuex.Store({
    state: {
        //int user information
        token: localStorage.getItem("access_token") || null,
        cart: [],
        user: [],
        orders: [],
        wishlist: [],
        address: [],

        //init data content
        products: [],
        categories: [],
    },
    getters: {
        loggedIn(state) {
            return state.token !== null;
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setCategory(state, categories) {
            state.categories = categories;
        },

        addProductToCart(state, product) {
            const duplicatedProductIndex = state.cart.findIndex(
                item => item.id === product.id
            );

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
        retrieveToken(state, token) {
            state.token = token;
        },
        destroyToken(state) {
            state.token = null;
        },
        retrieveUserInfo(state, user){
            state.user = user.data;
            state.orders = user.orders;
            state.wishlist = user.wishlist;
            state.address = user.address;
        }
    },
    actions: {
        
        retrieveUserInfo(context) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            return new Promise((resolve, reject) => {
                axios
                    .get("/user")
                    .then(response => {
                        const user = response.data;
                        context.commit("retrieveUserInfo", user);
                        resolve(response);
                        console.log(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/register", {
                        name: data.name,
                        email: data.email,
                        password: data.password
                    })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        destroyToken(context) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios
                        .post("/logout")
                        .then(response => {
                            localStorage.removeItem("access_token");
                            context.commit("destroyToken");
                            resolve(response);
                            // console.log(response);
                            // context.commit('addTodo', response.data)
                        })
                        .catch(error => {
                            localStorage.removeItem("access_token");
                            context.commit("destroyToken");
                            reject(error);
                        });
                });
            }
        },
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/login", {
                        email: credentials.username,
                        password: credentials.password
                    })
                    .then(response => {
                        const token = response.data.token.token;

                        localStorage.setItem("access_token", token);
                        context.commit("retrieveToken", token);
                        resolve(response);
                        // console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error);
                    });
            });
        },
        getProducts({ commit }) {
            axios
                .get("/product")
                .then(response => {
                    commit("setProducts", response.data.data);
                })
                .catch(error => console.error(error));
        },
        getCategory({ commit }) {
            axios
                .get("/category")
                .then(response => {
                    commit("setCategory", response.data.data);
                })
                .catch(error => console.error(error));
        }
    }
});
