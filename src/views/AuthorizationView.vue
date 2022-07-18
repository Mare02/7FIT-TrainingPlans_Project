<template>
  <div class="container-div">
    <div class="logo">
      <img class="logo" src="../assets/logo.png" alt=""/>
    </div>
    <div class="message hidden" id="msg">
      <p>Registered successfuly! <br> You can now log in.</p>
    </div>
    <LoginComponent @loginData="login" :show="this.show" @emit_show="changeShow"/>
    <RegisterComponent :show="!this.show" @emit_show="changeShow" @reg-data="register" @form_check="formValidation"/>
  </div>
</template>

<script>
  import LoginComponent from '../components/LoginComponent.vue'
  import RegisterComponent from '../components/RegisterComponent.vue'
  import axios from 'axios'

  export default {
    mounted(){

    },
    data(){
      return{
        show: true,
      }
    },
    components:{
      LoginComponent,
      RegisterComponent
    },
    methods:{
      async formValidation({funcChange, email, username, password, password_confirm}){
        await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/formCheck', {email, username, password, password_confirm})
        .then(res => {
          console.log(res);
          if(res.status == 200){
            funcChange()
          }
          else{
            console.log('jebem ti mater');
          }
        })
      },
      async login(payload){
        axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/login', payload)
        .then(res => {
          console.log(res);
          localStorage.setItem('sid', res.data.user.sid);
          this.$router.push('/')
        });
      },
      async register(payload){
        console.log('reg ulaz');
        await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/register', payload)
        .then(res => {
          console.log(res);
          if(res.status == 200){
            this.show = !this.show;
          }
          let msg = document.getElementById('msg')
          msg.classList.remove('hidden');
          msg.classList.add('fade-down');
          setTimeout((() => {
            msg.classList.remove('fade-down');
          }), 1000)
          setTimeout((() => {
            msg.classList.add('fade-up');
          }), 7000)
          setTimeout((() => {
            msg.classList.remove('fade-up');
            msg.classList.add('hidden');
          }), 8000)
        })
      }, 
      changeShow(){
        this.show = !this.show
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
    overflow: hidden;
    height: 100vh;
    text-align: center;
    background-size: 300% 300%;
    background-image: linear-gradient(
      -90deg, 
      rgb(24, 24, 24) 0%, 
      rgb(24, 24, 24) 30%, 
      rgb(24, 24, 24) 35%, 
      rgb(24, 24, 24) 100%
    );  
    animation: AnimateBG 20s ease infinite;
  }

  .message{
    width: 100%;
    position: absolute;
    top: 16.5rem;
    font-size: 1.3rem;
    text-align: center;
  }
  .message p{
    color: rgb(190, 190, 190);
  }
  .fade-down{
    animation: AnimateMessage 1s ease;
  }
  .fade-up{
    animation: AnimateMessage 1s ease reverse;
  }
  .hidden{
    opacity: 0;
  }

  @keyframes AnimateBG{ 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @keyframes AnimateMessage{
    0%{opacity: 0;
       transform: translateY(-2rem);}
    100%{opacity: 1;}
  }
</style>