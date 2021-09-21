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

        <div class="card-body" align="center">
          <i class="fa text-danger fa-sms fa-3x"></i>
          <h5 class="card-title">Vérification du Téléphone</h5>
          <small>Nous avons envoyez un code par SMS au </small>
          <h5 class="mb-4">{{ phone }}</h5>
          <form @submit.stop.prevent="verify">
            <div class="form-group">
              <v-otp-input
                inputClasses="otp-input"
                :numInputs="6"
                :isInputNum="true"
                separator=" "
                :shouldAutoFocus="true"
                @on-complete="handleOnComplete"
                @on-change="handleOnChange"
              />
              <div id="recaptcha-container"></div>
            </div>
            <!-- form-group form-check .// -->
            <!-- <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Verifier
              </button>
            </div> -->
            <div class="small mt-4">
              <!-- Renvoi du code de vérification dans:
              <span class="text-primary b h6">01:00s</span> -->

              <vue-countdown-timer
                :key="componentKey"
                @start_callback="startCallBack('event started')"
                @end_callback="endCallBack('event ended')"
                :start-time="endAt"
                :end-time="endAt"
                :interval="1000"
                :start-label="'Renvoi du code de vérification dans'"
                :end-label="'Until end:'"
                label-position="begin"
                :end-text="'Renvoyer le code'"
                :day-txt="''"
                :hour-txt="''"
                :minutes-txt="''"
                :seconds-txt="'s'"
              >
                <template slot="start-label" slot-scope="scope">
                  <span
                    style="color: red"
                    v-if="
                      scope.props.startLabel !== '' &&
                      scope.props.tips &&
                      scope.props.labelPosition === 'begin'
                    "
                    >{{ scope.props.startLabel }}:</span
                  >
                  <span
                    style="color: blue"
                    v-if="
                      scope.props.endLabel !== '' &&
                      !scope.props.tips &&
                      scope.props.labelPosition === 'begin'
                    "
                    >{{ scope.props.endLabel }}:</span
                  >
                </template>
                <template slot="countdown" slot-scope="scope">
                  <!-- <span>{{ scope.props.days }}</span
                  ><i>{{ scope.props.dayTxt }}</i>
                  <span>{{ scope.props.hours }}</span
                  ><i>{{ scope.props.hourTxt }}</i>
                  <span>{{ scope.props.minutes }}</span
                  ><i>{{ scope.props.minutesTxt }}</i> -->
                  <span class="b h7">{{ scope.props.seconds }}</span
                  ><i>{{ scope.props.secondsTxt }}</i>
                </template>

                <template slot="end-label" slot-scope="scope">
                  <span
                    class="mt-4"
                    style="color: red"
                    v-if="
                      scope.props.startLabel !== '' &&
                      scope.props.tips &&
                      scope.props.labelPosition === 'end'
                    "
                    >{{ scope.props.startLabel }}:</span
                  >
                  <span
                    style="color: blue"
                    v-if="
                      scope.props.endLabel !== '' &&
                      !scope.props.tips &&
                      scope.props.labelPosition === 'end'
                    "
                    >{{ scope.props.endLabel }}:</span
                  >
                </template>

                <template slot="end-text" slot-scope="scope">
                  <a
                    href="#"
                    @click="resendOtpCode()"
                    class="btn-link text-danger"
                    ><i class="fa fa-redo"></i> {{ scope.props.endText }}
                  </a>
                  <!-- <a href="#" @click="startAt = new Date().getTime()" class="border p-2 btn btn-danger solid border-warning mt-4 rounded"> <i class="fa fa-paper-plane fa-1x"></i></a> -->
                  <!-- <i class="fa fa-refresh" aria-hidden="true"></i> -->
                </template>
              </vue-countdown-timer>
              <div
                id="recaptcha-container"
                style="background-color: #1b1a1a; width: 300px; margin: auto"
              ></div>
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
import firebase from "firebase/app";
import 'firebase/auth';  

export default {
  props: {
    phoneNumber: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      phone: this.phoneNumber || "+242064272080",
      endAt: new Date().getTime() + 60000,
      startAt: new Date().getTime(),
      serverError: "",
      successMessage: "",
      componentKey: 0,

      //phone init
      confirmationResult: null,
      otp: null,
      smsSent: false,
      recaptchaVerifier: null,
      recaptchaWidgetId: null,
      confirmResult: null,
      appVerifier: "",
      coderesult: null,
    };
  },
  setup() {
    this.sendOtp();
  },
  mounted() {
    firebase.auth().useDeviceLanguage();
    // this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier({
    //   size: "invisible",
    //   callback: (response) => {
    //     // reCAPTCHA solved, allow signInWithPhoneNumber.
    //     console.log(response);
    //   },
    // });

    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": function () {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
    //
    this.appVerifier = window.recaptchaVerifier;
  },
  methods: {
    resendOtpCode() {
      (this.startAt = new Date().getTime()),
        (this.endAt = new Date().getTime() + 60000),
        (this.componentKey += 1);
    },
    startCallBack: function (x) {
      console.log(x);
    },
    endCallBack: function (x) {
      console.log(x);
    },
    handleOnComplete(value) {
      this.verifyOtp(value);
      console.log("OTP completed: ", value);
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
    sendOtp() {
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      this.recaptchaVerifier.render().then((widgetId) => {
        this.recaptchaWidgetId = widgetId;
      });

      if (this.phoneNumber) {
        //
        let countryCode = "+242064272080"; //congo
        let phone = this.phoneNumber || countryCode;
        firebase
          .auth()
          .signInWithPhoneNumber(phone, this.recaptchaVerifier)
          .then((confirmationResult) => {
            this.confirmResult = confirmationResult;
            console.log(this.confirmResult);
            alert("Sms Sent!");
            this.smsSent = true;
          })
          .catch((error) => {
            console.log("Sms not sent", error.message);
          });
      }
    },
    //
    verifyOtp(value) {
      if (this.phoneNumber) {
        let code = value;

        this.confirmResult
          .confirm(code)
          .then((result) => {
            alert("Registeration Successfull!", result);
            this.gotonext();
            var user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  created() {
    // this.initReCaptcha();
  },
};
</script>

<style lang="css" >
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 8px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%) !important;
  text-align: center;
}
.otp-input:focus-visible {
  border-color: crimson;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.error {
  border: 1px solid red !important;
}
</style>