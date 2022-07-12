<template>
  <div class="container">
    <div class="logo">
      <img class="logo" src="../assets/logo.png" alt="">
    </div>
    <p>Sign in</p>
    <div class="login-div">
      <div class="input-div">
        <label>Email: </label>
        <input type="text">
      </div>
      <div class="input-div">
        <label>Password: </label>
        <input type="password">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'email',
    'password'
  ],
  methods:{
    async login(){
      axios.post('http://783p122.e2.mars-hosting.com/7fit/auth/login', {email: thi,
                                                                        password: this.password})
      .then(res => {
        console.log('Successful login, session id saved');
        localStorage.setItem('sid', res.data.user.sid);
      });
    },
  }
}
</script>

<style scoped>
  .container{
    text-align: center;
    
  }
  .login-div{
    display: flex;
    justify-content: center;
    height: 100vh;
  }
  .logo{
    display: flex;
    justify-content: center;
  }
  .logo img{
    width: 7rem;
  }

  .login-div{
    border: 2px solid #eb2626;
    border-radius: 20px;
    width: 100%;
    height: 30rem;
    position: relative;
    top: 5rem;
  }
</style>