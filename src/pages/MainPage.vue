<template>
  <div dir="rtl">
    <b-container>
      <img id="logo" src="../assets/logo.png">
      <b-col>
        <p><b-button pill data-toggle="collapse"> מי אני? </b-button></p>
        <div  v-if="$root.store.username">
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
           <p><b-button pill v-b-toggle.contact_us data-toggle="collapse" >צור קשר </b-button></p>
               <b-collapse id="contact_us"  class="mt-2" accordion="my-accordion">
                <b-card class="myCollapse">
                      <ContactUs/>
              </b-card>
          </b-collapse>
           <p><b-button pill >איך מגיעים </b-button></p>
        </div>
        <div v-else>
          <b-col>
            <p><b-button pill  @click="Login()">התחבר </b-button></p>
            <p><b-button pill @click="Register()">הרשם </b-button></p>
        </b-col>
        </div>
      </b-col>
      <gallery id="gallery"/>
    </b-container>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import addTurn from "../components/AddTurn";
import queueManager from "../components/QueueManager";
import gallery from "../components/gallery";
import ContactUs from "../components/ContactUs";
export default {
  name: "Main",
  components:{
    addTurn,
    queueManager,
    gallery,
    ContactUs
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

  #gallery{
   position: relative;
   right: 400px;
  }
  // h1{
  //   color: aqua;
  // }
</style>
