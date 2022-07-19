<template>
<div class="background">
  <nav class="nav">
    <div class="menu-logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <ul class="menu-list">
      <router-link to="/admin/manage-users">
        <li>
          <img class="menu-img" src="../assets/user.png" alt="">
          <span>manage users</span>
        </li>
      </router-link>
      <router-link to="/admin/manage-plans">
        <li>
          <img class="menu-img" src="../assets/planning.png" alt="">
          <span>manage plans</span>
        </li>
      </router-link>
      <router-link to="/admin/manage-exercises">
        <li>
          <img class="menu-img" src="../assets/exercise.png" alt="">
          <span>manage exercises</span>
        </li>
      </router-link>
    </ul>
  </nav>
  <router-view/>
</div>
</template>

<script>

export default {
  components:{
    
  }
}
</script>

<style scoped>
  span{
    font-family: 'Bebas Neue', cursive;
    color: white;
    font-size: 1.7rem;
    margin-left: 1rem;
  }
  .background{
    height: 100vh;
    background-color: rgb(68, 68, 68);
  }
  .menu-logo img{
    width: 6rem;
    margin-left: 1rem;
  }
   .menu-logo{
    background-color: rgb(39, 39, 39);
    border-bottom: 2px solid white;
  }
  .nav{
    color: white;
    background-color: rgb(60, 60, 60);
    height: 100vh;
    width: 16rem;
    box-shadow: 0 0 5px 10px rgb(41, 41, 41);
  }
  .menu-list li{
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .menu-list li:hover{
    box-shadow: 0 0 5px 10px rgb(87, 0, 0);
    clip-path: inset(0px -15px 0px 0px);
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