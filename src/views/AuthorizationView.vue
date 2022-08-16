<template>
  <div class="container-div">
    <div class="logo">
      <img class="logo" src="../assets/logo.png" alt=""/>
    </div>
    <div class="errorMsg">
      <p>{{errorMsg}}</p>
    </div>
    <div class="message hidden" id="msg">
      <p>Registered successfuly! <br> You can now log in.</p>
    </div>
    <LoginComponent @loginData="login" :show="this.show" @emit_show="changeShow"/>
    <RegisterComponent :show="!this.show" @emit_show="changeShow" @reg-data="register" @form_check="formValidation"/>
  </div>
</template>

<script>
  import LoginComponent from '../components/AuthorizationComponents/LoginComponent.vue'
  import RegisterComponent from '../components/AuthorizationComponents/RegisterComponent.vue'
  import axios from 'axios'
  import { mapActions } from 'vuex'

  export default {
    mounted(){

    },
    data(){
      return{
        show: true,
        errorMsg: ''
      }
    },
    components:{
      LoginComponent,
      RegisterComponent
    },
    methods:{
      async formValidation({funcChange, name, email, username, password, password_confirm, bday}){
        let date = Date()  
        let userBday = new Date(String(arguments[0].bday))   
        let currentDate = new Date(date)
        let bdayYear = userBday.getFullYear()
        let currentYear = currentDate.getFullYear()
         

        for(let item in arguments[0]){
          if(arguments[0][item] == ''){
            this.errorMsg = 'All input fields must be filled !'
          }
          else{
            if(arguments[0].password.length < 8 || arguments[0].password_confirm.length < 8){
              this.errorMsg = 'Password must contain minimum 8 characters !' 
            }
            if(arguments[0].password.length > 20 || arguments[0].password_confirm.length > 20){
              this.errorMsg = 'Maximum password lenght is 20 characters !' 
            }
            else if(arguments[0].password !== arguments[0].password_confirm){
              this.errorMsg = 'Passwords do not match !'
            }
            else if(arguments[0].name[0].toUpperCase() !== arguments[0].name[0]){
              this.errorMsg = 'First letter of the name must be uppercase !'
            }
            else if(arguments[0].name.length < 3){
              this.errorMsg = 'Name must contain minimum 3 characters !'
            }
            else if(arguments[0].name.length > 20){
              this.errorMsg = 'Maximum name lenght is 20 characters !'
            }
            else if(arguments[0].username.length < 3){
              this.errorMsg = 'Maximum username lenght is 20 characters !'
            }
            else if(arguments[0].username.length > 20){
              this.errorMsg = 'Maximum username lenght is 20 characters !'
            }
            else if(!arguments[0].email.includes('@') || !arguments[0].email.includes('.com')){
              this.errorMsg = 'Email must be in format: example@gmail.com !'
            }
            else if(currentYear - bdayYear < 16){
              this.errorMsg = 'Your age must be minimum 16 !'
            }
            else{
              try {
                await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/formCheck', {email, username, password, password_confirm, bday})
                .then(res => {
                  if(res.status == 200){
                    this.errorMsg = ''
                    funcChange()
                  }
                  else{
                    console.log('form validation failure');
                  }
                })
                break
              } catch (error) {
                this.errorMsg = error.response.data.msg
                break
              }                    
            }
          }
        }
          
      },
      async login(payload){
        for(let item in payload){
          if(payload[item] == ''){
            this.errorMsg = 'Please fill in your email and password'
          }
          else{
            try {
              await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/login', payload)
              .then(res => {
                localStorage.setItem('sid', res.data.user.sid);
                this.$router.push({name: 'Home'})
                this.setLogin(true)
                this.setRole(res.data.user.role)
                this.setUserId(res.data.user.id)
              });
              break
            } catch (error) {
              this.errorMsg = error.response.data.msg
              break
            }
          }
        }
        
        
      },
      async register(payload){
        for(let item in payload){
          if(payload[item] == ''){
            this.errorMsg = 'All input fields must be filled !'
          }
          else{
            if(payload.weight < 20){
              this.errorMsg = 'Minimum weight is 20kg !'
            }
            else if(payload.weight > 300){
              this.errorMsg = 'Maximum weight is 300kg !'
            }
            else if(payload.height < 70){
              this.errorMsg = 'Minimum height is 70cm !'
            }
            else if(payload.height > 300){
              this.errorMsg = 'Maximum height is 300cm !'
            }
            else if(payload.sex == ''){
              this.errorMsg = 'You must select your gender'
            }
            else{
              try {
                await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/register', payload)
                .then(res => {
                  if(res.status == 200){
                    this.show = !this.show;

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
                  }
                })
                break
              } catch (error) {
                this.errorMsg = error.response.data.msg
                break
              }
            }
          }
        }
        
        // console.log('reg ulaz');
        
      }, 
      changeShow(){
        this.show = !this.show
      },
      ...mapActions(['setLogin', 'setRole', 'setUserId']),
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