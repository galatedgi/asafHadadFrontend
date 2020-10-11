<template>
    <div  dir="rtl" class="container">
        <h1 class="title">קבע תור חדש!</h1>
        <b-form>
            <b-form-group id="input-group-days" label-cols-sm="10" label="תאריך:" label-for="days">
                <b-form-select id="days" v-model="form.day" :options="days" @change="setTimes()"></b-form-select>
            </b-form-group>
             <b-form-group id="input-group-times" label-cols-sm="10" label="שעה:" label-for="daytimes">
                <b-form-select id="daytimes" v-model="form.time" :options="daytimes" disabled @change="changeBtn()"></b-form-select>
            </b-form-group>
                <b-button id="submitBtn" type="submit" variant="primary" style="width:250px;" class="ml-5 w-75 Rbtn" disabled @click="addTurn()">הזמן תור</b-button>
        </b-form>
    </div>
</template>

<script>
import days from "../assets/days";
// import { eventBus } from "../main.js";
export default {
    name: "addTurn",
    data(){
        return{
            form: {
                day: "",
                time: ""
            },
            days: [{ value: null, text: "", disabled: true }],
            daytimes: [{ value: null, text: "", disabled: true }],
        }
    },
    async created(){
        try{
            const res= await this.axios.get(`https://asafhadadbackend.herokuapp.com/queue/dates`);
            let dates=res.data;
               for(let i in res.data){
                    let item=new Object();
                    if(res.data[i].day=="Sunday"){
                        item.text=res.data[i].date +" "+days[0];
                        item.value=res.data[i].date;
                         this.days.push(item);
                    }
                    else if(res.data[i].day=="Monday"){
                         item.text=res.data[i].date +" "+days[1];
                        item.value=res.data[i].date;
                         this.days.push(item);                    
                    }
                    else if(res.data[i].day=="Tuesday"){
                        item.text=res.data[i].date +" "+days[2];
                        item.value=res.data[i].date;
                         this.days.push(item);                    
                    }
                    else if(res.data[i].day=="Wednesday"){
                        item.text=res.data[i].date +" "+days[3];
                        item.value=res.data[i].date;
                         this.days.push(item);                    
                    }
                    else if(res.data[i].day=="Thursday"){
                        item.text=res.data[i].date +" "+days[4];
                        item.value=res.data[i].date;
                         this.days.push(item);                   
                    }
                    else if(res.data[i].day=="Friday"){
                        item.text=res.data[i].date +" "+days[5];
                        item.value=res.data[i].date;
                         this.days.push(item);                    
                    }
                 
             }
        }catch(err){
            console.log(err);
          this.$router.push("/error");
        }
    },
    methods:{
        async setTimes(){
            try{
                this.daytimes=[];
                this.form.time="";
                let times= await this.axios.get(`https://asafhadadbackend.herokuapp.com/queue/allturns/day/${this.form.day}`);
                for(let i in times.data){
                    console.log(times.data[i]);
                    if(times.data[i].status == "free"){
                        let item=new Object();
                        item.text=times.data[i].time;
                        item.value=times.data[i].time;
                        item.disabled=false;
                        this.daytimes.push(item);
                    }else{
                        let item=new Object();
                        item.text=times.data[i].time;
                        item.value=times.data[i].time;
                        item.disabled=true;
                        this.daytimes.push(item);
                    }
                }
                document.getElementById("daytimes").disabled=false;

                console.log(times);
            }catch(err){
                console.log(err);
                this.$router.push("/error");
            }
        },
        async addTurn(){
            try{
                let username=this.$root.store.username;
                console.log("dsds");
                console.log(username);
                let date=this.form.day;
                let time=this.form.time;
                const response = await this.axios.post(
                    "https://asafhadadbackend.herokuapp.com/queue/addturn",
                {
                    username: username,
                    date: date,
                    time: time
                }
                );
                console.log(response);
                // eventBus.$emit('setMyTurns');
            }catch(err){
                console.log(err);
                this.$router.push("/error");
            }
            
        },
        changeBtn(){
            document.getElementById("submitBtn").disabled=false;
        }
    }
}
</script>

<style>

</style>