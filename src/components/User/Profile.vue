<template>
  <div class="main">
    <div class="profile-title">
      <p>Profile</p>
    </div>
    <div class="content-wrap">
      <div class="user-details">
        <div class="user-picture">
          <img :src="user.file_url" alt="">
        </div>
        <div class="name">
          <p>{{user.usr_name}}</p>
        </div>
        <div class="user-info">
          <div>
            <label>Age: </label>
            <p>{{user.age}}</p>
          </div>
          <div>
            <label>Height: </label>
            <p>{{user.usr_height}}cm</p>
          </div>
          <div>
            <label>Weight: </label>
            <p>{{user.usr_weight}}kg</p>
          </div>
          <div>
            <label>Goal: </label>
            <p>{{user.goa_name}}</p>
          </div>
        </div>
        <div class="user-menu">
          <router-link to="/profile/my_program">
            <div>
              My program
            </div>
             <div>
              >
            </div>
          </router-link>
          <router-link to="/profile/my_details">
            <div>
              My details
            </div>
             <div>
              >
            </div>
          </router-link>
        </div>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store';

export default {
  components: {
    
  },
  data(){
    return{
      user: {}
    }
  },
  mounted(){
    this.getUserById()
  },
  methods:{
    async getUserById(){
      const id = store.getters.checkUserId
 
      try {
        const res = await axios.get('http://783p122.e2.mars-hosting.com/7fit/users/filter?id=' + id)
        console.log(res);
        this.user = res.data.msg[0]
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
  .main {
    background-color: rgb(36, 36, 36);
    color: white;
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
  }

  .profile-title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    height: 6rem;
    width: 100%;
    background-color: rgb(59, 59, 59);
  }
  .profile-title p{
    font-size: 2.5rem;
  }

  .content-wrap{
    /* padding-left: 10%;
    padding-right: 10%; */
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items:flex-start;
  }

  .user-details{
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .user-details .name{
    margin-top: 2.5rem;
    font-size: 1.5rem;
  }

  .user-picture{
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 2px solid lightgray;
    background-color: rgb(58, 58, 58);
    position: relative;
    top: 1.8rem;
  }
  .user-picture img{
    object-fit: cover;
    height: 100%;
    width: auto;
    display: block;
    cursor: pointer;
  }

  .user-info{
    width: 100%;
    margin-top: 1rem;
  }
  .user-info div{
    height: 3rem;
    border-bottom: 1px solid gray;
    font-size: 1.3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-menu{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  .user-menu a{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.3rem;
    height: 3rem;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: rgb(180, 180, 180);
  }
  .user-menu a:hover{
    color: white;
  }
  .user-menu .router-link-active{
    color: white;
  }

  .content{
    margin-top: 1rem;
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 800px){
    .content-wrap{
      flex-direction: column;
      align-items: center;
    }
    .content{
      margin-top: 3rem;
    }
    .profile-title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
      height: 4rem;
      width: 100%;
      background-color: rgb(59, 59, 59);
    }
    .profile-title p{
      font-size: 2rem;
    }
    .user-picture{
      width: 8rem;
      height: 8rem;    
    }
  }
</style>