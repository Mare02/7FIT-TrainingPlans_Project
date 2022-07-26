<template>
  <div class="exercises-container">
    <div class="title">
      <label>Exercises: </label>
    </div>
    <div class="tools">
      <!-- <div>
        <label>Role:</label>
        <select v-model="this.sortParams.role">
          <option value="1">Admin</option>
          <option value="2">Trainer</option>
           <option value="3">User</option>
        </select>
      </div> -->
      <button @click="getAllExercises({name: this.sortParams.name,
                                    })">Sort</button>
      <div>
        <label>search: </label>
        <input type="text" v-model="sortParams.name">
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
        <span class="button-wrapper">
          <i class="fa-solid fa-xl fa-ellipsis-vertical"></i>
        </span>
      </li>
    </ul>
  </div>
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
        name: '' 
      }
    }
  },
  computed(){
    
  },
  methods:{
    async getAllExercises(param){
      console.log(param);
      try {
        if(param === undefined){
          await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises')
          .then(res => {
            console.log(res);
            this.allExercises = res.data.msg
          })
        }
        if(param !== undefined){
          await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises', {
            params: param
          })
          .then(res => {
            console.log(res);
            this.allExercises = res.data.msg
          })
        }
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
  label{
    font-family: 'Roboto Condensed', sans-serif;
  }
  .tools input{
    color: black;
  }
  .exercises-container{
    position: relative;
    background: transparent;
    padding-top: 2rem;
  }
  .exercises-list{
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
    font-family: 'Bebas Neue', cursive;
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