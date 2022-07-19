<template>
  <div class="menu-container">
    <div class="menu-logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="menu-list-container">
      <ul class="menu-list">
        <li>
          <img class="menu-img" src="../../assets/user.png" alt="">
          <span>manage users</span>
        </li>
        <li>
          <img class="menu-img" src="../../assets/planning.png" alt="">
          <span>manage plans</span>    
        </li>
        <li>
          <img class="menu-img" src="../../assets/exercise.png" alt="">
          <span>manage exercises</span>    
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  span{
    font-family: 'Bebas Neue', cursive;
    color: white;
    font-size: 1.7rem;
    margin-left: 1rem;
  }

  .menu-container{
    background-color: rgb(60, 60, 60);
    height: 100vh;
    width: 16rem;
    box-shadow: 0 0 5px 10px rgb(41, 41, 41);
  }

  .menu-logo img{
    width: 6rem;
    margin-left: 1rem;
  }
   .menu-logo{
    background-color: rgb(39, 39, 39);
    border-bottom: 2px solid white;
  }

  .menu-list li{
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .menu-list li:hover{
    background-color: #eb2626;
    transition: 0.5s;
    cursor: pointer;
    width: 100%;
  }

  .menu-img{
    width: 2rem;
    filter: invert();
    margin-left: 1rem;
  }
</style>