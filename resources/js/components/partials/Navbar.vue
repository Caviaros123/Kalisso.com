<template>
  <div>
    <b class="screen-overlay"></b>

    <header class="section-header">
      <section class="header-main border-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-3 col-md-12">
              <router-link :to="{ name: 'home' }" class="brand-wrap">
                <img class="logo" src="/images/logo.png" />
              </router-link>
              <!-- brand-wrap.// -->
            </div>
            <div class="col-xl-6 col-lg-5 col-md-6">
              <form
                action=""
                class="search-header"
                @submit.prevent="searchPage"
              >
                <div class="input-group w-100">
                  <select
                    class="custom-select border-right"
                    width="200"
                    name="category_name"
                  >
                    <option selected hidden>Catégories</option>
                    <option
                      value="codex"
                      v-for="category in categories"
                      :key="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <input
                    type="text"
                    class="form-control"
                    v-model="q"
                    placeholder="Qu'est ce qui vous ferais plaisir?"
                  />

                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="fa fa-search"></i> Recherche
                    </button>
                  </div>
                </div>
              </form>
              <!-- search-wrap .end// -->
            </div>
            <!-- col.// -->
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="widgets-wrap float-md-right">
                <div class="widget-header mr-3">
                  <router-link
                    class="widget-view"
                    :to="{ name: 'products.shopping' }"
                  >
                    <div class="icon-area">
                      <i class="fa fa-shopping-cart"></i>
                      <span
                        class="notify"
                        v-text="this.$store.state.cart.length"
                      ></span>
                    </div>
                    <small class="text"> Panier </small>
                  </router-link>
                </div>
                <div class="widget-header mr-3">
                  <router-link
                    class="widget-view"
                    :to="{ name: 'profile.orders' }"
                  >
                    <div class="icon-area">
                      <i class="fa fa-store"></i>
                      <span
                        class="notify"
                        v-text="this.$store.state.orders.length"
                      ></span>
                    </div>
                    <small class="text"> Commandes </small>
                  </router-link>
                </div>
                <div class="widget-header mr-3">
                  <router-link
                    class="widget-view"
                    :to="{ name: 'profile.wishlist' }"
                  >
                    <div class="icon-area">
                      <i class="fa fa-heart"></i>
                      <span
                        class="notify"
                        v-text="this.$store.state.wishlist.length"
                      ></span>
                    </div>
                    <small class="text"> Favoris </small>
                  </router-link>
                </div>
                <div class="widget-header mr-3">
                  <router-link
                    class="widget-view"
                    :to="{ name: 'profile.index' }"
                  >
                    <div class="icon-area">
                      <i class="fa fa-user"></i>
                    </div>
                    <small class="text"> Mon Kalisso </small>
                  </router-link>
                </div>
              </div>
              <!-- widgets-wrap.// -->
            </div>
            <!-- col.// -->
          </div>
          <!-- row.// -->
        </div>
        <!-- container.// -->
      </section>
      <!-- header-main .// -->

      <nav class="navbar navbar-main navbar-expand-lg border-bottom">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  <i class="fa fa-bars text-muted mr-2"></i> Toutes nos
                  catégories
                </a>
                <div class="dropdown-menu dropdown-large">
                  <nav class="row">
                    <div class="col-6" v-if="categories.slice(0, 10)">
                      <router-link
                        :to="{ name: '' }"
                        v-for="(category, index) in categories.slice(0, 10)"
                        :key="index"
                        >{{ category.name }}</router-link
                      >
                    </div>
                    <div class="col-6" v-if="categories.slice(10, 25)">
                      <router-link
                        v-for="(category, index) in categories.slice(10, 25)"
                        :key="index"
                        :to="{ name: 'category.show', params: index }"
                        >{{ category.name }}</router-link
                      >

                      <a href="/category" target="_blank"
                        >Voir toutes les catégories
                        <i class="fa fa-caret-right pl-3"></i
                      ></a>
                    </div>
                  </nav>
                  <!--  row end .// -->
                </div>
                <!--  dropdown-menu dropdown-large end.// -->
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'sold' }"
                  >Soldes</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'travel' }"
                  >Voyages</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'store.all' }"
                  >Nos boutiques</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'sell' }"
                  >Vendez avec nous</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'contact' }"
                  >Contactez-nous</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about' }"
                  >A propos</router-link
                >
              </li>
            </ul>
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.kalisso.android.app"
                  >Ouvrir dans l'App</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active btn btn-danger"
                  href="http://example.com"
                  data-toggle="dropdown"
                  ><i class="fas fa-map-marker-alt"></i> {{ location }}</a
                >
                <div class="dropdown-menu dropdown-menu-right">
                  <a
                    class="dropdown-item"
                    @click="location = 'Brazzaville'"
                    href="#"
                    >Brazzaville</a
                  >
                  <a
                    class="dropdown-item"
                    @click="location = 'Pointe-Noire'"
                    href="#"
                    >Pointe-Noire</a
                  >
                  <a
                    class="dropdown-item"
                    @click="location = 'Dolisie'"
                    href="#"
                    >Dolisie</a
                  >
                  <a class="dropdown-item" @click="location = 'Nkayi'" href="#"
                    >Nkayi</a
                  >
                </div>
              </li>
            </ul>
          </div>
          <!-- collapse .// -->
        </div>
        <!-- container .// -->
      </nav>
    </header>
    <!-- section-header.// -->
  </div>
</template>

<script>
import "vue-instant/dist/vue-instant.css";
import VueInstant from "vue-instant/dist/vue-instant.common";

export default {
  data() {
    return {
      q: "",
      location: "Votre ville",
    };
  },
  components: {
    VueInstant,
  },
  computed: {
    // currentRouteName() {
    //   let resolved = this.$router.resolve("404");
    //   if (resolved.route.name === "404") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },

    searchPage() {
      this.$router.push({ name: "search", props: "q" });
    },
    categories() {
      return this.$store.state.categories;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>
