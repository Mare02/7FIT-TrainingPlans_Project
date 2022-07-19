<template>
  <div class="container">
    <ul class="users-list">
      <li v-for="user in this.allUsers" :key="user.usr_id">
        <div class="user-profile">
          <img :src="user.file_url" alt="">
        </div>
        <p>Name: {{user.usr_name}}</p>
        <p>Username: {{user.usr_username}}</p>
        <p>Birthday: {{user.usr_bday}}</p>
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
    }
  },
}
</script>

<style scoped>
  .container{
    color: white;
    margin-left: 17rem;
    position: absolute;
  }
  .users-list{
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .users-list p{
    margin-left: 2rem;
  }
  .users-list li{
    background-color: rgb(48, 48, 48);
    border-radius: 10px;
    box-shadow: 0 0 10px 0.5px gray;
    width: 60rem;
    height: 7rem;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(192, 192, 192);
    border-bottom: 1px solid rgb(192, 192, 192);
  }
  .users-list .user-profile{
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    border: 2px solid rgb(192, 192, 192);
    border-radius: 100%;
  }
  .users-list .user-profile img{
    width: initial;
    max-width: none;
    height: inherit;
  }
</style>