<template>
  <div class="main-wrap">
    <div class="create-title">
      <label class="plan-title">{{this.currentPlan.pla_name}}</label>
      <button @click="deletePlan()" v-if="this.currentPlanId != ''">delete plan</button>
      <div class="create-plan-wrap" v-if="this.currentPlanId == ''">
        <div class="inputs">
          <div>
            <label>Plan name: </label>
            <input type="text" v-model="plan.name">
          </div>
          <div>
            <label>Description: </label>
            <input type="text" v-model="plan.description">
          </div>
          <div>
            <label>Goal: </label>
            <select v-model="plan.goal">
              <option value="1">Bulk</option>
              <option value="2">Shred</option>
              <option value="3">Cardio</option>
              <option value="4">Progression</option>
              <option value="4">Strenght</option>
            </select>
          </div>
          <div>
            <label>level: </label>
            <select v-model="plan.level">
              <option value="1">Beginner</option>
              <option value="2">Normal</option>
              <option value="3">Expert</option>
              <option value="4">Universal</option>
            </select>
          </div>
          <div class="image">
            <label>Image: </label>
            <input class="file" type="file" @change="getFile($event)">
          </div>
        </div>
        <div class="create-btns">
          <button @click="createPlan()">create</button>
        </div>
      </div> 
    </div>
    <div class="plan-image">
        <img :src="this.currentPlan.file_url" alt="">
    </div>
    <div class="plan-description" v-if="this.currentPlanId != ''">
        <div class="description-head">
          <label>PLAN DESCRIPTION</label>
        </div>
        <div class="text">
          <p>{{this.currentPlan.pla_desc}}</p>
        </div>
      </div>
    <PlanDaysComponent v-if="this.currentPlanId != ''" :plan="this.currentPlan" @add="addDay()"
                                                @refresh="refresh()"
                                                :role="role"/>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store'
import PlanDaysComponent from '../SharedComponents/PlanDaysComponent.vue'

export default {
  components:{
    PlanDaysComponent
  },
  data(){
    return{
      allDays: {},

      currentPlan: {},

      currentPlanId: '',
      role: store.getters.checkRole,

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
    if(this.currentPlanId != ''){
      this.getPlanById()
    }
    if(localStorage.getItem('currentCreatedPlan')){
      this.currentPlanId = localStorage.getItem('currentCreatedPlan')
    }
  },
  methods: {
    getFile(event){
      this.plan.file = event.target.files[0]
    },
    refresh(){
      this.getPlanById()
    },
    async createPlan(){
      let formdata = new FormData()
      formdata.append('sid', localStorage.getItem('sid'))
      for(let key in this.plan){
        formdata.append([key], this.plan[key])  
      }
      await axios.post('http://783p122.e2.mars-hosting.com/7fit/plans', formdata)
      .then(res => {
        this.currentPlanId = res.data.newPlanId
        console.log(this.currentPlanId);
      })
      for(let key in this.plan){
        this.plan[key] = ''
      }
      this.getPlanById()
      localStorage.setItem('currentCreatedPlan', this.currentPlanId)
    },
    async deletePlan(){
      for(let key in this.plan){
        this.plan[key] = ''
      }
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {id: this.currentPlanId,
                                                                          sid: localStorage.getItem('sid')}})
      .then(res => {
        if(res.status == 200){
          localStorage.removeItem('currentCreatedPlan')
          this.$router.push({name: 'Plans'})
        }
      })
    },
    async getPlanById(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {id: this.currentPlanId}} )
      .then(res => {
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
  .create-btns{
    margin-top: 1rem;
  }
  input{
    margin-left: 1rem;
    padding-left: 0.5rem;
    border-radius: 3px;
    border: none;
    outline: none;
    margin-top: 0.5rem;
    height: 1.7rem;
    background-color: rgb(95, 95, 95);
    font-size: 1.3rem;
  } 
  button{
    height: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  } 
  select{
    margin-left: 1rem;
    outline: none;
    border-radius: 3px;
    margin-top: 0.5rem;
    height: 1.7rem;
    background-color: rgb(95, 95, 95);
    color: white;
    font-size: 1.3rem;
  }
  .main-wrap{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(36, 36, 36);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .create-title{
    height: auto;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgb(59, 59, 59);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16rem;
  }
  .create-title .plan-title{
    font-size: 2rem;
  }
  .create-title label{
    color: lightgray;
    font-size: 1.5rem;
  }
  .create-plan-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .create-plan-wrap .inputs{
    width: 100%;
  }
  .create-plan-wrap .inputs label{
    font-size: 1.5rem;
  }
  .create-plan-wrap .inputs div{
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }
  .create-plan-wrap .inputs .image .file{
    width: 16rem;
    background: transparent;
    cursor: pointer;
  }

  .plan-image{
    margin-top: 2rem;
    width: 40rem;
    height: 30rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plan-image img{
    object-fit: fill;
    width: auto;
    height: 100%;
  }

  .plan-description{
    padding-top: 2rem;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .plan-description .description-head{
    display: flex;
    padding-bottom: 1rem;
  }
  .plan-description .description-head label{
    font-family: 'Bebas Neue', cursive;
    font-size: 1.6rem;
    text-align: left;
    width: 100%;
  }
  .plan-description .text p{
    font-size: 1.3rem;
    color: lightgray;
  }

  @media (max-width: 600px){
    .create-title label{
      font-size: 2rem;
    }
    .plan-image{
      width: 30rem;
      height: 20rem;
    }
  }
  @media (max-width: 450px){
    .plan-image{
      width: 24rem;
      height: 14rem;
    }
    .plan-description{
      padding-left: 5%;
      padding-right: 5%;
    }
  }
</style>