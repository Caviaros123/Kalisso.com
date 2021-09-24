<template>
   
<!-- ========================= SECTION MAIN  ========================= -->
  <section class="section-intro padding-y-sm pt-0 pb-3">
    <div class="container p-0 m-0">
      <!-- ==============  COMPONENT SLIDER  BOOTSTRAP ============  -->
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
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Précédent</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel1_indicator"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Suivant</span>
        </a>
      </div>
      <!-- ============ COMPONENT SLIDER BOOTSTRAP end.// ===========  .// -->
    </div>
    <!-- container end.// -->
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