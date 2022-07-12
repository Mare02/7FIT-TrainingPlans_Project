<template>
  <div class="container">
    <div class="register-div">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="user-input">
        <div class="input-div">
          <label>Email:</label>
          <input type="text" v-model="user_info.email">
        </div>
        <div class="input-div">
          <label>Name:</label>
          <input type="text" v-model="user_info.name">
        </div>
        <div class="input-div">
          <label>Username:</label>
          <input type="text" v-model="user_info.username">
        </div>
        <div class="input-div">
          <label>Password:</label>
          <input type="password" v-model="user_info.password">
        </div>
        <div class="input-div">
          <label>Confirm password:</label>
          <input type="password" v-model="user_info.password_confirm">
        </div>
        <div class="input-div">
          <label>Weight:</label>
          <input type="text" v-model="user_info.weight">
        </div>
        <div class="input-div">
          <label>Height:</label>
          <input type="text" v-model="user_info.height">
        </div>
        <div class="buttons">
          <button @click="register" class="submit">Register</button>
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
        bday: '2002-07-02', //YYYY/MM/DD
        sex: '1'
      },
      user_id: ''
    }
  },
  methods:{
    async register(){
      let result = await axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/register', {email: this.user_info.email,
                                                                                              name: this.user_info.name,
                                                                                              username: this.user_info.username,
                                                                                              password: this.user_info.password,
                                                                                              password_confirm: this.user_info.password_confirm,
                                                                                              weight: this.user_info.weight,
                                                                                              height: this.user_info.height,
                                                                                              bday: this.user_info.bday,
                                                                                              sex: this.user_info.sex});
      console.log(result);
    }, 
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
  button:hover{
    background-color: #eb2626;
    cursor: pointer;
  }
</style>