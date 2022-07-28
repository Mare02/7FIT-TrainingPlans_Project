<template>
  <div class="users-container">
    <div class="title">
      <label>Users: </label>
    </div>
    <div class="tools-wrapper">
      <div class="tools">
        <div>
          <label>Role:</label>
          <select v-model="this.sortParams.role">
            <option value="">All</option>
            <option value="1">Admin</option>
            <option value="2">Trainer</option>
            <option value="3">User</option>
          </select>
          <label>Gender:</label>
          <select v-model="this.sortParams.sex">
            <option value="">All</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>   
        <div class="search-bar">
          <label>Search: </label>
          <input type="text" v-model="sortParams.text">
        </div>
        <div>
          <button @click="getAllUsers({role: this.sortParams.role,
                                    sex: this.sortParams.sex,
                                    text: this.sortParams.text})">Submit</button>
          <button @click="reset()">reset</button>
        </div>
      </div>
    </div>
    
    <ul class="users-list">
      <li v-for="(user, index) in this.allUsers" :key="user.usr_id" :id="index">
        <div class="info-wrapper">
          <div class="user-profile">
            <img :src="user.file_url" alt="">
          </div>
          <div class="user-info">
            <div>
              <p>{{user.usr_name}}</p>
            </div>
            <div>
              <p>{{user.usr_email}}</p>
            </div>
          </div>
        </div>
        <span class="button-wrapper" @click="showUserOptions(user)">
          <i class="fa-solid fa-xl fa-ellipsis-vertical"></i>
        </span>
      </li>
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
    this.getAllUsers();
  },
  data(){
    return{
      allUsers: [],

      sortParams:{
        role: null,
        sex: null,
        text: ''
      },
    }
  },
  computed(){
    
  },
  methods:{
    async getAllUsers(){
      const params = {};
      for (const key in this.sortParams) {
        if (this.sortParams[key] !== null && this.sortParams[key] !== '') {
          params[key] = this.sortParams[key];
        }
      }
      try {
        await axios.get('http://783p122.e2.mars-hosting.com/7fit/users/filter', {params: params})
        .then(res => {
          console.log(res);
          this.allUsers = res.data.msg
        })
      } catch (error) {
        console.log(error);
      }
    },
    showUserOptions(user){
      this.$router.push({name: 'editUser', params: {id: user.usr_id}})
    },
    reset(){
      for(let elem in this.sortParams){
        console.log(elem);
        this.sortParams[elem] = null
      }
      this.getAllUsers()
    }
  }
}
</script>

<style scoped>
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
  .users-container{
    position: relative;
    background: transparent;
    padding-top: 2rem;
  }
  .users-list{
    list-style: none;
    margin-top: 2rem;
    max-width: 50rem;
  }
  .info-wrapper{
    display: flex;
    align-items: center;
  }
  .users-list .user-info div{
    display: flex;
    margin-left: 1rem;
    margin-top: 0.5rem;
    position: relative;
    bottom: 0.25rem;
  }
  .users-list li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    background: transparent;
    border-top: 1px solid rgb(145, 145, 145);
    background-color: rgb(65, 65, 65);
  }
  .user-profile{
    margin-left: 5px;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    box-shadow: 0 0 2px 2px rgb(41, 41, 41);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-profile img{
    object-fit: cover;
    width: auto;
    height: 100%;
  }
  .user-info p{
    font-size: 1.2rem;
    margin-left: 0.4rem;
  }
  .user-info label{
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
    .tools-wrapper{
      display: block;
    }
    .users-container{
      padding-top: 5rem;
    }
    .users-list{
      margin-left: 0;
    }
    .button-wrapper{
      z-index: 5;
    }
  }
</style>