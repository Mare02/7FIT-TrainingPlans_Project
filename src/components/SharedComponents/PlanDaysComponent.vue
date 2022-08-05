<template>
<div class="plan-days-container">
  <div class="plan-content-head">
    <label>Plan</label>
  </div>
  <button @click="emitAddDay()">add day</button>
  <div class="plan-content">
    <div v-for="day in this.plan.days" :key="day.day_id" :id="day.day_id" class="day-wrap" >
      <div class="day-head">
        Day {{day.day_number}}
        <div>
          <button @click="removeDay(day.day_id)">remove</button>
          <button @click="showSet($event)" id="showset">add set</button>
        </div>
        <!-- <input type="checkbox" class="checkbox" :id="day.day_id+'check'" :checked="day.day_completed"> -->
      </div>
      <ul class="sets-container">
        <li v-for="set in day.sets" :key="set.set_id">
          <p>- {{set.exe_name}}</p>
          <div>
            {{set.set_reps}} reps
            <button @click="emitRemoveSet(set.set_id)">remove</button>
          </div>
        </li>
        <div class="set-inputs" :id="set.set_id+'set'">
          <select v-model="set.exe_id">
            <option v-for="exe in this.allExercises" :key="exe.exe_id" :value="exe.exe_id">{{exe.exe_name}}</option>
          </select> <br>
          reps:<input type="number" v-model="set.reps"> <br>
          duration:<input type="number" v-model="set.duration"> <br>
          rest:<input type="number" v-model="set.rest"> <br>
          desc:<input type="text" v-model="set.description"> <br>
          <button @click="addSet()">add</button>
        </div>
        
      </ul>
    </div>
  </div>
</div>
  
</template>

<script>
import axios from 'axios'

export default {
  props: [
    'plan'
  ],
  data(){
    return{
      completed: true,
      allExercises: {},

      currentDayId: '',

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
  },
  updated(){
    
  },
  methods:{
    showSet(event){
      let id = event.target.parentElement.parentElement.parentElement.id
      this.currentDayId = id
      let elem = document.getElementById(id)
      let elem2 = elem.querySelector('.sets-container').querySelector('.set-inputs')
      if(elem2.style.display != 'block'){
        elem2.style.display = 'block'
      }
      else{
        elem2.style.display = 'none'
      }
      
    },
    async addSet(){
      await axios.post('http://783p122.e2.mars-hosting.com/7fit/plans/days/sets', {day_id: this.currentDayId,
                                                                                  exe_id: this.set.exe_id,
                                                                                  description: this.set.description,
                                                                                  duration: this.set.duration,
                                                                                  reps: this.set.reps,
                                                                                  rest: this.set.rest})
      .then(res => {
        console.log(res);
      })
      for(let key in this.set){
        this.set[key] = ''
      }
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
    emitRemoveDay(payload){
      this.$emit('remove', payload)
    },
    emitAddDay(){
      this.$emit('add')
    },
    emitAddSet(){
      this.$emit('addSet')
    },
    emitRemoveSet(payload){
      this.$emit('removeSet', payload)
    }
  }
}
</script>

<style scoped>
  .block{
    display: block;
  }
  .set-inputs{
    display: none;
  }
  .checkbox{
    height: 1.8rem;
    width: 1.8rem;
    background-color: green;
  }
  button{
    height: 1.8rem;
    font-size: 1.1rem;
    cursor: pointer;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  } 
  input{
    color: black;
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
    height: 17rem;
    width: 17rem;
    display: flex;
    flex-direction: column;
    align-items: left;
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
    font-size: 1.2rem;
  }

  .sets-container{
    list-style: none;
  }
  .sets-container li{
    padding-left: 1rem;
    /* padding-right: 1rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(70, 70, 70);
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
      width: 95%;
    }
  }
</style>