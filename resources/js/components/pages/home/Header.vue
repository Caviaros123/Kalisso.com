<template>
    <!-- ========================= SECTION MAIN  ========================= -->
    <section class="section-main padding-y">
      <main class="card">
        <div class="card-body">
          <div class="row">
            <aside class="col-lg col-md-3 flex-lg-grow-0">
              <nav class="nav-home-aside">
                <h6 class="title-category">
                  Catégories<i class="d-md-none icon fa fa-chevron-down"></i>
                </h6>
                <ul class="menu-category">
                  <li
                    v-for="(category, index) in categories.slice(0, 7)"
                    :key="index"
                  >
                    <a href="#"> {{ category.name }} </a>
                  </li>

                  <li class="has-submenu">
                    <a href="#">+Plus de catégories</a>
                    <ul class="submenu">
                      <li
                        v-for="(category, index) in categories.slice(7, 30)"
                        :key="index"
                      >
                        <a href="#">{{ category.name }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
            <!-- col.// -->
            <div class="col-md-9 col-xl-7 col-lg-7">
              <!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
              <div
                id="carousel1_indicator"
                class="slider-home-banner carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel1_indicator"
                    :data-slide-to="bannerCount"
                    class="active"
                    v-for="bannerCount in homeBanner.length" :key="bannerCount.id"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item" v-bind:class="banner.id === 1 ? 'active' : '' " v-for="banner in homeBanner" :key="banner.id">
                    <img :src="banner.image" :alt="banner.name" />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carousel1_indicator"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Précédent</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carousel1_indicator"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Suivant</span>
                </a>
              </div>
              <!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->
            </div>
            <!-- col.// -->
            <div class="col-md d-none d-lg-block flex-grow-1">
              <aside class="special-home-right">
                <h6 class="bg-blue text-center text-white mb-0 p-2">
                  Catégories populaires
                </h6>

                <div
                  class="card-banner border-bottom"
                  v-for="(category, index) in categories.slice(0, 3)"
                  :key="index"
                >
                  <div class="py-3" style="width: 80%">
                    <h6 class="card-title">{{ category.name }}</h6>
                    <a href="#" class="btn btn-secondary btn-sm">
                      Parcourir
                    </a>
                  </div>
                  <img
                    :src="globalUrl + category.cat_img"
                    height="40"
                    class="img-bg "
                  />
                </div>

              </aside>
            </div>
            <!-- col.// -->
          </div>
          <!-- row.// -->
        </div>
        <!-- card-body.// -->
      </main>
      <!-- card.// -->
    </section>
    <!-- ========================= SECTION MAIN END// ========================= -->

</template>

<script>
export default {
  name: "homeHeader",
  data() {
      return {
          globalUrl: 'https://kalisso.com/storage/',
      }
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    homeBanner() {
      console.log("DATA IS"+this.$store.state.homeBanner);
      return this.$store.state.homeBanner;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>