<template>
  <div class="main-wrap">
    <div class="create-title">
      <label>New workout plan</label>
    </div>
    <button @click="addDay()">add day</button>
    <PlanDaysComponent :plan="this.currentPlan" @remove="removeDay"/>
  </div>
</template>

<script>
import axios from 'axios'
import PlanDaysComponent from '../SharedComponents/PlanDaysComponent.vue'

export default {
  components:{
    PlanDaysComponent
  },
  data(){
    return{
      allDays: {},
      allSets: {},
      allExercises: {},

      currentPlan: {},

      showAddSetWrap: false,

      currentPlanId: '35',
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
    this.getPlanById()
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
    },
    async deletePlan(){
      for(let key in this.plan){
        this.plan[key] = ''
      }
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/plans', {params:{
        id: this.currentPlanId
      }})
      .then(res => {
        console.log(res);
      })
    },
    getFile(event){
      this.plan.file = event.target.files[0]
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
    async removeDay(id){
      console.log(id);
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/plans/days', {params:{id: id}})
      .then(res => {
        console.log(res);
      })
      this.getPlanById()
    },
    async addSet(){
      await axios.post('http://783p122.e2.mars-hosting.com/7fit/plans/days/sets', {day_id: this.set.day_id,
                                                                                  exe_id: this.set.exe_id,
                                                                                  description: this.set.description,
                                                                                  duration: this.set.duration,
                                                                                  reps: this.set.reps,
                                                                                  rest: this.set.rest})
      .then(res => {
        console.log(res);
      })
      this.showAddSetWrap = false
      this.getPlanById()
    },
    async getAllExercises(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises')
      .then(res => {
        console.log(res);
        this.allExercises = res.data.msg
      })
    },
    setActive(event){
      let elem = document.getElementById(event.target.id)
      if(!elem.classList.contains('active')){
        elem.classList.add('active')
      }
      else{
        elem.classList.remove('active')
      }
    },
    showAddSet(event){
      this.showAddSetWrap = !this.showAddSetWrap
      this.getAllExercises()
      const id = event.target.parentElement.parentElement.id
      this.set.day_id = id
    }
  }
}
</script>

<style scoped>
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
  .main-wrap{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(36, 36, 36);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .create-title{
    height: 6rem;
    width: 100%;
    background-color: rgb(59, 59, 59);
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .create-title label{
    color: lightgray;
    font-size: 2.5rem;
  }

  @media (max-width: 600px){
    .create-title label{
      font-size: 2rem;
    }
  }
</style>