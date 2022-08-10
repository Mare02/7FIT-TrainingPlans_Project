<template>
  <nav class="nav-home">
    <div>
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="list-div">
      <ul class="nav-list">
        <li class="nav-menu">
          <button>menu</button>
          <ul>
            <li>
              <a href="/homelog">Home</a>
            </li>
            <li>
              <a href="/profile/my_program">Profile</a>
            </li>
            <li>
              <a href="/exercises">Exercises list</a>
            </li>
            <li>
              <a href="/plans">See all plans</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <div v-if="this.role == 1">
              <li class="line"></li>
              <p>Admin settings:</p>
              <li>
                <a href="/admin/users">Users</a>
              </li>
              <!-- <li>
                <a href="/admin/statistics">Statistics</a>
              </li> -->
            </div>
          </ul>
        </li>
        <li v-if="this.isLoggedIn == true">
          <a style="cursor: pointer;" class="nav-item" @click="logOut()">log out</a>
        </li>
        <li v-if="this.isLoggedIn == false">
          <a href="/login" style="cursor: pointer;" class="nav-item">log in</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  props:[
    'role',
    'isLoggedIn'
  ],
  data(){
    return{
      
    }
  },
  mounted(){
    
  },
  methods:{
    async logOut(){
      await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/logout', {sid: localStorage.getItem('sid')})
      .then(res => {
        console.log(res);
        if(res.status == 200){
          localStorage.clear()
          this.$router.push({name: 'Login'})
        }
      })
    },
  }
}
</script>

<style scoped>
  .nav-home{
    font-family: 'Bebas Neue', cursive;
    position: fixed;
    top: 0;
    height: 4.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }
  .nav-home img{
    width: 7rem;
    margin-left: 1rem;
    margin-top: 4px;
  }
  .nav-list{
    font-size: 1.8rem;
    display: flex;
    color: white;
    list-style: none;
  }
  .nav-list li {
    position: relative;
    color: white;
    text-decoration: none;
    margin-left: 1.5rem;
    text-shadow: 0 0 10px black;
  }
  .nav-list .nav-menu .line{
    height: 0.1rem;
    background-color: gray;
    pointer-events: none;
    cursor: default;
  }
  .nav-list .nav-menu p{
    text-align: center;
    pointer-events: none;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    cursor:default;
  }
  .nav-list .nav-menu ul li:hover{
    background-color: #eb2626;
  }
  .nav-list .nav-menu button{
    text-shadow: 0 0 10px black;
    background: transparent;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    border: none;
  }
  .nav-list .nav-menu button:hover{
    transition: 0.5s;
    color:#eb2626;
  }
  .nav-list .nav-menu ul li{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5rem;
    margin-left: 0rem;
  }
  .nav-list .nav-menu ul{
    overflow: hidden;
    margin-left: -3.6rem;
    font-family: 'Roboto Condensed', sans-serif;
    width: 10rem;
    font-size: 1.2rem;
    position: absolute;
    background-color: rgba(85, 84, 84, 0.5);
    border: 1px solid gray;
    backdrop-filter: blur(5px);
    opacity: 0;
    color: white;
    list-style: none;
    text-decoration: none;
    visibility: hidden;
  }
  .nav-list .nav-menu button:focus + ul{
    visibility: visible;
    opacity: 1;
    transition: all 0.3s;
  }
  .nav-list .nav-menu ul li a{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-list .nav-menu ul li a:hover{
    transition: 0.5s;
  }
  .nav-list .nav-item:hover {
    transition: 0.5s;
    color:#eb2626;
  }
  .nav-list .nav-item::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #eb2626;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  .nav-list .nav-item:hover::before {
    transform: scaleX(1);
  }
  .list-div{
    position: fixed;
    right: 0;

    margin-right: 1.5rem;
  }

   @media only screen and (max-width: 800px){
    .nav-list{
      font-size: 1.5rem;
    }
    .nav-home img{
      width: 5rem;
    }
    .nav-list .nav-menu button{
      font-size: 1.5rem;
    }
   }
</style>