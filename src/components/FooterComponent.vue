<template>
  <div class="copyright-wrap">
    <div class="links">
      <img class="instagram" src="../assets/instagram.png" alt="">
      <img class="facebook" src="../assets/facebook.png" alt=""> 
    </div>
    <div class="email">
      <p>7fit@gmail.com</p>
    </div>
    <div class="text">
      <p>7FIT Ⓒ 2022</p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .copyright-wrap{
    border-top: 2px solid gray;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    width: 100%;
    height: 12rem;
    background-color: rgb(39, 39, 39);
    font-size: 1.3rem;
  }
  .copyright-wrap .email{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
  }
  .copyright-wrap .text{
    text-align: center;
    padding-top: 1rem;
  }
  .copyright-wrap .text p{

  }
  .copyright-wrap .links{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copyright-wrap .links .instagram{
    width: 2rem;
  }
  .copyright-wrap .links .facebook{
    width: 2rem;
    margin-left: 1rem;
  }


  @media only screen and (max-width: 800px){

  }
</style>