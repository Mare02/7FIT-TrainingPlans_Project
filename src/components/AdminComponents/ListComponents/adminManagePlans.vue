<template>
  <div class="plans-container">
    <div>
      <button @click="showCreate()">add plan</button>
      <div class="create-plan-container" v-if="showCreateContainer">
        <div>
          <label>Name: </label>
          <input type="text" v-model="plan.name">
        </div>
        <div>
          <label>Description: </label>
          <input type="text" v-model="plan.description">
        </div>
        <div>
          <label>Goal: </label>
          <input type="text" v-model="plan.goal">
        </div>
        <div>
          <label>Level: </label>
          <input type="text" v-model="plan.level">
        </div>
        <div>
          <label>Plan image: </label>
          <input type="file" @change="getFile($event)">
        </div>
        <div>
          <button @click="createPlan()">create</button>
          <button @click="deletePlan()">cancel</button>
        </div>  
      </div>
    </div>
    <div class="plan-container" v-if="showPlanContainer"> 
      <p class="plan-name">{{currentPlan.pla_name}}</p>
      <button @click="addDay()">add day</button>
      <ul class="days-list" >
        <li v-for="day in this.allDays" :key="day.day_id" :id="day.day_id">
            <p>Day {{day.day_number}}</p>
            <button @click="removeDay($event)">Remove day</button>
            <button @click="addSet($event)">add set</button>
            <!-- <ul class="sets-list">
              
            </ul> -->\
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="plan in allPlans" :key="plan.pla_id">
          <p>{{plan.pla_name}}</p>
        </li>
      </ul>
    </div>
  </div>
  <div style="color: white;">
    --------------------------------------------------------------
  </div>
  <div>
    <ul>
      <li v-for="exe in allExercises" :key="exe.exe_id">
        <p>{{exe.exe_name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      allPlans: {},
      allDays: {},
      allSets: {},
      allExercises: {},

      currentPlan: {},

      showCreateContainer: false,
      showPlanContainer: true,
      currentPlanId: '6',
      currentDayId: '',

      plan:{
        name: '',
        description: '',
        goal: '',
        level: '',
        file: ''
      },

      day:{
        day_description: '',
        day_number: '',
        pla_id: ''
      },

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
    this.getAllPlans()
    this.getPlanById()
    this.getAllExercises()
  },
  methods: {
    async createPlan(){
      let formdata = new FormData()
      for(let key in this.plan){
        formdata.append([key], this.plan[key])
      }
      await axios.post('http://783p122.e2.mars-hosting.com/7fit/plans', formdata)
      .then(res => {
        console.log(res);
        this.currentPlanId = res.data.newPlanId
        console.log(this.currentPlanId);
      })
      this.getPlanById()
      this.getAllPlans()
      this.showPlanContainer = true
    },
    async deletePlan(){
      for(let key in this.plan){
        this.plan[key] = ''
      }
      this.showCreateContainer = false
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/plans', {params:{
        id: this.currentPlanId
      }})
      .then(res => {
        console.log(res);
      })
      this.getAllPlans()
    },
    getFile(event){
      this.plan.file = event.target.files[0]
    },
    async getAllPlans(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans')
      .then(res => {
        console.log(res);
        this.allPlans = res.data.msg
      })
    },
    async getPlanById(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {id: this.currentPlanId}} )
      .then(res => {
        console.log(res);
        this.currentPlan = res.data.msg
        this.allDays = res.data.msg.days
      })
    },
    async addDay(){
      await axios.post('http://783p122.e2.mars-hosting.com/7fit/plans/days', {pla_id: this.currentPlanId,
        day_number: Object.keys(this.allDays).length + 1, day_description: ''})
      .then(res => {
        console.log(res);
      })
      this.getPlanById()
    },
    async removeDay(event){
      let id = event.target.parentElement.id;
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/plans/days', {params:{id: id}})
      .then(res => {
        console.log(res);
      })
      this.getPlanById()
    },
    async addSet(event){
      let id = event.target.parentElement.id;

      await axios.post('http://783p122.e2.mars-hosting.com/7fit/plans/days/sets', {
        day_id: id,
        exe_id: '79',
        description: 'asdasdadasd',
        duration: '1000',
        reps: '20',
        rest: '500'
      })
      .then(res => {
        console.log(res);
      })
      this.getPlanById()
    },
    async getAllExercises(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises')
      .then(res => {
        console.log(res);
        this.allExercises = res.data.msg
      })
    },
    showCreate(){
      this.showCreateContainer = !this.showCreateContainer
    },
  }
}
</script>

<style>
  input{
    color: black;
    font-size: 1.2rem;
  } 
  button{
    height: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  } 
  .create-plan-container{
    display: flex;
    flex-direction: column;
  }
  .plan-container{
    margin-top: 5rem;
    width: 50rem;
    height: auto;
    background-color: rgb(56, 56, 56);
  }
  .days-list{
    list-style: none;
  }
  .days-list li{
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    width: 20rem;
    cursor: pointer;
    background-color: rgb(99, 99, 99);
    height: 2rem;
  }
  .days-list li:hover{
    background-color: gray;
  }
  .sets-list{
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  
</style>