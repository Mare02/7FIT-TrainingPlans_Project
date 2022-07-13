<template>
  <LoginComponent @login="login" @redirect="redirect" @loginData="login"/>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue'
import axios from 'axios'

export default {
  components:{
    LoginComponent
  },
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    async login(payload){
      console.log(payload);
      axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/login', payload)
      .then(res => {
        console.log(res);
        localStorage.setItem('sid', res.data.user.sid);
      });
    },
    redirect(){
      router.push('register')
    }
  }
}
</script>

<style scoped>
  
</style>