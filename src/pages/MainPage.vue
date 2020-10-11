<template>
  <div dir="rtl">
    <b-container>
      <!-- <h1> Asaf Hadad Barbershop </h1> -->
      <img id="logo" src="../assets/logo.png">
      <b-col>
        <p><b-button pill data-toggle="collapse"> מי אני? </b-button></p>
        <div  v-if="$root.store.username">
        <!-- <b-col v-if="$root.store.username"> -->
          <!-- <p><b-button pill data-toggle="collapse"> מי אני? </b-button></p> -->
          <p><b-button pill v-b-toggle.add_turn data-toggle="collapse">הזמנת תור </b-button></p>
          <b-collapse id="add_turn" class="mt-2" accordion="my-accordion">
              <b-card class="myCollapse">
                      <addTurn/>
              </b-card>
           </b-collapse>
           <p><b-button pill v-b-toggle.queue_manager data-toggle="collapse">התורים שלי </b-button></p>
          <b-collapse id="queue_manager" class="mt-2" @show="myTurns()" accordion="my-accordion">
                <b-card class="myCollapse">
                      <queueManager ref="queueManager"/>
              </b-card>
          </b-collapse>
           <p><b-button pill >צור קשר </b-button></p>
           <p><b-button pill >איך מגיעים </b-button></p>
        <!-- </b-col> -->
        </div>
        <div v-else>
          <b-col>
            <p><b-button pill  @click="Login()">התחבר </b-button></p>
            <p><b-button pill @click="Register()">הרשם </b-button></p>
        </b-col>
        </div>
        <!-- <div id="carouselControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="item active">
              <img src="../assets/img1.jpeg">
            </div>
            <div class="carousel-item active">
              <img class="d-block w-100" src="../assets/img2.jpeg">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> -->
      <!-- <b-row>
         <p><b-button pill >איך מגיעים </b-button></p>
      </b-row> -->
      </b-col>
    </b-container>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import addTurn from "../components/AddTurn";
import queueManager from "../components/QueueManager";
export default {
  name: "Main",
  components:{
    addTurn,
    queueManager,
  },
  data(){
    return{
          collapseStates: [false, false]
    }
  },
  // async created() {
  //   eventBus.$on('setMyTurns',()=>{
  //     this.myTurns();
  //   });
  // },
  methods: {
    Login(){
      this.$router.push("/login");
    },
     Register(){
      this.$router.push("/register");
    },
    async myTurns(){
      this.$refs.queueManager.setTurns();
    },
    collapseAll() {
      console.log("DSd");
      this.collapseStates = this.collapseStates.map(x => false)
    }
  }
};
</script>

<style lang="scss" scoped>
  div{
    align-items: center;
    text-align: center;
  }

  .btn{
    background-color:teal;
    width:120px ;
    height: 40px;
  }

  .myCollapse{
    align-items: center;
    background:none;
    border-color: teal;
    // padding: 5%;
    // width: 40%;
    // height: 50%;
    border-radius: 20px;
  }

  #logo{
    filter : invert(1);
    height: 200px;
    width: 200px;
  }
  // h1{
  //   color: aqua;
  // }
</style>
