<template>
  <div dir="rtl">
    <b-container>
      <b-row>
        <b-col v-if="$root.store.username">
          <b-button  @click="addturn()" >הזמנת תור </b-button>
          <br>
           <b-button >התורים שלי </b-button>
          <br>
           <b-button >צור קשר </b-button>
          <br>
           <b-button >איך מגיעים </b-button>
          <br>
        </b-col>
          <b-col v-else>
            <b-button  @click="Login()">התחבר </b-button>
            <br>
            <b-button  @click="Register()">הרשם </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  name: "Main",
  methods: {
    Login(){
      this.$router.push("/login");
    },
     Register(){
      this.$router.push("/register");
    },
     addturn(){
      this.$router.push("/addturn");
    }
  }
};
</script>

<style lang="scss" scoped>

.randomBtn {
  left: 15%;
  position: relative;
  height: auto;
  width: auto;
  background-size: auto;
  background-color: #F08080;
  border-color: white;
}
</style>
