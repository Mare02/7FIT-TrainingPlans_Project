<template>
  <div class="container">
    <div class="company">
      image
    </div>
    <div class="login-div">
      login
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container{
    height: 100vh;
    display: flex;
  }

  .company{
    width: 60%;
    background-color: rgb(179, 179, 179);
  }

  .login-div{
    background-color: gray;
    width: 40%;
  }
  
  @media only screen and (max-width: 1200px){
    .company{
      width: 0%;
    }
    .login-div{
      width: 100%;
    }
  }
</style>