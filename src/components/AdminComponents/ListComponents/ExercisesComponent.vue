<template>
  <div class="exercises-container">
    <div class="title">
      <label>Exercises: </label>
    </div>
    <div class="tools-wrapper">
      <div class="tools">
        <div>
          <label>Level:</label>
          <select v-model="this.sortParams.level">
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>   
        <div class="search-bar">
          <label>Search: </label>
          <input type="text" v-model="sortParams.name">
        </div>
        <div>
          <button @click="getAllExercises({role: this.sortParams.role,
                                      sex: this.sortParams.sex,
                                      text: this.sortParams.text})">Submit</button>
          <button @click="reset()">reset</button>
          <button v-if="this.role == 1" @click="showCreate()">create exercise</button>
        </div>
      </div>
    </div>
    <div class="create-exercise-wrap" v-if="showCreateExe">
      <div class="inputs">
        <div>
          <label>Name: </label>
          <input type="text" v-model="exercise.name">
        </div>
         <div>
          <label>File: </label>
          <input type="file" @change="getFile($event)">
        </div>
         <div>
          <label>Description: </label>
          <input type="text" v-model="exercise.description">
        </div>
         <div>
          <label>Muscles: </label>
          <select multiple size="20" v-model="exercise.muscles">
            <option v-for="mus in allMuscles" :key="mus.mus_id" :value="mus.mus_id">{{mus.mus_name}}</option>
          </select>
        </div>
        <div>
          <label>Level: </label>
          <select v-model="exercise.level">
            <option value="1">Beginner</option>
            <option value="2">Normal</option>
            <option value="3">Expert</option>
            <option value="4">Universal</option>
          </select>
        </div>
        <div>
          <label>Goal: </label>
          <select v-model="exercise.goals" multiple size="5">
            <option value="1">Bulk</option>
            <option value="2">Shred</option>
            <option value="3">Cardio</option>
            <option value="4">Progression</option>
            <option value="4">Strenght</option>
          </select>
        </div>
        <button @click="createExercise()">submit</button>
        <button @click="hideCreate()">cancel</button>
      </div>
    </div>
    <ul class="exercises-list">
      <li v-for="(exercise, index) in this.allExercises" :key="exercise.exe_id" :id="index">
        <div class="exercise-info">
          <label class="exercise-name">{{exercise.exe_name}}</label>
          <div class="description">
              <p><label>Description: </label>{{exercise.exe_desc}}</p>
              <p><label>Muscles: </label>{{exercise.muscles}}</p>
          </div>
        </div>
        <div class="exercise-image">
          <img :src="exercise.file_url" alt="">
        </div>
        <div class="exercise-buttons"> 
          <div v-if="true">
            <button class="edit-exe-btn" v-if="this.role == 1" @click="showExerciseOptions(exercise)">Edit</button>
          </div>
        </div>
      </li>
      <div class="emptyListMessage" v-if="noExercises">
        <p>Sorry, there are no exercises with given filter parameters.</p>
      </div>
    </ul>
  </div>
  <router-view/>
</template>

<script>
import axios from 'axios'
import store from '../../../store'

export default {
  props:[

  ],
  mounted(){
    this.getAllExercises()
    this.getAllMuscles()
  },
  data(){
    return{
      allExercises: {},
      allMuscles: {},

      exercise:{
        name: '',
        file: '',
        description: '',
        muscles: [],
        level: '',
        goals: []
      },

      sortParams:{
        name: null,
        muscles: null,
        level: null 
      },

      noExercises: false,
      showCreateExe: false,
      role: store.getters.checkRole
    }
  },
  computed(){
    
  },
  methods:{
    showCreate(){
      this.showCreateExe = true
    },
    hideCreate(){
      this.showCreateExe = false
    },
    getFile(event){
      this.exercise.file = event.target.files[0]
      console.log(event.target.files[0]);
    },
    async createExercise(){
      let formdata = new FormData()
      for(let key in this.exercise){
        formdata.append([key], this.exercise[key]) 
      }

      await axios.post('http://783p122.e2.mars-hosting.com/7fit/exercises', formdata)
      .then(res => {
        console.log(res);
      })
      for(let key in this.exercise){
        this.exercise[key] = ''
      }
    },
    async getAllExercises(){
      const params = {};
      for (const key in this.sortParams) {
        if (this.sortParams[key] !== null && this.sortParams[key] !== '') {
          params[key] = this.sortParams[key];
        }
      }
      try {
        await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises', {
          params: params
        })
        .then(res => {
          console.log(res);
          this.allExercises = res.data.msg
          if(res.data.msg == ''){
            this.noExercises = true
          }
          else{
            this.noExercises = false
          }
        })
      }
      catch(error){
        console.log(error);
      }
    },
    async getAllMuscles(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/info/muscles') 
      .then(res => {
        console.log(res);
        this.allMuscles = res.data.muscles
      })
    },
    showExerciseOptions(exercise){
      this.$router.push({name: 'editExercise', params: {id: exercise.exe_id}})
    },
    reset(){
      for(let elem in this.sortParams){
        console.log(elem);
        this.sortParams[elem] = null
      }
      this.getAllExercises()
    }
  }
}
</script>

<style scoped>
  .edit-exe-btn{
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
  .edit-exe-btn:hover{
    background-color: #eb2626;
    color: white;
  }
  .create-exercise-wrap{
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }
  .create-exercise-wrap .inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .create-exercise-wrap .inputs div{
    margin-top: 1rem;
  }
  .exercise-info .exercise-name{
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  .exercise-info .description p{
    font-size: 1.1rem;
    margin-top: 1rem;
    color: lightgray;
  }
  .exercise-info .description p label{
    color: white;
  }

  .emptyListMessage{
    background-color: #eb2626;
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
  }

  .tools-wrapper{
    display: flex;
    justify-content: center;
  }
  .tools{
    display: flex;
    flex-direction: column;
  }

  button{
    height: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  } 
  label{
    font-size: 1.2rem;
    font-family: 'Roboto Condensed', sans-serif;
  }
  input{
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    border: 2px solid white;
    border-radius: 5px;
    outline: none;
    min-width: 7rem;
    height: 1.7rem;
    color: white;
    background-color: rgb(68, 68, 68);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .exercises-container{
    background-color: rgb(36, 36, 36);
    position: absolute;
    top: 0;
    padding-top: 5rem;
    width: 100%;
    min-height: 100vh;
  }

  .exercises-list{
    box-shadow: 0 0 10px 2px black;
    list-style: none;
    margin-top: 2rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  .exercises-list li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10rem;
    border-top: 1px solid rgb(145, 145, 145);
    background-color: rgb(56, 56, 56);
    padding-right: 16rem;
    padding-left: 16rem;
  }

  .exercise-info{
    width: 25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .exercise-image{
    width: 9rem;
    height: 9rem;
    box-shadow: 0 0 2px 2px rgb(41, 41, 41);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .exercise-image img{
    object-fit: cover;
    width: auto;
    height: 100%;
  }

  .title{
    display: flex;
    justify-content: center;
  }
  .title label{
    font-size: 1.7rem;
  }
  
  .tools{
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .fa-ellipsis-vertical{
    border-radius: 50%;
    position: relative;
    left: 1.3rem;
    top: 1rem;
    z-index: 2;
  }
  .fa-ellipsis-vertical:hover{
    background-position: center;
  }
  
  @media (max-width: 650px){
    .exercises-list{
      margin-left: 0;
    }
  }
  @media (max-width:1270px){
    .exercises-list li{
      padding-left: 10rem;
      padding-right: 10rem;
    }
  }
  @media (max-width:1090px){
    .exercises-list li{
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media (max-width:800px){
    .exercises-list li{
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
  @media (max-width:690px){
    .exercises-list li{
      flex-direction: column;
      height: auto;
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
    .exercise-image{
      margin-top: 1rem;
    }
    .exercise-buttons{
      padding-top: 1.5rem;
    }
    .exercise-info{
      width: 22rem;
    }
  }
</style>