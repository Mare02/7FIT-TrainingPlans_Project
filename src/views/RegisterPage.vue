<template>
  <div class="container">
    <div class="register-div">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="user-input">
        <div class="input-div">
          <label>Email:</label>
          <input type="text" v-model="email">
        </div>
        <div class="input-div">
          <label>Name:</label>
          <input type="text" v-model="name">
        </div>
        <div class="input-div">
          <label>Username:</label>
          <input type="text" v-model="username">
        </div>
        <div class="input-div">
          <label>Confirm password:</label>
          <input type="password" v-model="password">
        </div>
        <div class="input-div">
          <label>Password:</label>
          <input type="password" v-model="password_confirm">
        </div>
        <div class="input-div">
          <label>Weight:</label>
          <input type="text" v-model="weight">
        </div>
        <div class="input-div">
          <label>Height:</label>
          <input type="text" v-model="height">
        </div>
        <div class="input-div">
          <label>Bday:</label>
          <input type="date" v-model="bday">
        </div>
        <div class="buttons">
          <button @click="register" class="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{ 
      user_info:{
        email: '',
        name: '',
        username: '',
        password: '',
        password_confirm: '',
        weight: '',
        height: '',
        bday: '', //YYYY/MM/DD
        sex: '1'
      }
    }
  },
  methods:{
    async register(){
      let formdata = new FormData();
      formdata.append(
        ('email', this.email),
        ('name', this.name),
        ('username', this.username),
        ('password', this.password),
        ('password_confirm', this.password_confirm),
        ('weight', this.weight),
        ('height', this.height),
        ('bday', this.bday),
        ('sex', this.sex)
      );
      let result = await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/register', formdata);
      console.log(result);
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
  }

  .register-div{
    background-color: rgb(0, 0, 0);
    text-align: center;
  }
  
  .logo{
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo img{
    width: 7rem;
  }

  .user-input{
    font-size: 1.5rem;
    margin-top: 10rem;
  }
  .user-input label{
    color: white;
    margin-right: 1rem;
  }
  .user-input .input-div{
    margin-top: 2rem;
  }
  button{
    font-size: 1.5rem;
    width: 7rem;
    margin-top: 2rem;
    border-radius: 15px;
  }
</style>