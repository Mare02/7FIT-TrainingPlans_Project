<template>
  <div class="wrap">
    <div class="main-plan-container">
      <div class="create-plan-container">
        <div>
          <label>Name: </label>
          <input type="text" v-model="plan.name">
        </div>
        <div>
          <label>Description: </label>
          <input type="text" v-model="plan.description">
        </div>
        <div>
          <label>Goal:</label>
          <select v-model="plan.goal">
            <option value="1">Bulk</option>
            <option value="2">Shred</option>
            <option value="3">Cardio</option>
            <option value="4">Progression</option>
            <option value="5">Strenght</option>
          </select>
        </div>   
        <div>
          <label>Level:</label>
          <select v-model="plan.level">
            <option value="1">Beginner</option>
            <option value="2">Normal</option>
            <option value="3">Expert</option>
            <option value="4">Universal</option>
          </select>
        </div> 
        <div>
          <label>Plan image: </label>
          <input type="file" @change="getFile($event)">
        </div>
        <div>
          <button @click="createPlan()">create</button>
          
          <router-link to="/admin/manage-plans">
            <button @click="deletePlan()">cancel</button>
          </router-link>
        </div>  
      </div>
      <div class="create-plan-wrap">
        <div class="plan-container"> 
          <p class="plan-name">{{currentPlan.pla_name}}</p>
          <button @click="addDay()">add day</button>
          <ul class="days-list" >
            <li v-for="day in this.allDays" :key="day.day_id"  :id="day.day_id">
                <p>Day {{day.day_number}}</p>
                <div>
                  <ul>
                    <li v-for="set in allSets" :key="set.set_id">

                    </li>
                  </ul>
                  <button @click="showAddSet($event)">add set</button>
                  <button @click="removeDay($event)">Remove day</button>
                </div>              
            </li>
          </ul>
        </div>
        <router-link to="/admin/manage-plans">
            <button>Submit Plan</button>
          </router-link>
        <div class="add-set-wrap" v-if="showAddSetWrap">
          
          <p>Add set:</p>
          <br>
          <div>
            <label>Exercise: </label>
            <select v-model="set.exe_id">
              <option v-for="exe in allExercises" :key="exe.exe_id" :value="exe.exe_id">{{exe.exe_name}}</option>
            </select>
          </div>
          <div>
            <label>Description: </label>
            <input type="text" v-model="set.description">
          </div>
          <div>
            <label>Duration: </label>
            <input type="number" v-model="set.duration">
          </div>
          <div>
            <label>Reps: </label>
            <input type="number" v-model="set.reps">
          </div>
          <div>
            <label>Rest: </label>
            <input type="number" v-model="set.rest">
          </div>
          <div>
            <button @click="addSet()">add to plan</button>
            <button @click="cancelAddSet()">cancel</button>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      allDays: {},
      allSets: {},
      allExercises: {},

      currentPlan: {},

      showAddSetWrap: false,

      currentPlanId: '',
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
    async removeDay(event){
      let id = event.target.parentElement.parentElement.id;
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
  .wrap{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgb(41, 41, 41);
  }
  .create-plan-wrap{
    display: flex;
  }
  .plan-container{
    margin-top: 5rem;
    height: auto;
    width:30rem;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px;
    background-color: rgb(27, 27, 27);
  }
  .add-set-wrap{
    margin-top: 10rem;
    margin-left: 1rem;
    background-color: rgb(63, 63, 63);
    border: 1px solid white;
  }
  .days-list{
    list-style: none;
  }
  .days-list li{
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    cursor: pointer;
    background-color: rgb(99, 99, 99);
    min-height: 2rem;
  }
  .days-list li:hover{
    background-color: gray;
  }
  .sets-list{
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  .active{
    height: 6rem;
  }
</style>