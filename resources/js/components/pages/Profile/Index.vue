<template>
  <div>
    <nav-section></nav-section>
    <profile-header></profile-header>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <div class="row">
           <aside class="col-md-3">
                <nav class="list-group">
                    <button class="list-group-item" :class="activeTab === 'ProfileUser' ? 'active' :''" @click="activeTab = 'ProfileUser' " > Aperçu du compte  </button>
                    <button class="list-group-item" :class="activeTab === 'ProfileAddress' ? 'active' :''" @click="activeTab = 'ProfileAddress' " > Mon Adresse </button>
                    <button class="list-group-item" :class="activeTab === 'ProfileOrders' ? 'active' :''" @click="activeTab = 'ProfileOrders' " href="#"> Mes Commandes </button>
                    <button class="list-group-item" :class="activeTab === 'ProfileWishlist' ? 'active' :''" @click="activeTab = 'ProfileWishlist' " href="#"> Mes Favoris </button>
                    <button class="list-group-item" :class="activeTab === 'ProfileSeller' ? 'active' :''" @click="activeTab = 'ProfileSeller' " href="#"> Mes Produits </button>
                    <button class="list-group-item" :class="activeTab === 'ProfileSettings' ? 'active' :''" @click="activeTab = 'ProfileSettings' " href="#"> Paramètres </button>
                    <router-link :to="{ name: 'logout'}" class="list-group-item" href="#"> Déconnexion </router-link>
                </nav>
            </aside> <!-- col.// -->

          <component :is='activeTab'></component>
          <!-- col.// -->
        </div>
      </div>
      <!-- container .//  -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
    <footer-section></footer-section>
  </div>
</template>

<script>
import ProfileAddress from "./Address";
import ProfileOrders from "./Orders";
import ProfileSeller from "./Seller";
import ProfileSettings from "./Settings";
import ProfileWishlist from "./Wishlist";
import ProfileUser from "./Profile";

export default {
  name: "ProfileIndex",
  props: {
    setNewTab: {
      type: String,
    },
  },
  components: {
    ProfileAddress,
    ProfileOrders,
    ProfileSeller,
    ProfileSettings,
    ProfileWishlist,
    ProfileUser,
  },
  created(){
    eventBus.$on('setNewTab', (data)=> this.activeTab = data)
  },
  data() {
      return {
          activeTab: this.setNewTab || 'ProfileUser'
      }
  },
  methods: {
    changeActiveTab(data){
        this.activeTab = data
    }
  },
  setup() {
    if(this.tab){
      this.activeTab = this.setNewTab
      console.log(props.tab)
    }
  }
};
</script>

<style scoped>
    .list-group, button{
        text-align: left;
    }
</style>
