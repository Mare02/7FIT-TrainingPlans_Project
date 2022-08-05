<template>
  <div class="main-wrap">
    <div class="create-title">
      <label>{{plan.name}}</label>
    </div>
    <PlanDaysComponent :plan="this.currentPlan" @add="addDay()"
                                                @refresh="refresh()"/>
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

      currentPlan: {},

      currentPlanId: '35',

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
    }
  },
  mounted(){
    this.getPlanById()
  },
  methods: {
    refresh(){
      this.getPlanById()
    },
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