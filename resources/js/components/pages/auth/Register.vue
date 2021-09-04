<template>
  <div>
    <section class="section-content padding-y-xs" style="min-height: 16vh">
      <!-- ============================ COMPONENT LOGIN   ================================= -->
      <div
        class="mx-auto padding-y-md"
        align="center"
        style="max-width: 380px; margin-top: 2%"
      >
        <img
          src="/images/logo.png"
          class="center-block w-50 padding-y img-fluid"
          alt="Logo Kalisso"
        />
      </div>
      <div class="card mx-auto" style="max-width: 520px; margin-top: 10px">
        <div v-if="successMessage" class="alert alert-success text-center m-2">
          {{ successMessage }}
        </div>
        <div v-if="serverError" class="alert alert-danger text-center m-2">
          {{ serverError }}
        </div>

        <article class="card-body">
          <header class="mb-4">
            <h4 class="card-title">Inscrivez-vous</h4>
          </header>

          <form action="#" @submit.prevent="validateBeforeSubmit">

            <div class="form-row">
              <div class="col form-group">
                <label>First name</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
              <!-- form-group end.// -->
              <div class="col form-group">
                <label>Last name</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
              <!-- form-group end.// -->
            </div>
            <!-- form-row end.// -->
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" placeholder="" />
              <small class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <!-- form-group end.// -->
            <div class="form-group">
              <label class="custom-control custom-radio custom-control-inline">
                <input
                  class="custom-control-input"
                  checked=""
                  type="radio"
                  name="gender"
                  value="option1"
                />
                <span class="custom-control-label"> Male </span>
              </label>
              <label class="custom-control custom-radio custom-control-inline">
                <input
                  class="custom-control-input"
                  type="radio"
                  name="gender"
                  value="option2"
                />
                <span class="custom-control-label"> Female </span>
              </label>
            </div>
            <!-- form-group end.// -->
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>City</label>
                <input type="text" class="form-control" />
              </div>
              <!-- form-group end.// -->
              <div class="form-group col-md-6">
                <label>Country</label>
                <select id="inputState" class="form-control">
                  <option>Choose...</option>
                  <option>Uzbekistan</option>
                  <option>Russia</option>
                  <option selected="">United States</option>
                  <option>India</option>
                  <option>Afganistan</option>
                </select>
              </div>
              <!-- form-group end.// -->
            </div>
            <!-- form-row.// -->
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Create password</label>
                <input class="form-control" type="password" />
              </div>
              <!-- form-group end.// -->
              <div class="form-group col-md-6">
                <label>Repeat password</label>
                <input class="form-control" type="password" />
              </div>
              <!-- form-group end.// -->
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Register
              </button>
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <label class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  checked=""
                />
                <div class="custom-control-label">
                  J'accepte les
                  <router-link to="/condition.pdf"
                    >termes et contitions</router-link
                  >
                </div>
              </label>
            </div>
            <!-- form-group end.// -->
          </form>
        </article>
        <!-- card-body.// -->
      </div>
      <!-- card .// -->
      <p class="text-center mt-4">
        Vous avez déja un compte Kalisso?
        <router-link :to="{ name: 'login' }" href="#"
          >Connectez-vous ici</router-link
        >
      </p>
      <br /><br />
      <!-- ============================ COMPONENT REGISTER  END.// ================================= -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      serverErrors: "",
      successMessage: "",
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          this.register();
        }
      });
    },
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.successMessage = "Registered Successfully!";
          this.$router.push({
            name: "login",
            params: { dataSuccessMessage: this.successMessage },
          });
          this.$toast.success({
            title: this.successMessage,
            message: "You can login here",
          });
        })
        .catch((error) => {
          this.serverErrors = Object.values(error.response.data.errors);
        });
    },
  },
};
</script>
