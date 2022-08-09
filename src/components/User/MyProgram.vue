<template>
  <div class="wrap">
    <div class="program-head">
      <label>Active plan</label>
      <button @click="redirectToPlans()" v-if="activePlanId == ''">add new program</button>
    </div>
    <div v-if="activePlanId == ''">
      there are no active plans
    </div>
    <div class="plan-name">
      <label>{{activePlan.pla_name}}</label>
    </div>
    <button v-if="activePlanId != ''" @click="finishPlan()">finish plan</button>
    <div class="plan">
      <PlanDays v-if="activePlanId != ''" :role="3" :plan="activePlan"/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import PlanDays from '../SharedComponents/PlanDaysComponent.vue'
import getUser from '../../exports/user'

export default {
  data(){
    return{
      activePlan: {},
      activePlanId: '',
      activeUserId: '',
    }
  },
  components:{
    PlanDays
  },
  mounted(){
    this.getCurrentUser()
    this.getPlanById()
  },
  methods:{
     async getPlanById(){
       if(this.activePlanId != ''){
         await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {id: this.activePlanId}})
        .then(res => {
          console.log(res);
          this.activePlan = res.data.msg
        })
       }
      
    },
    async getCurrentUser(){
      let res = await getUser()
      this.activeUserId = res.data.msg.id
      
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/training', {params: {usr_id: this.activeUserId}})
      .then(res => {
        console.log(res);
        if(res.status == 200){
          this.activePlanId = res.data.msg.pla_id
        }
      })
      this.getPlanById()
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
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
  }
  .program-head label{
    color: lightgray;
  }

  .plan-name{
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .plan{
    width: 100%;
  }
</style>