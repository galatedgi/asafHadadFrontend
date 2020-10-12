<template>
    <div>
        <table id="myTable" class="table" :items="myTurns">
            <thead class="thead-light">
            <tr>
                <th>תאריך</th>
                <th>יום</th>
                <th>שעה</th>
                <th></th>
            </tr>
             </thead>
            <tr v-for="(turn,i) in myTurns" :index="i" :key="i">
                <th>{{turn.date}} </th>
                <th>{{turn.day}} </th>
                <th>{{turn.time}} </th>
                <th><b-button variant="danger" @click="deleteTurn(turn.date,turn.time)"> בטל תור </b-button></th>
            </tr>
        </table>
    </div>
</template>

<script>
// import { eventBus } from "../main.js";
export default {
    data(){
        return{
            myTurns: []
        }
    },
    // mounted(){
    //     eventBus.$on('setMyTurns',this.setTurns);
    // },
    methods: {
        transDay(day){
            switch(day){
                case "Sunday":
                    return "ראשון";
                case "Monday":
                    return "שני";
                case "Tuesday":
                    return "שלישי";
                case "Wednesday":
                    return "רביעי";
                case "Thursday":
                    return "חמישי";
                case "Friday":
                    return "שישי";
            }
        },
        async setTurns(){
        try{
            this.myTurns=[];
            const res= await this.axios.get(`https://asafhadadbackend.herokuapp.com/queue/myturns/user/${this.$root.store.username}`);
            for(let i in res.data){
                let item=new Object();
                item.date=res.data[i].date;
                item.day=this.transDay(res.data[i].day);
                item.time=res.data[i].time;
                this.myTurns.push(item);
            }
        }catch(err){
          console.log(err);
          this.$router.push("/error");
        }
    },
    async deleteTurn(date,time){
        try{
            console.log(this.$root.store.username); 
            console.log(date);
            console.log(time);
            let name=this.$root.store.username;

            const res= await this.axios.post(`https://asafhadadbackend.herokuapp.com/queue/deleteturn`,
            {
                username:name,
                date: date,
                time: time
            }
            );
            console.log(res);
            this.setTurns();
        }catch(err){
          console.log(err);
          this.$router.push("/error");
        }
    }
    },
    // async setTurns(){
    //     try{
    //         const res= await this.axios.get(`https://asafhadadbackend.herokuapp.com/queue/myturns/user/${this.$root.store.username}`);
    //         for(let i in res.data){
    //             let item=new Object();
    //             item.date=res.data[i].date;
    //             item.day=this.transDay(res.data[i].day);
    //             item.time=res.data[i].time;
    //             this.myTurns.push(item);
    //         }
    //     }catch(err){
    //       console.log(err);
    //       this.$router.push("/error");
    //     }
    // }
}
</script>

<style>
#myTable {
 color:whitesmoke;
}
</style>