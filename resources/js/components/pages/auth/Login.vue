<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y-xs" style="min-height: 16vh">
      <!-- ============================ COMPONENT LOGIN   ================================= -->
      <div
        class="mx-auto padding-y-md"
        align="center"
        style="max-width: 380px; margin-top: 6%"
      >
        <router-link :to="{ name: 'home' }">
          <img
            src="/images/logo.png"
            class="center-block w-50 padding-y img-fluid"
            alt="Logo Kalisso"
          />
        </router-link>
      </div>
      <div class="card mx-auto" style="max-width: 380px; margin-top: 10px">
        <div v-if="successMessage" class="alert alert-success text-center m-2">
          {{ successMessage }}
        </div>
        <div v-if="serverError" class="alert alert-danger text-center m-2">
          {{ serverError }}
        </div>

        <div class="card-body">
          <h4 class="card-title mb-4">Connexion</h4>
          <form @submit.prevent="login">
            <!-- <a href="#" class="btn btn-facebook btn-block mb-2">
                            <i class="fab fa-facebook-f"></i> &nbsp; Sign in with
                            Facebook</a
                        >
                        <a href="#" class="btn btn-google btn-block mb-4">
                            <i class="fab fa-google"></i> &nbsp; Sign in with
                            Google</a
                        > -->
            <div class="form-group">
              <input
                id="username"
                name="username"
                class="form-control"
                placeholder="Username"
                type="text"
                v-model="username"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <input
                id="password"
                name="password"
                class="form-control"
                placeholder="Password"
                type="password"
                v-model="password"
              />
            </div>
            <!-- form-group// -->

            <div class="form-group">
              <a href="#" class="float-right">Mot de passe oublié?</a>
              <label class="float-left custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  checked=""
                />
                <div class="custom-control-label">Se souvenir de moi</div>
              </label>
            </div>
            <!-- form-group form-check .// -->
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Connexion
              </button>
            </div>
            <!-- form-group// -->
          </form>
        </div>
        <!-- card-body.// -->
      </div>
      <!-- card .// -->

      <p class="text-center mt-4">
        Vous n'avez pas de compte?
        <router-link :to="{ name: 'register' }" href="#"
          >Inscrivez-vous ici</router-link
        >
      </p>
      <br /><br />
      <!-- ============================ COMPONENT LOGIN  END.// ================================= -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    dataSuccessMessage: {
      type: String,
    },
  },
  data() {
    return {
      username: "",
      password: "",
      serverError: "",
      successMessage: this.dataSuccessMessage,
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("retrieveToken", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          // console.log(response)
          this.loading = false;
          this.$router.push({ name: "profile.index" });
        })
        .catch((error) => {
          this.loading = false;
          this.serverError = error.response.data.message;
          this.password = "";
          this.successMessage = "";
        });
    },
  },
};
</script>
