<template>
  <div class="users-container">
    <div class="title">
      <label>Users: </label>
    </div>
    <!-- <div class="tools">
      <div>
        <label>Role:</label>
        <select>
          <option value="admin">Admin</option>
          <option value="coach">Coach</option>
        </select>
      </div>
      <div>
        <label>search: </label>
        <input type="text">
      </div>
    </div> -->
    <ul class="users-list">
      <li v-for="(user, index) in this.allUsers" :key="user.usr_id" :id="index">
        <div class="info-wrapper">
          <div class="user-profile">
            <img :src="user.file_url" alt="">
          </div>
          <div class="user-info">
            <div>
              <label>name: </label>
              <p>{{user.usr_name}}</p>
            </div>
            <div>
              <label>email: </label>
              <p>{{user.usr_email}}</p>
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
    this.getAllUsers();
  },
  data(){
    return{
      allUsers: []
    }
  },
  computed(){
    
  },
  methods:{
    async getAllUsers(){
      try {
        axios.get('http://783p122.e2.mars-hosting.com/7fit/users')
        .then(res => {
           console.log(res);
           this.allUsers = res.data.users
        })
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>
  label{
    font-family: 'Bebas Neue', cursive;
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
  }
  .user-profile{
    margin-left: 5px;
    border-radius: 100%;
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
  .title label{
    font-size: 1.5rem;
  }
  .tools{
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  .button-wrapper{
    margin-right: 1.5rem;
    border-radius: 100%;
  }
  .button-wrapper:hover{
    color: red;
    cursor: pointer;
    background-color: gray;
  }
  
  @media (max-width: 650px){
    .users-container{
      padding-top: 5rem;
    }
    .users-list{
      margin-left: 0;
    }
  }
</style>