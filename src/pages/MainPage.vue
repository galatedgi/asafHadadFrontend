<template>
  <div dir="rtl">
    <b-container>
      <h1> Asaf Hadad Barbershop </h1>
      <b-row>
        <b-col v-if="$root.store.username">
          <p><b-button class="btn" v-b-toggle.add_turn data-toggle="collapse">הזמנת תור </b-button></p>
          <b-collapse id="add_turn" class="mt-2" accordion="my-accordion">
              <b-card>
                      <addTurn/>
              </b-card>
           </b-collapse>
           <p><b-button  v-b-toggle.queue_manager data-toggle="collapse">התורים שלי </b-button></p>
          <b-collapse id="queue_manager" class="mt-2" @show="myTurns()" accordion="my-accordion">
                <b-card>
                      <queueManager ref="queueManager"/>
              </b-card>
          </b-collapse>
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
  }

  // h1{
  //   color: aqua;
  // }
</style>
