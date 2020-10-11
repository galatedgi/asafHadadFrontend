<template>
  <div id="app" dir="rtl">
    <!-- <link href='https://fonts.googleapis.com/css?family=Cute Font' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Cormorant Infant' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Acme' rel='stylesheet'> -->
    <link href="https://fonts.googleapis.com/css2?family=Piazzolla:ital@1&display=swap" rel="stylesheet">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="navbar-nav mr-auto">
         <!-- <b-nav-item :to="{ name: 'main' }" class="nav-item active">
          Asaf Hadad Barbershop
        </b-nav-item> -->
        <b-nav-text >
        <a>שלום {{this.$root.store.name}}</a>
        </b-nav-text >
        <b-nav-item :to="{ name: 'main' }" class="nav-item active">
          Asaf Hadad Barbershop
        </b-nav-item>
        <a v-if="$root.store.username != undefined" href @click="Logout" tag="button" class="btn btn-outline-light">התנתק</a>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { eventBus } from "./main.js";
export default {
  name: "App",
  async mounted(){
    if(localStorage.getItem("asafhadadBarbershop") != undefined){
     this.$root.store.login(localStorage.getItem("asafhadadBarbershop"));
    }
  },
  methods: {
    async Logout() {
      this.$root.store.logout();
      await this.axios.post(`https://asafhadadbackend.herokuapp.com/Logout`);
      if (this.$route.name === "main") {
        this.$forceUpdate;
      } else {
        this.$router.push("/");
      }
    },
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

  // font-family: 'Cormorant Infant';
  font-family: 'Piazzolla', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:whitesmoke;
  min-height: 100vh;
  // background-color: rgb(2, 0, 129);
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
    background-color: #000000 !important;
 }

//  #guest{
//    font-size: initial;
//    position: relative;
//    top: 5px;
//    margin-right: 5px;
//    color: white;
//  }

</style>
