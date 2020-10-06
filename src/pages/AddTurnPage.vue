<template>
    <div  dir="rtl" class="container">
        <h1 class="title">קבע תור חדש!</h1>
        <b-form>
            <b-form-group id="input-group-days" label-cols-sm="10" label="תאריך:" label-for="days">
                <b-form-select id="days" v-model="form.day" :options="days" @change="times()"></b-form-select>
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
                    if(res.data[i].day=="Sunday")
                         this.days.push(res.data[i].date +" "+days[0]);
                    else if(res.data[i].day=="Monday")
                         this.days.push(res.data[i].date +" "+days[1]);
                    else if(res.data[i].day=="Tuesday")
                         this.days.push(res.data[i].date +" "+days[2]);
                    else if(res.data[i].day=="Wednesday")
                         this.days.push( res.data[i].date +" "+days[3]);
                    else if(res.data[i].day=="Thursday")
                        this.days.push( res.data[i].date +" "+days[4]);
                    else if(res.data[i].day=="Friday")
                         this.days.push( res.data[i].date +" "+days[5]);
                 
             }
        }catch{
          this.$router.push("/error");
        }
    },
    methods:{
        async times(){
            try{
                this.daytimes=[];
                let selectedDate=this.form.day.split(" ")[0];
                let times= await this.axios.get(`https://asafhadadbackend.herokuapp.com/queue/allturns/day/${selectedDate}`);
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
            alert("yess");
        },
        changeBtn(){
            document.getElementById("submitBtn").disabled=false;
        }
    }
}
</script>

<style>

</style>