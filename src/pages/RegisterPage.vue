<template>
  <div class="container" dir="rtl">
    <br>
    <h1 class="title">הרשמה </h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <b-form-group id="input-group-username" label-cols-sm="3" label="מספר טלפון" label-for="username">
        <b-form-input id="username" v-model="$v.form.username.$model" type="text" :state="validateState('username')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          שדה זה הינו חובה
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          המספר אינו חוקי
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          יש למלא רק מספרים
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-firstName" label-cols-sm="3" label="שם פרטי" label-for="firstName">
        <b-form-input id="firstName" type="text" v-model="$v.form.firstName.$model" :state="validateState('firstName')"></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.firstName.required">
          שדה זה הינו חובה
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-lastName" label-cols-sm="3" label="שם משפחה" label-for="lastName">
        <b-form-input id="lastName" type="text" v-model="$v.form.lastName.$model" :state="validateState('lastName')"></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.lastName.required">
          שדה זה הינו חובה
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="reset" variant="dark">איפוס</b-button>
      <b-button type="submit" variant="primary" style="width:250px;" class="ml-5 w-75 Rbtn">הרשם</b-button>
      <div class="mt-2">
        הינך רשום לשירות?
        <router-link to="login"> לחץ כאן להתחברות</router-link>
      </div>
    </b-form>
    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>
      Register failed: {{ form.submitError }}
    </b-alert>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  helpers
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        submitError: undefined
      },
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(10)(u) && maxLength(10)(u),
        alpha: helpers.regex('alpha', /^([0-9]+)$/)
      },
      firstName:{
        required
      },
      lastName:{
        required
      },
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        console.log("enter to reg");
        const response = await this.axios.post(
          "https://asafhadadbackend.herokuapp.com/register",
          {
            username: this.form.username,
            first_name: this.form.firstName,
            last_name: this.form.lastName,
          }
        );
        this.$root.toast("Register", "Registered successfully", "success");
        this.$root.store.login(this.form.username);
        this.$router.push("/");//add login after register
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data;
      }
    },
    onRegister() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
}

.Rbtn{
   background-color: #FA8072; border-color: white
}
</style>