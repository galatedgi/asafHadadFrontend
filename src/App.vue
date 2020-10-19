<template>
  <div id="app" dir="rtl">
    <!-- <link href='https://fonts.googleapis.com/css?family=Cute Font' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Cormorant Infant' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Acme' rel='stylesheet'> -->
    <link href="https://fonts.googleapis.com/css?family=Exo+2:200i" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">

    <b-navbar type="dark" variant="dark" sticky >
      <b-navbar-nav class="ml-auto">
         <!-- <b-nav-item :to="{ name: 'main' }" class="nav-item active">
          Asaf Hadad Barbershop
        </b-nav-item> -->
        <!-- <b-nav-text >
        <a>שלום {{this.$root.store.name}}</a>
        </b-nav-text > -->
        <b-dropdown id="drop" :text="this.$root.store.name" variant="light" split-variant="danger" right >
          <b-dropdown-item href="#/">
            <!-- <img id="s-icon" src="./assets/logo.png"> -->
            <b-dropdown-text> <img id="s-icon" src="./assets/logo.png"> דף הבית</b-dropdown-text>
            
            <!-- דף הבית -->
          </b-dropdown-item>
          <b-dropdown-item v-b-toggle.add_turn v-scroll-to="'#addturn'" @click="homePage()" v-if="this.$root.store.name!='אורח'">
            <!-- <img id="s-icon" src="./assets/logo.png"> -->
             <b-dropdown-text> <img id="s-icon" src="./assets/logo.png"> הזמנת תור</b-dropdown-text>
          </b-dropdown-item>
          <b-dropdown-item v-b-toggle.queue_manager href="#" v-scroll-to="'#queuemanager'" @click="homePage()" v-if="this.$root.store.name!='אורח'">
              <!-- <img id="s-icon" src="./assets/logo.png"> -->
              <b-dropdown-text> <img id="s-icon" src="./assets/logo.png">התורים שלי</b-dropdown-text>
            </b-dropdown-item>
          <b-dropdown-item href="#/login" v-if="this.$root.store.name=='אורח'">
            <!-- <img id="s-icon" src="./assets/logo.png"> -->
            <b-dropdown-text> <img id="s-icon" src="./assets/logo.png">התחבר</b-dropdown-text>
          </b-dropdown-item>
            <b-dropdown-item href="#/register" v-if="this.$root.store.name=='אורח'">
              <!-- <img id="s-icon" src="./assets/logo.png"> -->
              <b-dropdown-text> <img id="s-icon" src="./assets/logo.png">הרשם</b-dropdown-text>
            </b-dropdown-item>
            <b-dropdown-item >
               <!-- <img id="s-icon" src="./assets/logo.png"> -->
                <b-dropdown-text> <img id="s-icon" src="./assets/logo.png">מי אני?</b-dropdown-text>
              </b-dropdown-item>
            <b-dropdown-item v-b-toggle.location v-scroll-to="'#loac'" @click="homePage()">
                <!-- <img id="s-icon" src="./assets/logo.png"> -->
                <b-dropdown-text> <img id="s-icon" src="./assets/logo.png">איך מגיעים?</b-dropdown-text>
              </b-dropdown-item>
            <b-dropdown-item v-b-toggle.contact_us v-scroll-to="'#contactus'" @click="homePage()">
              <!-- <img id="s-icon" src="./assets/logo.png">   -->
              <b-dropdown-text> <img id="s-icon" src="./assets/logo.png">צור קשר</b-dropdown-text>
            </b-dropdown-item>
           <b-dropdown-item @click="Logout()">
             <!-- <img id="s-icon" src="./assets/logo.png"> -->
              <b-dropdown-text> <img id="s-icon" src="./assets/logo.png">התנתק</b-dropdown-text>
            </b-dropdown-item>
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
      <!-- <div id="signboard">
            <div class="neon">Asaf Hadad</div>
            <div class="flux">Asaf__Hadad </div>
      </div> -->
        <!-- <div id="signboard">
            <div class="flux" >A<br>S<br>A<br>F<br><br>H<br>A<br>D<br>A<br>D<br></div> -->
                <!-- <div class="neon" >A</div>
                <div class="flux" >S</div>
                <div class="neon" >A</div>
                <div class="flux" >F</div><br>
                <div class="neon" >H</div>
                <div class="flux" >a</div>
                <div class="neon" >D</div>
                <div class="flux" >A</div>
                <div class="neon" >F</div> -->
            <!-- <div class="flux" style="position: right">B<br>a<br>r<br>b<br>e<br>r<br>s<br>h<br>o<br>p </div> -->
      <!-- </div> -->
      <!-- <div id="signboard" style="position: relative margin-right:500px;">
        <div class="flux" style="position: relative">B<br>a<br>r<br>b<br>e<br>r<br>s<br>h<br>o<br>p </div>
      </div> -->
      <!-- <div id="signboard">
      <h1 id="signboard-h1" contenteditable spellcheck="false">
        B<br>a<br>r<br>b<br>e<br>r<br>s<br>h<br>o<br>p 
      </h1>
      </div> -->
    <router-view />
    <div id="footer" dir="ltr">
       &copy; 2020 Copyright: <a href="https://www.linkedin.com/in/gal-atedgi-9644111a7" style="color: teal"> Gal Atedgi </a>
    </div>
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
          const res=await this.axios.post(`https://asafhadadbackend.herokuapp.com/logout`);
          console.log(res);
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
    homePage(){
       if(this.$route.name!="main"){
          this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Londrina+Outline');

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
   background:url("./assets/Background4.jpeg")no-repeat center center fixed;
    //  background:url("./assets/Background5.jpg")no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

.b-dropdown-text
{
  // color: tomato;
  // position:inherit;
}

#drop{
  position: left;
}

#s-icon{
  position: relative;
  width: 25px;
  height: 25px;
}

#footer{
   text-align: center; 
  background: black;
  position: fixed;
 bottom: 0;
  width: 100%;
}

// .b-dropdown-item{
//    position: right;
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

//************************************************************** */

//     @font-face {
//   font-family: neon;
//   src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
// }



// .neon {
//   // font-family:  neon;
//   font-family: 'Londrina Outline', cursive;
//   color: #FB4264;
//   font-size: 50px;
//   line-height: 50px;
//   text-shadow: 0 0 3vw #F40A35;
//   // position: left;
// }

// // .neon {
// //   font-family: neon;
// //   color: teal;
// //   font-size: 50px;
// //   line-height: 50px;
// //   text-shadow: 0 0 3vw teal;
// //   // position: left;
// // }

// .flux {
//   font-family: neon;
//   // font-family: 'Londrina Outline', cursive;
//   color: #426DFB;
//   font-size: 40px;
//   line-height: 40px;
//   text-shadow: 0 0 3vw #2356FF;
//   position: right;
// }

// .neon {
//   animation: neon 1s ease infinite;
//   -moz-animation: neon 1s ease infinite;
//   -webkit-animation: neon 1s ease infinite;
// }

// @keyframes neon {
//   0%,
//   100% {
//     text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
//     color: #FED128;
//   }
//   50% {
//     text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
//     color: #806914;
//   }
// }

// .flux {
//   animation: flux 2s linear infinite;
//   -moz-animation: flux 2s linear infinite;
//   -webkit-animation: flux 2s linear infinite;
//   -o-animation: flux 2s linear infinite;
// }

// @keyframes flux {
//   0%,
//   100% {
//     text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
//     color: #28D7FE;
//   }
//   50% {
//     text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
//     color: #146C80;
//   }
// }

//     #signboard{
//       position: fixed;
//       left: 3%;
//       top: 30%;
//       width: 600px;
//       // top: 50%;
//       -webkit-transform: rotate(-30deg);
    // }

//************************************************ */

// @import url(https://fonts.googleapis.com/css?family=Exo+2:200i);

// :root {
//   /* Base font size */
//   font-size: 10px;   
  
//   /* Set neon color */
//   --neon-text-color: #f40;
//   --neon-border-color: #08f;
// }

// body {
//   font-family: 'Exo 2', sans-serif;
//   display: flex;
//   justify-content: center;
//   align-items: center;  
//   background: #000;
//   min-height: 100vh;
// }

// #signboard-h1 {
//   font-family: 'Londrina Outline', cursive;
//   font-size: 25px;
//   font-weight: 200;
//   font-style: italic;
//   color: #fff;
//   padding: 3rem 6rem 3rem;
//   border: 0.2rem solid #fff;
//   border-radius: 2.5rem;
//   text-transform: uppercase;
//   animation: flicker 1.5s infinite alternate;     
// }

// h1::-moz-selection {
//   background-color: var(--neon-border-color);
//   color: var(--neon-text-color);
// }

// h1::selection {
//   background-color: var(--neon-border-color);
//   color: var(--neon-text-color);
// }

// h1:focus {
//   outline: none;
// }

// /* Animate neon flicker */
// @keyframes flicker {
    
//     0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      
//         text-shadow:
//             -0.2rem -0.2rem 1rem #fff,
//             0.2rem 0.2rem 1rem #fff,
//             0 0 2rem var(--neon-text-color),
//             0 0 4rem var(--neon-text-color),
//             0 0 6rem var(--neon-text-color),
//             0 0 8rem var(--neon-text-color),
//             0 0 10rem var(--neon-text-color);
        
//         box-shadow:
//             0 0 .5rem #fff,
//             inset 0 0 .5rem #fff,
//             0 0 2rem var(--neon-border-color),
//             inset 0 0 2rem var(--neon-border-color),
//             0 0 4rem var(--neon-border-color),
//             inset 0 0 4rem var(--neon-border-color);        
//     }
    
//     20%, 24%, 55% {        
//         text-shadow: none;
//         box-shadow: none;
//     }    
// }


</style>
