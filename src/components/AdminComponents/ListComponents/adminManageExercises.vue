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
        </div>
      </div>
    </div>
    <ul class="exercises-list">
      <li v-for="(exercise, index) in this.allExercises" :key="exercise.exe_id" :id="index">
        <div class="info-wrapper">
          <div class="exercise-image">
            <img :src="exercise.file_url" alt="">
          </div>
          <div class="exercise-info">
            <div>
              <p>{{exercise.exe_name}}</p>
            </div>
            <div>
              <label>Description: </label>
              <p>{{exercise.exe_desc}}</p>
            </div>
          </div>
        </div>
        <span class="button-wrapper" @click="showExerciseOptions(exercise)">
          <i class="fa-solid fa-xl fa-ellipsis-vertical"></i>
        </span>
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

export default {
  props:[

  ],
  mounted(){
    this.getAllExercises();
  },
  data(){
    return{
      allExercises: [],

      sortParams:{
        name: null,
        muscles: null,
        level: null 
      },

      noExercises: false
    }
  },
  computed(){
    
  },
  methods:{
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
    justify-content: left;
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
    position: relative;
    background: transparent;
    padding-top: 2rem;
  }
  .exercises-list{
    box-shadow: 0 0 10px 2px black;
    list-style: none;
    margin-top: 2rem;
    max-width: 50rem;
  }
  .info-wrapper{
    display: flex;
    align-items: center;
  }
  .exercises-list .exercise-info div{
    display: flex;
    margin-left: 1rem;
    margin-top: 0.5rem;
    position: relative;
    bottom: 0.25rem;
  }
  .exercises-list li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    background: transparent;
    border-top: 1px solid rgb(145, 145, 145);
    background-color: rgb(65, 65, 65);
  }
  .exercise-image{
    margin-left: 5px;
    width: 8rem;
    height: 8rem;
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
  .exercise-info p{
    font-size: 1.2rem;
  }
  .exercise-info label{
    font-size: 1.2rem;
  }
  .title label{
    font-size: 1.7rem;
  }
  .tools{
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  .button-wrapper{
    margin-right: 1rem;
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    color: white;
  }
  .button-wrapper:hover{
    cursor: pointer;
    background-color: gray;
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
    .exercises-container{
      padding-top: 5rem;
    }
    .exercises-list{
      margin-left: 0;
    }
    .button-wrapper{
      z-index: 5;
    }
  }
</style>