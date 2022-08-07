<template>
  <div class="wrap">
    <div class="program-head">
      <label>Active plan</label>
      <button v-if="this.currentPlan == {}">add new program</button>
    </div>
    <div class="plan-name">
      <label>{{currentPlan.pla_name}}</label>
    </div>
    <div class="plan">
      <PlanDays :role="'admin'" :plan="currentPlan"/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import PlanDays from '../SharedComponents/PlanDaysComponent.vue'

export default {
  data(){
    return{
      currentPlan: {},
      currentPlanId: '35'
    }
  },
  components:{
    PlanDays
  },
  mounted(){
    this.getPlanById()
  },
  methods:{
     async getPlanById(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {id: this.currentPlanId}} )
      .then(res => {
        console.log(res);
        this.currentPlan = res.data.msg
      })
    },
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