<template>
  <LoginComponent/>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue'

export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  components:{
    LoginComponent
  }
}
</script>

<style>

</style>