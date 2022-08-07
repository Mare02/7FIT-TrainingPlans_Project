<template>
  <div class="wrap-details">
    <div class="details-head">
      <label>Details</label>
    </div>
    <div class="item-wrap">
      <label>Name: </label>
      <input type="text" v-model="user.name">
    </div>
    <div class="item-wrap">
      <label>Username:</label>
      <input type="text" v-model="user.username">
    </div>
    <div class="item-wrap">
      <label>Email:</label>
      <input type="text" v-model="user.email">
    </div>
    <div class="item-wrap">
      <label>Gender: </label>
      <select v-model="user.sex">
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
    </div>
    <div class="item-wrap">
      <label>Age: </label>
      <input type="number" v-model="user.age">
    </div>
    <div class="item-wrap">
      <label>Height: </label>
      <input type="number" v-model="user.height">
    </div>
    <div class="item-wrap">
      <label>Weight: </label>
      <input type="number" v-model="user.weight">
    </div>
    <div class="item-wrap">
      <label>Goal: </label>
      <select v-model="user.goal">
        <option value="1">Bulk</option>
        <option value="2">Shred</option>
        <option value="3">Cardio</option>
        <option value="4">Progression</option>
        <option value="4">Strenght</option>
      </select>
    </div>
    <button>save</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      user:{
        name: '',
        username: '',
        email: '',
        sex: '',
        age: '',
        height: '',
        weight: '',
        goal: ''
      }
    }
  },
  mounted(){
    this.getUserById()
  },
  methods:{
    async getUserById(){
      const id = 2
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/users/filter?id=' + id)
      .then(res => {
        console.log(res);
        let result = res.data.msg[0]
        console.log(result);
        this.user.name = result.usr_name
        this.user.username = result.usr_username
        this.user.email = result.usr_email
        this.user.sex = result.sex_id
        this.user.age = result.age
        this.user.height = result.usr_height
        this.user.weight = result.usr_weight
        this.user.goal = result.goa_id
      })
    }
  }
}
</script>

<style scoped>
  .wrap-details{
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    height: 100vh;
    padding-left: 10%;
    padding-right: 10%;
  }
  .wrap-details button{
    background-color: rgb(155, 19, 19);
    color: white;
    border: none;
    border-radius: 5px;
    height: 2.4rem;
    font-size: 1.6rem;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .wrap-details button:hover{
    background-color: #eb2626;
  }

  .details-head{
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .details-head label{
    color: lightgray;
  }

  .item-wrap{
    border-radius: 5px;
    margin-top: 1rem;
    width: 100%;
    height: 5rem;
    background-color: rgb(59, 59, 59);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
  }
  .item-wrap label{
    font-size: 1.1rem;
    color: lightgray;
  }
  .item-wrap input{
    padding-left: 0.5rem;
    border-radius: 3px;
    border: none;
    outline: none;
    margin-top: 0.5rem;
    height: 1.7rem;
    background-color: rgb(95, 95, 95);
    font-size: 1.2rem;
  }
  .item-wrap select{
    outline: none;
    border-radius: 3px;
    margin-top: 0.5rem;
    height: 1.7rem;
    background-color: rgb(95, 95, 95);
    color: white;
    font-size: 1.2rem;
  }
</style>