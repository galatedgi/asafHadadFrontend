<template>
    <div  dir="rtl" class="container">
        <div v-if="!showForm" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div v-if="showForm">
        <h1 class="title">קבע תור חדש!</h1>
        <b-form @submit.prevent="addTurn">
             <b-form-group id="input-group-prices" label-cols-sm="3" label="שירות:" label-for="prices">
                <b-form-select id="prices" v-model="$v.form.price.$model" :options="prices"  :state="validateState('price')"></b-form-select>
                <b-form-invalid-feedback>שדה זה הינו חובה</b-form-invalid-feedback>
            </b-form-group>
            <p v-if="form.price==45"> *בהצגת תעודה מזהה בלבד. </p>
            <b-form-group id="input-group-days" label-cols-sm="3" label="תאריך:" label-for="days">
                <b-form-select id="days" v-model="$v.form.day.$model" :options="days" :state="validateState('day')" @change="setTimes()"></b-form-select>
                <b-form-invalid-feedback>שדה זה הינו חובה</b-form-invalid-feedback>
            </b-form-group>
             <b-form-group id="input-group-times" label-cols-sm="3" label="שעה:" label-for="daytimes">
                <b-form-select id="daytimes" v-model="$v.form.time.$model" :options="daytimes" :state="validateState('time')"></b-form-select>
                <b-form-invalid-feedback>שדה זה הינו חובה</b-form-invalid-feedback>
            </b-form-group>
            <p v-if="form.day!='' && daytimes.length==0">*אין תורים פנויים ביום זה! </p>
                <b-button id="submitBtn" type="submit"   >הזמן תור</b-button>
        </b-form>
        </div>
    </div>
</template>

<script>
import days from "../assets/days";
import {
  required
} from "vuelidate/lib/validators";
// import { eventBus } from "../main.js";
export default {
    name: "addTurn",
    data(){
        return{
            form: {
                day: "",
                time: "",
                price:""
            },
            days: [{ value: null, text: "", disabled: true }],
            daytimes: [{ value: null, text: "", disabled: true }],
            prices:[
                {value:50, text:"תספורת גבר 50 ש״ח"},
                {value:45, text:"תספורת ילד/חייל/סטודנט 45ש״ח"},
                {value:60, text:"תספורת גבר+שעווה 60 ש״ח"},
                {value:150, text:"החלקות החל מ-150 ש״ח"},
                {value:100, text:"גוונים/צבע החל מ-100ש״ח"},
                ],
            showForm: true
        }
    },
    validations: {
        form: {
            day: {
                required
            },
            time: {
                required
             },
            price: {
                required
            },
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
        validateState(param) {
            const { $dirty, $error } = this.$v.form[param];
            return $dirty ? !$error : null;
        },
        reset(){
            this.form.day="";
            this.form.times="";
            this.form.price="";
            this.daytimes=[];
             this.$nextTick(() => {
                this.$v.$reset();
      });
        },
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
                    }
                    // else{
                    //     let item=new Object();
                    //     item.text=times.data[i].time;
                    //     item.value=times.data[i].time;
                    //     item.disabled=true;
                    //     this.daytimes.push(item);
                    // }
                }
                document.getElementById("daytimes").disabled=false;

                console.log(times);
            }catch(err){
                console.log(err);
                this.$router.push("/error");
            }
        },
        async addTurn(){
            this.$v.form.$touch();
               if (this.$v.form.$anyError) {
                    return;
                 }
            try{
                this.showForm=false;
                let username=this.$root.store.username;
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
                this.$root.toast("הזמנת תור חדש", "התור נקבע בהצלחה");
                this.reset();
                this.showForm=true;
                // console.log(response);
                // eventBus.$emit('setMyTurns');
            }catch(err){
                console.log(err);
                this.$router.push("/error");
            }
            
        },
    }
}
</script>

<style>
 #submitBtn{
     background-color: teal;
     width:100px;
 }


</style>