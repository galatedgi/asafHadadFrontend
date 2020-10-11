<template>
  <div dir="rtl">
    <b-container>
      <h1> Asaf Hadad Barbershop </h1>
      <b-row>
        <b-col v-if="$root.store.username">
          <p><b-button pill data-toggle="collapse"> מי אני? </b-button></p>
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
        </b-col>
          <b-col v-else>
            <p><b-button pill data-toggle="collapse"> מי אני? </b-button></p>
            <p><b-button pill  @click="Login()">התחבר </b-button></p>
            <p><b-button pill @click="Register()">הרשם </b-button></p>
        </b-col>
      </b-row>
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
  // h1{
  //   color: aqua;
  // }
</style>
