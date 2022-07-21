<template>
<div>
  <div class="container">
    <div class="title">
      <p>All users:</p>
    </div>
    <ul class="users-list">
      <li v-for="(user, index) in this.allUsers" :key="user.usr_id" @click="setActive(index)" :id="index">
        <div class="item-inactive" v-if="showExtraInfo !== index">
          <div class="user-profile">
            <img :src="user.file_url" alt="">
          </div>
          <p><label>Name: </label>{{user.usr_name}}</p>
          <p><label>Username: </label>{{user.usr_username}}</p>
        </div>
        <div class="item-active" v-if="showExtraInfo === index">
          <div class="user-profile-active">
            <img :src="user.file_url" alt="">
          </div>
          <div>
            <p><label>Name: </label>{{user.usr_name}}</p>
            <p><label>Username: </label>{{user.usr_username}}</p>
            <p><label>Email: </label>{{user.usr_email}}</p>
            <p><label>Birthday: </label>{{user.usr_bday}}</p>  
            <p><label>Joined: </label>{{user.usr_joined}}</p>
          </div>  
        </div>
      </li>
    </ul>
    <div class="create-container" v-if="false">

    </div>
  </div>
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
      showExtraInfo: null,
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
    setActive(index){
      this.showExtraInfo == index ? this.showExtraInfo = null : this.showExtraInfo = index
    }
  },
}
</script>

<style scoped>
  p label{
    pointer-events: none;
    color: rgb(230, 230, 230);
    font-family: 'Bebas Neue', cursive;
    font-size: 1.4rem;
  }
  p{
    pointer-events: none;
    font-size: 1.4rem;
  }

  .title{
    width: 100%;
    display: flex;
    justify-content: left;
  }
  .title p{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2rem;
    color: white;
  }

  .container{
    color: white;
    margin-left: 18rem;
    margin-top: 1rem;
    padding-left: 1rem;
    position: absolute;
  }

  .users-list{
    margin-right: 2rem;
    list-style: none;
    
  }

  .users-list li {
    background-color: rgb(48, 48, 48);
    box-shadow: 0 0 10px 0.5px rgb(0, 0, 0);
  }
  .users-list li:hover{
    background-color: rgb(62, 62, 62);
    cursor: pointer;
  }
  .item-inactive{
    min-height: 5.5rem;
    width: 50rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .item-inactive p{
    pointer-events: none;
    margin-left: 2rem;
  }
  .item-active{
    height: 20rem;
    border-radius: 10px;
    width: 50rem;
    margin-top: 1rem;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: rgb(62, 62, 62);
    border-top: 2px solid #eb2626;
    border-bottom: 2px solid #eb2626;
    transition: height 2s;
  }
  .item-active p{
    margin-top: 1rem;
  }
  .item-active div{
    margin-right: 2rem;
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
  .users-list .user-profile-active{
    pointer-events: none;
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 8rem;
    height: 8rem;
    border: 2px solid rgb(192, 192, 192);
    border-radius: 100%;
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
</style>