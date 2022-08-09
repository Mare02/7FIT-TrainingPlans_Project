<template>
  <div class="plans-container">
    <div class="tools-wrapper">
      <div class="tools">
        <div>
          <label>Goal:</label>
          <select v-model="sortParams.goal">
            <option value="">All</option>
            <option value="1">Bulk</option>
            <option value="2">Shred</option>
            <option value="3">Cardio</option>
            <option value="4">Progression</option>
            <option value="5">Strenght</option>
          </select>
        </div>   
        <div>
          <label>Level:</label>
          <select v-model="sortParams.level">
            <option value="">All</option>
            <option value="1">Beginner</option>
            <option value="2">Normal</option>
            <option value="3">Expert</option>
            <option value="4">Universal</option>
          </select>
        </div>   
        <div class="search-bar">
          <label>Search: </label>
          <input type="text" v-model="sortParams.text">
        </div>
        <div>
          <button @click="getAllPlans()">Submit</button>
          <button @click="reset()">reset</button>
          <button @click="redirectToCreate()">create new plan</button>
        </div>   
      </div>
    </div>
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
          <div class="plan-buttons"> 
            <div>
              <button @click="showPlanOptions(plan)">view details</button>
            </div>
          </div>
        </div>
      </li>
      <div class="emptyListMessage" v-if="noPlans">
        <p>Sorry, there are no exercises with given filter parameters.</p>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      showCreate: false,
      noPlans: false,
      
      allPlans: {},

      sortParams: {
        goal: '',
        level: '',
        text: ''
      },
    }
  },
  mounted(){
    this.getAllPlans()
  },
  methods:{

    async getAllPlans(){
      const params = {};
      for (const key in this.sortParams) {
        if (this.sortParams[key] !== null && this.sortParams[key] !== '') {
          params[key] = this.sortParams[key];
        }
      }
      try {
        await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: params})
        .then(res => {
          console.log(res);
          this.allPlans = res.data.msg
        })
      } catch (error) {
        console.log(error);
      }
      
    },
    reset(){
      for(let elem in this.sortParams){
        this.sortParams[elem] = null
      }
      this.getAllPlans()
    },
    redirectToCreate(){
      this.$router.push({name: 'createPlan'})
    },
    showPlanOptions(plan){
      this.$router.push({name: 'editPlan', params: {id: plan.pla_id}})
    },
  },
  components:{

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
  .plans-container{
    position: absolute;
    width: 100%;
    top: 0;
    background-color: rgb(36, 36, 36);
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
    background-color: rgb(61, 61, 61);
    position: relative;
    width: 100%;
    min-height: 8rem;
    /* box-shadow: 0 -15px 30px 20px rgb(53, 0, 0); */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 2px solid gray;
  }
  .plan-buttons{
    display: flex;
    align-items: center;
  }
  .plan-info .description p{
    color: lightgray;
    font-size: 1.2rem;
  }
  .plans-list .plan-info div{
    display: flex;
    margin-top: 0.5rem;
    position: relative;
    bottom: 0.25rem;
  }
  .plans-list li{
    cursor: pointer;
    overflow-x: hidden;
    margin: 2rem;
    width: 26rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-top: 1px solid rgb(145, 145, 145);
    border-bottom: 1px solid rgb(88, 88, 88);
    box-shadow: 0 0 10px 2px rgb(27, 27, 27);
    border-radius: 10px;
    background-color: rgb(61, 61, 61);
  }
  .plan-image{
    width: 100%;
    height: 22rem;
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
    font-size: 1.8rem;
  }
  .plan-info label{
    font-size: 1.5rem;
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