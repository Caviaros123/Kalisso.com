import Logout from './components/auth/Logout'


const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/pages/Index.vue")
    },
    {
        path: "/product/:slug",
        name: "products.show",
        component: () => import("./components/Products/Show.vue")
    },
    {
        path: "/shoppingCart",
        name: "products.shopping",
        meta: {
            requiresAuth: true
        },
        component: () => import("./components/Products/ShoppingCart.vue")
    },
    {
        path: "/account/profile",
        name: "profile.index",
        meta: {
            requiresAuth: true
        },
        component: require("./components/pages/profile/Index.vue").default
    },
    {
        path: "/account/orders",
        name: "profile.orders",
        meta: {
            requiresAuth: true
        },
        component: require("./components/pages/profile/Orders.vue").default
    },
    {
        path: "/profile/seller",
        name: "profile.seller",
        meta: {
            requiresAuth: true
        },
        component: require("./components/pages/profile/Seller.vue").default
    },
    {
        path: "/profile/wishlist",
        name: "profile.wishlist",
        meta: {
            requiresAuth: true
        },
        component: require("./components/pages/profile/Wishlist.vue").default
    },
    {
        path: "/profile/settings",
        name: "profile.settings",
        meta: {
            requiresAuth: true
        },
        component: require("./components/pages/profile/Settings.vue").default
    },
    {
        path: "/profile/address",
        name: "profile.address",
        meta: {
            requiresAuth: true
        },
        component: require("./components/pages/profile/Address.vue").default
    },
    {
        path: "/login",
        name: "login",
        props: true,
        meta: {
            requiresVisitor: true
        },
        component: require("./components/pages/auth/Login.vue").default
    },
    {
        path: "/logout",
        name: "logout",
        meta: {
            requiresAuth: true
        },
        component: Logout
    },
    {
        path: "/register",
        name: "register",
        meta: {
            requiresVisitor: true
        },
        component: require("./components/pages/auth/Register.vue").default
    },
    {
        path: "/checkout",
        name: "checkout.payment",
        component: require("./components/pages/Payment.vue").default
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: require("./components/NotFound.vue").default
    }
];

export default routes;
