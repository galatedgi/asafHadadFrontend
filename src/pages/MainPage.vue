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
        <div  v-if="$root.store.username">
          <p><b-button id="addturn" pill v-b-toggle.add_turn data-toggle="collapse">הזמנת תור </b-button></p>
          <b-collapse id="add_turn" class="mt-2" accordion="my-accordion">
              <b-card class="myCollapse">
                      <addTurn/>
              </b-card>
           </b-collapse>
           <br>
           <p><b-button id="queuemanager" pill v-b-toggle.queue_manager data-toggle="collapse" @scroll="click()">התורים שלי </b-button></p>
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
          <gallery id="gallery"/>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
           <br>
           <br>
        
        <div>
          <!-- <p><b-button pill data-toggle="collapse"> מי אני? </b-button></p> -->

          <br>

           <p><b-button id="loac" pill v-b-toggle.location data-toggle="collapse">איך מגיעים? </b-button></p>
             <b-collapse id="location"  class="mt-2" accordion="my-accordion">
                <b-card class="myCollapse">
                    <location/>
                </b-card>
              </b-collapse>
              <br>

          <p><b-button id="contactus" pill v-b-toggle.contact_us data-toggle="collapse" >צור קשר </b-button></p>
          <b-collapse id="contact_us"  class="mt-2" accordion="my-accordion" ref="contactus">
            <b-card class="myCollapse">
                <contactUs/>
            </b-card>
          </b-collapse>
          <br>
        </div>
        <br>
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
import location from "../components/Location";
export default {
  name: "Main",
  components:{
    addTurn,
    queueManager,
    gallery,
    contactUs,
    location
  },
  // data(){
  //   return{
  //         collapseStates: [false, false]
  //   }
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
  }
};
</script>

<style lang="scss" scoped>
  div{
    align-items: center;
    text-align: center;
  }

  // .btn{
  //   color: whitesmoke;
  //   background-color:black;
  //   border-color: whitesmoke;
  //   border-style: double;
  //   border-width: 2px;
  //   width:120px ;
  //   height: 40px;
  // }

  .btn{
    background-color:black;
    border-color: teal;
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
     height: 250px;
    width: 150px;
    }


</style>
