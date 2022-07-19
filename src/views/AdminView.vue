<template>
<div class="background">
  <nav class="nav">
    <div class="menu-logo">
      <img class="menu-icon" src="../assets/icons/menu.png" alt="">
      <img class="logo" src="../assets/logo.png" alt="">
    </div>
    <ul class="menu-list">
      <router-link to="/admin/manage-users">
        <li>
          <img class="menu-img" src="../assets/icons/user.png" alt="">
          <span>users</span>
        </li>
      </router-link>
      <router-link to="/admin/manage-plans">
        <li>
          <img class="menu-img" src="../assets/icons/planning.png" alt="">
          <span>plans</span>
        </li>
      </router-link>
      <router-link to="/admin/manage-exercises">
        <li>
          <img class="menu-img" src="../assets/icons/exercise.png" alt="">
          <span>exercises</span>
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
    background-color: rgb(51, 51, 51);
  }

  .menu-logo .menu-icon{
    margin-left: 1rem;
    width: 2rem;
    filter: invert();
  }
  .menu-logo .logo{
    width: 6rem;
    margin-left: 4rem;
  }
   .menu-logo{
    display: flex;
    justify-content: left;
    align-items: center;
    border-right: 1px solid rgb(192, 192, 192);
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
    border-bottom: 1px solid rgb(192, 192, 192);
  }
  .menu-list li:hover{
    box-shadow: 0 0 5px 10px rgb(87, 0, 0);
    clip-path: inset(0px -15px 0px 0px);
    background-color: #eb2626;
    transition: 0.5s;
    cursor: pointer;
    position: relative;
    left: 1rem;
  }

  .menu-img{
    width: 2rem;
    filter: invert();
    margin-left: 1rem;
  }
</style>