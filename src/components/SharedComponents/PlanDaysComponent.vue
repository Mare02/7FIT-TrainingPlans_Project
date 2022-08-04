<template>
<div class="plan-days-container">
  <div class="plan-content-head">
    <label>Plan</label>
  </div>
  <div class="plan-content">
    <div v-for="day in this.plan.days" :key="day.day_id" :id="day.day_id" class="day-wrap">
      <div class="day-head">
        Day {{day.day_number}}
        <button @click="emitRemove(day.day_id)">remove</button>
      </div>
      
      <div v-for="set in day.sets" :key="set.exe_id">
        {{set.exe_id}}
      </div>
      
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  props: [
    'plan'
  ],
  methods:{
    emitRemove(payload){
      this.$emit('remove', payload)
    }
  }
}
</script>

<style scoped>
  button{
    height: 1.8rem;
    font-size: 1.1rem;
    cursor: pointer;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
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
    height: 10rem;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(95, 95, 95);
    margin: 5px;
    transition: all 0.5s;
  }
  .day-head{
    background-color: gray;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
  }

  @media (max-width: 700px){
    .plan-content{
      width: 100%;
    }
    .day-wrap{
      margin: 4px;
      height: 14rem;
      width: 11.7rem;
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
</style>