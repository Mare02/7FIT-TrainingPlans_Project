<template>
<div class="plan-days-container">
  <div class="plan-content-head">
    <label>Plan</label>
  </div>
  <div class="add-day-wrap" v-if="this.role == 1 || this.role == 2">
    <label class="add-label">Add day</label>
    <button class="show-set-btn" @click="emitAddDay()">+</button>
  </div>
  
  <div class="plan-content">
    <div v-for="day in this.plan.days" :key="day.day_id" :id="day.day_id" class="day-wrap">
      <div class="day-head" :id="day.day_id+'head'" :class="{active: day.completed}">
        Day {{day.day_number}}
        <div  v-if="this.role == 1 || this.role == 2">   
          <button class="remove-day-btn" @click="removeDay(day.day_id)">remove day</button>  
        </div>
        <input :checked="day.completed" type="checkbox" class="checkbox" :id="day.day_id+'check'" @change="completeDay($event, day.completed)" v-if="this.allowTracking && Object.keys(day.sets).length != 0">
        <!-- <input type="checkbox" class="checkbox" :id="day.day_id+'check2'" @change="uncompleteDay($event)"> -->
      </div>
      <ul class="sets-container">
        <p v-if="Object.keys(day.sets).length == 0" class="rest">Rest</p>
        <li v-for="set in day.sets" :key="set.set_id">
          <div class="div1">
            <div class="exe-wrap1">
              <p>- {{set.exe_name}}</p>
              <div>
                {{set.set_reps}} reps
              </div>
            </div>
            <div class="exe-wrap2">
              <div v-if="true">
                Duration: {{set.set_duration}}s
              </div>
              <div>
                Rest: {{set.set_rest}}s
              </div>
            </div>
          </div>
          <div class="div2" v-if="this.role == 1 || this.role == 2">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" class="remove-set-btn" @click="removeSet(set.set_id)">
              <path
                d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="currentColor"
              />
            </svg>
          </div>    
        </li> 
        <div class="set-inputs" :id="day.day_id+'set'"  v-if="this.role == 1 || this.role == 2">
          <div class="wrap-1">
              <select v-model="set.exe_id">
                <option value="">Select exercise</option>
                <option v-for="exe in this.allExercises" :key="exe.exe_id" :value="exe.exe_id">{{exe.exe_name}}</option>
              </select>
              <input type="number" v-model="set.reps" class="reps" placeholder="reps">
          </div>
          <div class="wrap2">
            <div>
                <input type="number" v-model="set.duration" class="duration" placeholder="duration(s)">
                <input type="number" v-model="set.rest" class="rest" placeholder="rest(s)">
            </div>
            <div v-if="false">
              <input type="text" v-model="set.description" class="desc" placeholder="description">
            </div>
          </div>
          <div class="submit-btn-wrap">
            <button class="submit-set-btn" @click="addSet()">add</button>
          </div>
        </div>
        <div class="add-set-wrap" v-if="this.role == 1 || this.role == 2">
          <button class="show-set-btn" @click="showSet($event)">+</button>
        </div>
      </ul>
    </div>
  </div>
</div>
  
</template>

<script>
import axios from 'axios'
import store from '../../store'

export default {
  props: [
    'plan',
    'role',
    'allowTracking'
  ],
  data(){
    return{
      completed: true,
      allExercises: {},

      currentDayId: '',
      user_id: store.getters.checkUserId,

      set: {
        day_id: '',
        exe_id: '',
        description: '',
        duration: '',
        reps: '',
        rest: ''
      }
    }
  },
  mounted(){
    this.getAllExercises()
    console.log(this.plan);
  },
  updated(){
    
  },
  methods:{
    async completeDay(event, completed){
      let dayId = event.target.parentElement.parentElement.id
      console.log(dayId);

      if(completed == true){
        await axios.put('http://783p122.e2.mars-hosting.com/7fit/training', {day_id_uncomplete: dayId,
                                                                          usr_id: this.user_id})
        .then(res=> {
          console.log(res);
        })
      }
      if(completed == false){
        await axios.put('http://783p122.e2.mars-hosting.com/7fit/training', {day_id_complete: dayId,
                                                                          usr_id: this.user_id})
        .then(res=> {
          console.log(res);
        })
      }
       this.$emit('refresh')
    },
    async uncompleteDay(event){
      let dayId = event.target.parentElement.parentElement.id
      console.log(dayId);
      // document.getElementById(dayId).classList.add('.active')
      await axios.put('http://783p122.e2.mars-hosting.com/7fit/training', {day_id_uncomplete: dayId,
                                                                          usr_id: this.user_id})
      .then(res=> {
        console.log(res);
      })
    },
    showSet(event){
      let id = event.target.parentElement.parentElement.parentElement.id
      this.currentDayId = id
      let elem = document.getElementById(id)
      let setInputs = elem.querySelector('.sets-container').querySelector('.set-inputs')
      if(setInputs.style.display != 'block'){
        setInputs.style.display = 'block'
      }
      else{
        setInputs.style.display = 'none'
      }
      
    },
    async addSet(){
      let elem = document.getElementById(this.currentDayId+'set')
      elem.style.display = 'none'

      await axios.post('http://783p122.e2.mars-hosting.com/7fit/plans/days/sets', {day_id: this.currentDayId,
                                                                                  exe_id: this.set.exe_id,
                                                                                  description: this.set.description,
                                                                                  duration: this.set.duration,
                                                                                  reps: this.set.reps,
                                                                                  rest: this.set.rest})
      .then(res => {
        console.log(res);
      })
      // for(let key in this.set){
      //   this.set[key] = ''
      // }
      this.$emit('refresh')
    },
    async removeDay(id){
      console.log(id);
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/plans/days', {params:{id: id}})
      .then(res => {
        console.log(res);
      })
      this.$emit('refresh')
    },
    async getAllExercises(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises')
      .then(res => {
        console.log(res);
        this.allExercises = res.data.msg
      })
    },
    async removeSet(id){
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/plans/days/sets', {params: {id: id}})
      .then(res => {
        console.log(res);
      })
      this.$emit('refresh')
    },
    emitAddDay(){
      this.$emit('add')
    },
  }
}
</script>

<style scoped>
  .sets-container .rest{
    font-size: 1.4rem;
    position: relative;
    left: 1.8rem;
  }
  .active{
    background-image: linear-gradient(to bottom, rgb(88, 165, 81), rgb(29, 54, 0));
  }
  .add-day-wrap{
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
  }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    border-radius: 5px;
    border: 2px solid gray;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  } 
  input{
    color: black;
    font-size: 1.1rem;
    padding-left: 0.5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    margin: 2px;
    height: 1.8rem;
  }
  select{
    cursor: pointer;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.1rem;
    border-radius: 5px;
  }

  .submit-set-btn{
    width: 4rem;
    height: 2rem;
    font-size: 1.3rem;
  }
  .submit-set-btn:hover{
    background-color: green;
  }
  .remove-day-btn:hover{
    background-color: rgb(155, 19, 19);
    color: white;
  }

  .add-label{
    font-size: 1.3rem;
    margin-top: 1rem;
  }

  .set-inputs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .set-inputs .wrap1{
    display: flex;
    
    align-items: center;
    justify-content: center;
  }
  .set-inputs .wrap2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .reps{
    width: 4rem;
  }
  .duration{
    width: 6rem;
  }
  .rest{
    width: 6rem;
  }

  .add-set-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
  }

  .show-set-btn{
    z-index: 999;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border: 3px solid white;
    background: transparent;
    color: white;
    font-size: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4px;
    line-height: 30px;
  }
  .show-set-btn:hover{
    color: green;
    border: 3px solid green;
  }

  .remove-set-btn{
    display: block;
    pointer-events: all;
  }
  .remove-set-btn:hover{
    cursor: pointer;
    color: red;
  }

  .set-inputs{
    display: none;
  }

  .checkbox{
    height: 1.8rem;
    width: 1.8rem;
    color: green;
    cursor: pointer;
  }

  .plan-days-container{
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .plan-content-head{
    background-color: rgb(155, 19, 19);
    width: 100%;
    height: 3rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plan-content-head label{
    font-family: 'Bebas Neue', cursive;
    font-size: 1.8rem;
  }
  .plan-content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .day-wrap{
    min-height: 4rem;
    padding-bottom: 2rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: rgb(100, 100, 100);
    margin: 5px;
    transition: all 0.5s;
    border-radius: 10px;
  }
  .day-head{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.5rem;
    color: lightgray;
  }

  .sets-container{
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sets-container li{
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    min-height: 4rem;
    width: 100%;
    border-top: 1px solid gray;
    background-color: rgb(70, 70, 70);
  }
  .sets-container li .div1{
    min-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }
  .sets-container li .div2{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 20%;
    padding-right: 1rem;
  }
  .sets-container li .div1 .exe-wrap1, 
  .sets-container li .div1 .exe-wrap2{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sets-container li .exe-wrap2{
    color: lightgray;
  }
  .sets-container li p{
    font-size: 1.2rem;
  }

  .day_completed{
    background-color: green;
  }

  @media (max-width: 700px){
    .plan-content{
      width: 100%;
    }
    .day-wrap{
      margin: 4px;
      transition: all 0.5s;
    }
    .plan-days-container{
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (max-width: 600px){
    .plan-content-head{
      width: 100%;
    }
  }
  @media (max-width: 420px){
    .day-wrap{
      width: 100%;
    }
  }
</style>