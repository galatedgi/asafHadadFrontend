<template>
  <div dir="rtl">
    <b-container id="container">
      <b-col>
        <div>
          <p>
            <img id="logo" src="../assets/logo.png">
          </p>
        </div>
          <div v-if="!$root.store.username">
          <p> על מנת להשתמש בשירותי האתר עליך להיות מחובר! </p>
        </div>
        <div>
          <p><b-button pill data-toggle="collapse"> מי אני? </b-button></p>

          <br>
        </div>
        <div  v-if="$root.store.username">
          <p><b-button pill v-b-toggle.add_turn data-toggle="collapse">הזמנת תור </b-button></p>
          <b-collapse id="add_turn" class="mt-2" accordion="my-accordion">
              <b-card class="myCollapse">
                      <addTurn/>
              </b-card>
           </b-collapse>
           <br>
           <p><b-button pill v-b-toggle.queue_manager data-toggle="collapse">התורים שלי </b-button></p>
          <b-collapse id="queue_manager" class="mt-2" @show="myTurns()" accordion="my-accordion">
                <b-card class="myCollapse">
                      <queueManager ref="queueManager"/>
              </b-card>
          </b-collapse>
          <br>
        </div>
        <div v-else>
          <b-col>
            <p><b-button pill  @click="Login()">התחבר </b-button></p>
            <br>
            <p><b-button pill @click="Register()">הרשם </b-button></p>
            <br>
        </b-col>
        </div>
        <div>
          <p><b-button pill v-b-toggle.contact_us data-toggle="collapse" >צור קשר </b-button></p>
          <b-collapse id="contact_us"  class="mt-2" accordion="my-accordion">
            <b-card class="myCollapse">
                <contactUs/>
            </b-card>
          </b-collapse>
          <br>
           <p><b-button pill >איך מגיעים </b-button></p>

           <br>
        </div>
        <br>
        <div>
          <gallery id="gallery"/>
        </div>

      </b-col>
    </b-container>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import addTurn from "../components/AddTurn";
import queueManager from "../components/QueueManager";
import gallery from "../components/gallery";
import contactUs from "../components/ContactUs";
export default {
  name: "Main",
  components:{
    addTurn,
    queueManager,
    gallery,
    contactUs
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
    width: 320px;
    // height: 50%;
    border-radius: 20px;
  }

  #logo{
    filter : invert(1);
    height: 200px;
    width: 200px;
  }

    #container{
      width: 370px;
    }

    #gallery{
     position: relative;
     height: 400px;
    width: 300px;
    }
  // h1{
  //   color: aqua;
  // }
</style>
