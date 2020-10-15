<template>
  <div id="app" dir="rtl">
    <!-- <link href='https://fonts.googleapis.com/css?family=Cute Font' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Cormorant Infant' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Acme' rel='stylesheet'> -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Piazzolla:ital@1&display=swap" rel="stylesheet"> -->
   <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">

    <b-navbar type="dark" variant="dark" sticky>
      <b-navbar-nav class="ml-auto">
         <!-- <b-nav-item :to="{ name: 'main' }" class="nav-item active">
          Asaf Hadad Barbershop
        </b-nav-item> -->
        <!-- <b-nav-text >
        <a>שלום {{this.$root.store.name}}</a>
        </b-nav-text > -->
        <b-dropdown :text="this.$root.store.name" variant="info" split-variant="info">
          <b-dropdown-item v-if="this.$root.store.name!='אורח'">הזמנת תור</b-dropdown-item>
          <b-dropdown-item v-if="this.$root.store.name!='אורח'">התורים שלי</b-dropdown-item>
          <b-dropdown-item v-if="this.$root.store.name=='אורח'">התחבר</b-dropdown-item>
            <b-dropdown-item v-if="this.$root.store.name=='אורח'">הרשם</b-dropdown-item>
            <b-dropdown-item>מי אני?</b-dropdown-item>
            <b-dropdown-item>איך מגיעים?</b-dropdown-item>
            <b-dropdown-item href="#" v-scroll-to="'#contactus'">צור קשר</b-dropdown-item>
           <b-dropdown-item @click="Logout()">התנתק</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'main' }" class="nav-item active">
          <b-nav-text style="font-size: 25px; font-family: 'Amatic SC', cursive; ">
          Asaf Hadad Barbershop
          </b-nav-text>
        </b-nav-item>
        <!-- <a v-if="$root.store.username != undefined" href @click="Logout" tag="button" class="btn btn-outline-light">התנתק</a> -->
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { eventBus } from "./main.js";
export default {
  name: "App",
  // data(){
  //   return{
  //     userName: this.$root.store.name
  //   }
  // },
  async mounted(){
    if(localStorage.getItem("asafhadadBarbershop") != undefined){
     this.$root.store.login(localStorage.getItem("asafhadadBarbershop"));
    }
  },
  methods: {
    async Logout() {
      try{
          this.$root.store.logout();
          await this.axios.post(`https://asafhadadbackend.herokuapp.com/Logout`);
          if (this.$route.name === "main") {
              this.$forceUpdate;
          } else {
          this.$router.push("/");
         }
      }catch(err){
           console.log(err);
          this.$router.push("/error");
      }
    },
    // openCpll(){
    //   document.getElementById("contact_us").data.$route.show=true;
    // }
  }
};
</script>

<style lang="scss">


// .a, a:hover, a:focus, a:active , a:visited, a:link{
//       text-decoration: inherit;
//       color: inherit; 
//       all: unset;
//  }

#app {
  //     font-family: 'Acme';font-size: 22px;

 
  // font-family: 'Piazzolla', serif;
  
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:whitesmoke;
  min-height: 100vh;
  // background-color:black;
   background:url("./assets/Background3.jpg")no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

.b-nav-text
{
    position: left; ;
    width: 100%;
    left: 5000px;
    right: 5000px;
    text-align: center;
    margin:0 auto;
}

// .b-dropdown{
//   color: teal !important;
// }

// #nav {
//       font-family: 'Acme';font-size: 22px;
// 	padding: 10px 10px;
//   color: whitesmoke;
// }

// #nav a.router-link-exact-active {
//   color: whitesmoke;
// }

// #userName {
//   right: 1%;
//   color: whitesmoke;
//   position: absolute;
//   font-size: 200%;
//   top: 30%;
//   font-family: 'Acme';font-size: 22px;

// }


// #dd * {
//   background-color: black;
// }


// .notification .badge {
//   position: relative;
//   left:-3%;
//   top: -15%;
//   padding: 2px 5px;
//   border-radius: 50%;
//   background-color: red;
//   color: white;
//   font-size: 13px;
// }

// #btnDrop {
//   border-color: #e7e7e7;
//   color: black;
//   border-width: medium;
//   background-color: none;
// }
// #btnDrop :hover {
//   background: #e7e7e7;
// }

// .circular--portrait { 
//   position: relative; 
//   width: 200px; 
//   height: 200px; 
//   overflow: hidden; 
//   border-radius: 50%;} 

//    .circular--portrait img { 
//      width: 100%;
//     height: auto; 
//     }

//     .profile{
//        width: 40px;
//     height: 40px; 
//     }

 .navbar.navbar-dark.bg-dark{
    background-color: black !important;
 }

//  #guest{
//    font-size: initial;
//    position: relative;
//    top: 5px;
//    margin-right: 5px;
//    color: white;
//  }

</style>
