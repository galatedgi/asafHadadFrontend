<template>
  <div class="container" dir="rtl">
    <br>
    <h1 class="title">התחברות</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="5"
        label="מספר טלפון"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        class="mx-auto w-100"
        >Login</b-button
      >
      <div dir="rtl" class="mt-2">
        אינך רשום לשירות?
        <router-link to="register" class="link"> הרשם כאן</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
  </div>
</template>

<script>
import {eventBus} from "../main.js";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        // const response = await this.axios.post(
        //   "https://asafhadadbackend.herokuapp.com/login",
        //   {
        //     username: this.form.username,
        //   }
        // );
        // console.log(response);
        this.$root.store.login(this.form.username);
        // eventBus.$emit('fireMethod');
        // if(this.$route.name==="login"){
          this.$router.push("/");
        // }else if(this.$route.name === "main") {
        // eventBus.$emit('fireLastThree');
        // }
      } catch (err) {
        this.form.submitError = err.response.data;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}
div{
    align-items: center;
    text-align: center;
   }

   
.btn{
    background-color:teal;
  }

  .link{
    color: rgb(53, 190, 190);
  }

// .btn-primary-outline { background-color: transparent; border-color: whitesmoke; }
</style>
