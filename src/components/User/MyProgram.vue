<template>
  <div class="wrap">
    <div class="program-head">
      <label>Active plan</label>
    </div>
    <div v-if="activePlan != {}" class="no-plans-msg">
      <p>There are no currently active plans.</p>
      <button class="get-plan-btn" @click="redirectToPlans()" v-if="Object.keys(activePlan).length == 0">get plan</button>
    </div>
    <div class="plan-name">
      <label>{{activePlan.pla_name}}</label>
    </div>
    <div class="finish" v-if="Object.keys(activePlan).length != 0">
      <button @click="finishPlan()">finish plan</button>
    </div>
    <div class="plan">
      <PlanDays @refresh="this.getCurrentUser()" v-if="Object.keys(activePlan).length != 0" :allowTracking="true" :role="3" :plan="activePlan"/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import PlanDays from '../SharedComponents/PlanDaysComponent.vue'
import store from '../../store'

export default {
  data(){
    return{
      activePlan: {},
      activeUserId: store.getters.checkUserId,
    }
  },
  components:{
    PlanDays
  },
  mounted(){
    this.getCurrentUser()
  },
  methods:{
    async getCurrentUser(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/training', {params: {usr_id: this.activeUserId}})
      .then(res => {
        console.log(res);
        if(res.status == 200){
          this.activePlan = res.data.msg
        }

      })
    },
    async finishPlan(){
      await axios.put('http://783p122.e2.mars-hosting.com/7fit/training', {usr_id: this.activeUserId,
                                                                          end_plan: 1312})
      .then(res => {
        if(res.status == 200){
          location.reload()
        }
      })
    },
    redirectToPlans(){
      this.$router.push({name: 'Plans'})
    }
  }
}
</script>

<style scoped>
  .no-plans-msg{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  .no-plans-msg p{
    font-size: 1.4rem;
  }
  .finish{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
  }
  .finish button{
    cursor: pointer;
    width: 9rem;
    height: 2.2rem;
    font-size: 1.5rem;
  }
  .wrap{
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    height: auto;
  }

  .program-head{
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
  }
  .program-head label{
    color: lightgray;
  }
  .get-plan-btn{
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 1.2rem;
    border-radius: 5px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border: none;
    margin-top: 1rem;
  }
  .get-plan-btn:hover{
    background-color: #eb2626;
    color: white;
  }

  .plan-name{
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
  }

  .plan{
    width: 100%;
  }
</style>