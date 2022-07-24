<template>
  <div class="container">
    <div class="title">
      <label>Users</label>
    </div>
    <div class="tools">
      <label>Role:</label>
      <select>
        <option value="admin">Admin</option>
        
      </select>
    </div>
    <ul class="users-list">
      <li v-for="(user, index) in this.allUsers" :key="user.usr_id" :id="index">
        <div>
          name: {{user.usr_name}}
          role: {{user.usr_role}}
        </div>
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
  .container{
    position: relative;
    margin-left: 12rem;
    background: transparent;
  }
  .users-list{
    list-style: none;
  }
  .users-list li{
    height: 4.5rem;
    width: 40rem;
    background: transparent;
    border-top: 1px solid rgb(145, 145, 145);
  }

  @media (max-width: 650px){
    .container{
      margin-left: 1rem;
      padding-top: 5rem;
    }
  }
</style>