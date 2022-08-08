<template>
  <div class="single-plan-container">
    <div class="title">
      <div>
        <p>{{plan.pla_name}}</p>
        <label>Workout plan</label>
      </div>
    </div>
    <div class="wrap">
      <div class="plan-image">
        <img :src="plan.file_url" alt="">
      </div>
      <div class="plan-description">
        <div class="description-head">
          <label>PLAN DESCRIPTION</label>
        </div>
        <div class="text">
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni mollitia alias iusto sint id quis a reiciendis illo. Sequi, sint et modi maiores at expedita ex eaque quidem fugiat? </p>
        </div>
      </div>
      <div>
        <button class="save-plan-btn" @click="savePlan()">start plan</button>
      </div>
    </div>
    <PlanDays :plan="plan"/>
  </div>
  
</template>

<script>
import Navbar from '../../SharedComponents/NavbarComponent.vue'
import PlanDays from '../../SharedComponents/PlanDaysComponent.vue'
import axios from 'axios'

export default {
  components:{
    Navbar, PlanDays
  },
  data(){
    return{
      plan: {}
    }
  },
  mounted(){
    this.getPlanById()
  },
  methods: {
    async getPlanById(){
      try {
        await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {id: this.$route.params.id}})
        .then(res => {
          console.log(res);
          this.plan = res.data.msg
        })
      } catch (error) {
        console.log(error);
      }
    },
    async savePlan(){
      await axios.post('http://783p122.e2.mars-hosting.com/7fit/training', {usr_id: 2,
                                                                            pla_id: this.$route.params.id})
      .then(res => {
        console.log(res);
      })
    },
  },
}
</script>

<style scoped>
  .save-plan-btn{
    background-color: rgb(155, 19, 19);
    color: white;
    border: none;
    border-radius: 5px;
    height: 2.4rem;
    width: 10rem;
    font-size: 1.4rem;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .save-plan-btn:hover{
    background-color: #eb2626;
  }
  .single-plan-container{
    width: 100%;
    height: 100vh;
    background-color: rgb(36, 36, 36);
    color: white;
    overflow-x: hidden;
  }

  .title{
    width: 100%;
    height: 7rem;
    background-color: rgb(59, 59, 59);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
  .title p {
    font-size: 2.8rem;
  }
  .title div label{
    font-family: 'Bebas Neue', cursive;
    color: lightgray;
    font-size: 1.4rem;
  }

  .wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
  }

  .plan-image{
    width: 40rem;
    height: 30rem;
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

  .plan-description{
    padding-top: 2rem;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .plan-description .description-head{
    display: flex;
    padding-bottom: 1rem;
  }
  .plan-description .description-head label{
    font-family: 'Bebas Neue', cursive;
    font-size: 1.6rem;
    text-align: left;
    width: 100%;
  }
  .plan-description .text p{
    font-size: 1.3rem;
    color: lightgray;
  }

  @media (max-width: 700px){
    .plan-image{
      width: 30rem;
      height: 20rem;
    }
    .wrap{
      padding-left: 5%;
      padding-right: 5%;
    }
    .title p{
      font-size: 2.2rem;
    }
  }
  @media (max-width: 600px){
    .plan-description .description-head label{
      font-size: 1.5rem;    
    }
    .plan-description .text p{
      font-size: 1.2rem;
    }
    .plan-description{
      padding-left: 5%;
      padding-right: 5%;
    }
  }
  @media (max-width: 500px){
    .plan-image{
      width: 27rem;
      height: 17rem;
    }
  }
</style>