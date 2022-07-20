<template>
  <div class="container">
    <ul class="users-list">
      <li v-for="user in this.allUsers" :key="user.usr_id" @click="setActive(user)">
        <div>
          <div class="user-profile">
          <img :src="user.file_url" alt="">
          </div>
          <p><label>Name: </label>{{user.usr_name}}</p>
          <p><label>Username: </label>{{user.usr_username}}</p>
          <p><label>Birthday: </label>{{user.usr_bday}}</p>
        </div>
        <div>
          <button>Delete</button>
        </div>
      </li>
    </ul>
    <div class="create-container" v-if="false">

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getCurrentInstance} from "vue";


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
    },
    setActive(user){
      console.log(user.usr_id);
    }
  },
}
</script>

<style scoped>
  p label{
    pointer-events: none;
    color: rgb(230, 230, 230);
    font-family: 'Bebas Neue', cursive;
    font-size: 1.3rem;
  }
  p{
    pointer-events: none;
    font-size: 1.3rem;
  }

  .container{
    color: white;
    margin-left: 17rem;
    position: absolute;
    display: flex;
  }

  .users-list{
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .users-list p{
    pointer-events: none;
    margin-left: 2rem;
  }
  .users-list li{
    background-color: rgb(48, 48, 48);
    border-radius: 10px;
    box-shadow: 0 0 10px 0.5px rgb(0, 0, 0);
    width: 60rem;
    min-height: 5.5rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-top: 1px solid rgb(192, 192, 192); */
    border-bottom: 1px solid rgb(192, 192, 192);
  }
  .users-list li div{
    display: flex;
    align-items: center;
  }
  .users-list li button{
    margin-right: 1rem;
    width: 4rem;
    height: 3rem;
    border-radius: 10px;
    cursor: pointer;
  }
  .users-list .user-profile{
    pointer-events: none;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 4rem;
    height: 4rem;
    border: 2px solid rgb(192, 192, 192);
    border-radius: 100%;
  }
  .users-list .user-profile img{
    width: initial;
    max-width: none;
    height: inherit;
  }

  .create-container{
    position: fixed;
    right: 1.7rem;
    margin-top: 2rem;
    width: 37.3rem;
    height: 30rem;
    background-color: rgb(48, 48, 48);
    border-radius: 10px;
    box-shadow: 0 0 10px 0.5px rgb(0, 0, 0);
  }

  .item-active{
    height: 20rem;
    
  }
</style>