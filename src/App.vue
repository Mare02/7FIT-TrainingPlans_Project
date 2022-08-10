<template>
<div class="app">
  <div class="app-container">
    <NavbarComponent :isLoggedIn="checkIsLoggedIn()" :role="checkRole()" v-if="this.$route.name != 'Login'"/>
    <router-view class="fade-in"/>
  </div>
</div>
</template>

  <script>
  import NavbarComponent from '../src/components/SharedComponents/NavbarComponent.vue'
  import store from '../src/store'
  import axios from 'axios'
  import getUser from '../src/exports/user'
  import { mapActions, mapGetters } from 'vuex'

  export default{
    components:{
      NavbarComponent
    },
    mounted(){ 
      if(localStorage.getItem('sid')){
        this.getUserinfo()
      }
      console.log('%cWELCOME TO 7FIT!', `color: #eb2626;font-size: 1rem;font-weight: bold;`);
    },
    data(){
      return{

      }
    },
    computed:{
      
    },
    methods:{
      async getUserinfo(){
        
        let res = await getUser()
        if(res.data.msg.role == 1){
          console.log(res.data.msg.role);
          console.log('admin login');
        }
        else if(res.data.msg.role == 2){
          console.log('trainer login');
        }
        else{
          console.log('user login');
        }
        this.setLogin(true)
        this.setRole(res.data.msg.role)
        this.setUserId(res.data.msg.id)
        
        console.log('is logged in: ' + this.checkIsLoggedIn());
        console.log('user role id: ' + this.checkRole());
        console.log('user id: ' + this.checkUserId());
      },
      ...mapActions(['setLogin', 'setRole', 'setUserId']),
      ...mapGetters(['checkIsLoggedIn', 'checkRole', 'checkUserId'])
    },
  }
  </script>
  

  <style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* -webkit-touch-callout: none; 
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
         */
    user-select: none;
  }
  .fade-in {
    -webkit-animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .app-container{
    position: absolute;
    width: 100%;
    top: 0;
  }

  button{
    font-family: 'Bebas Neue', cursive;
  }
  button:hover{
    background-color: #eb2626;
    color: white;
  }
  body{
    overflow-x: hidden;
    width: 100%;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;
  } 

  label, input, p{
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
  }

  a{
    text-decoration: none;
    color: white;
  }
  
  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-track{
    background-color: gray;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #eb2626;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-button{
    background-color: rgb(54, 54, 54);
  }
</style>>
