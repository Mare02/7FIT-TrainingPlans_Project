<template>
  <div class="container-div">
    <div class="logo">
      <img class="logo" src="../assets/logo.png" alt="" />
    </div>
    <LoginComponent @loginData="login"/>
  </div>
</template>

<script>
  import LoginComponent from '../components/LoginComponent.vue'
  import axios from 'axios'

  export default {
    components:{
      LoginComponent
    },
    methods:{
      async login(payload){
        axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/login', payload)
        .then(res => {
          console.log(res);
          localStorage.setItem('sid', res.data.user.sid);
        });
      },
    }
  }
</script>

<style scoped>
  .logo {
    display: flex;
    justify-content: center;
    background: transparent;
  }
  .logo img {
    width: 7rem;
  }
  .container-div {
    overflow-y: hidden;
    height: 100vh;
    text-align: center;
    background-size: 300% 300%;
    background-image: linear-gradient(
      -90deg, 
      rgb(0, 0, 0) 0%, 
      rgb(88, 0, 0) 30%, 
      rgb(39, 39, 39) 60%, 
      rgb(59, 59, 59) 100%
    );  
    animation: AnimateBG 20s ease infinite;
  }

  @keyframes AnimateBG { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
</style>