<template>
  <div class="plans-container">
    <button @click="showCreate()">create new plan</button>
    <CreatePlan :showCreateContainer="showCreateContainer" v-if="false"/>
    <ul class="plans-list">
      <li v-for="(plan, index) in this.allPlans" :key="plan.exe_id" :id="index">
        <div class="plan-image">
          <img :src="plan.file_url" alt="">
        </div>
        <div class="plan-info">
          <div>
            <p>{{plan.pla_name}}</p>
          </div>
          <div class="description">
            <p>{{plan.pla_desc}}</p>
          </div>
        </div>
        <!-- <span class="button-wrapper" @click="showExerciseOptions(exercise)">
          <i class="fa-solid fa-xl fa-ellipsis-vertical"></i>
        </span> -->
      </li>
      <div class="emptyListMessage" v-if="noPlans">
        <p>Sorry, there are no exercises with given filter parameters.</p>
      </div>
    </ul>
  </div>
  <router-view/>
</template>

<script>
import axios from 'axios'

import CreatePlan from '../../SharedComponents/CreatePlan.vue'

export default {
  data(){
    return{
      showCreateContainer: false,
      
      allPlans: {},

      noPlans: false
    }
  },
  mounted(){
    this.getAllPlans()
  },
  methods:{
    async getAllPlans(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans')
      .then(res => {
        console.log(res);
        this.allPlans = res.data.msg
      })
    },
    showCreate(){
      this.showCreateContainer = !this.showCreateContainer
    },
  },
  components:{
    CreatePlan
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
  .plans-container{
    position: relative;
    background: transparent;
    padding-top: 2rem;
  }
  .plans-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 2rem;
  }
  .plan-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(36, 36, 36);
    position: relative;
    width: 100%;
    height: 5rem;
    box-shadow: 0 -20px 20px 10px rgb(36, 36, 36);
  }
  .plan-info .description p{
    color: lightgray;
    font-size: 1.2rem;
  }
  .plans-list .plan-info div{
    display: flex;
    margin-left: 1rem;
    margin-top: 0.5rem;
    position: relative;
    bottom: 0.25rem;
  }
  .plans-list li{
    cursor: pointer;
    overflow: hidden;
    margin: 1rem;
    width: 28rem;
    height: 23rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-top: 1px solid rgb(145, 145, 145);
    box-shadow: 0 0 10px 2px black;
    border-radius: 10px;
    background-color: rgb(65, 65, 65);
  }
  .plan-image{
    margin-left: 5px;
    width: 100%;
    height: 20rem;
    box-shadow: 0 0 2px 2px rgb(41, 41, 41);
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
  .plan-info p{
    font-size: 1.4rem;
  }
  .plan-info label{
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
    .plans-container{
      padding-top: 5rem;
    }
    .plans-list{
      margin-left: 0;
    }
    .button-wrapper{
      z-index: 5;
    }
  }
</style>