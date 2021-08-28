export default [
    {
        path: "/",
        name: "home",
        component: () => import("./components/pages/Index.vue")
    },
    {
        path: "/0",
        name: "products.index",
        component: () => import("./components/Products/Index.vue")
    },
    {
        path: "/product/:slug",
        name: "products.show",
        component: () => import("./components/Products/Show.vue")
    },
    {
        path: "/shoppingCart",
        name: "products.shopping",
        component: () => import("./components/Products/ShoppingCart.vue")
    },
    {
        path: "/account/profile",
        name: "profile.index",
        component: require("./components/pages/profile/Index.vue").default
    },
    {
        path: "/account/orders",
        name: "profile.orders",
        component: require("./components/pages/profile/Orders.vue").default
    },
    {
        path: "/profile/seller",
        name: "profile.seller",
        component: require("./components/pages/profile/Seller.vue").default
    },
    {
        path: "/profile/wishlist",
        name: "profile.wishlist",
        component: require("./components/pages/profile/Wishlist.vue").default
    },
    {
        path: "/profile/settings",
        name: "profile.settings",
        component: require("./components/pages/profile/Settings.vue").default
    },
    {
        path: "/profile/address",
        name: "profile.address",
        component: require("./components/pages/profile/Address.vue").default
    },
    {
        path: "/login",
        name: "login",
        component: require("./components/pages/auth/Login.vue").default
    },
    {
        path: "/register",
        name: "register",
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
