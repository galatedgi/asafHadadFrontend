<template>
  <div dir="rtl">
    <b-container>
      <b-row>
        <b-col v-if="$root.store.username">
          <p><b-button v-b-toggle.addturn>הזמנת תור </b-button></p>
          <b-collapse id="addturn" class="mt-2">
              <b-card>
                      <addTurnPage/>
              </b-card>
           </b-collapse>
           <p><b-button>התורים שלי </b-button></p>
           <!-- <div class="collapse" id="collapseExample">
             <div class="card card-body">
               <addTurnPage/>
               fsdfsd
             </div>
           </div> -->
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
// import { eventBus } from "../main.js";
import addTurnPage from "./AddTurnPage";
export default {
  name: "Main",
  components:{
    addTurnPage
  },
  methods: {
    Login(){
      this.$router.push("/login");
    },
     Register(){
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss" scoped>
  div{
    align-items: center;
    text-align: center;
  }
</style>
