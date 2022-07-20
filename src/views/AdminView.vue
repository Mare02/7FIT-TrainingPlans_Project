<template>
<div class="container">
  <nav class="nav">
    <div class="menu-logo">
      <img class="menu-icon" src="../assets/icons/menu.png" alt="">
      <img class="logo" src="../assets/logo.png" alt="">
    </div>
    <ul class="menu-list">
      <router-link to="/admin/manage-users">
        <li id="item-users" @click="selectActive">
          <img class="menu-img" src="../assets/icons/user.png" alt="">
          <span>users</span>
        </li>
      </router-link>
      <router-link to="/admin/manage-plans">
        <li id="item-plans" @click="selectActive">
          <img class="menu-img" src="../assets/icons/planning.png" alt="">
          <span>plans</span>
        </li>
      </router-link>
      <router-link to="/admin/manage-exercises">
        <li id="item-exercises" @click="selectActive">
          <img class="menu-img" src="../assets/icons/exercise.png" alt="">
          <span>exercises</span>
        </li>
      </router-link>
      <router-link to="/admin/manage-users">
        <li id="item-statistics" @click="selectActive">
          <img class="menu-img" src="../assets/icons/statistics.png" alt="">
          <span>statistics</span>
        </li>
      </router-link>
    </ul>
  </nav>
  
</div>
<router-view/>
</template>

<script>

export default {
  components:{
    
  },
  methods:{
    selectActive(event){
      let element_id = event.target.id;
      let element = document.getElementById(String(element_id));
      if(!(element.classList.contains('active'))){
        element.classList.add('active')
      }
      let otherElements = document.querySelectorAll('li')
      otherElements.forEach((elem) => {
        if(elem.id != element_id){
          elem.classList.remove('active')
        }
      });
    },
  }
}
</script>
<style scoped>

  
  .container{
    position: absolute;
    background-color: rgb(36, 36, 36);
    min-height: 100%;
    width: 100%;


  }
  
  span{
    pointer-events: none;
    font-family: 'Bebas Neue', cursive;
    color: white;
    font-size: 1.7rem;
    margin-left: 1rem;
  }

  .menu-logo .menu-icon{
    pointer-events: none;
    margin-left: 1rem;
    width: 2rem;
    filter: invert();
  }
  .menu-logo .logo{
    width: 6rem;
    margin-left: 4rem;
  }
   .menu-logo{
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
    border-right: 1px solid rgb(192, 192, 192);
    background-color: rgb(39, 39, 39);
    border-bottom: 2px solid white;
  }

  .nav{
    position: fixed;
    color: white;
    background-color: rgb(48, 48, 48);
    height: 100vh;
    width: 16rem;
    box-shadow: 0 0 10px 0.5px rgb(0, 0, 0);
    z-index:999;
  }
  .menu-list{
     
  }
  .menu-list li{
    border-radius: 10px;
    margin-top: 0.5rem;
    width: 100%;
    height: 5.5rem;
    display: flex;
    justify-content: left;
    align-items: center;
    box-shadow: 0 0 20px 0.5px rgb(31, 31, 31);
   
  }
  
  .menu-list li:hover{
    /* clip-path: inset(0px -15px 0px 0px); */
    /* box-shadow: 0 0 10px 0.5px gray; */
    background-color: #940000;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer; 
  }

  .menu-img{
    pointer-events: none;
    width: 2rem;
    filter: invert();
    margin-left: 1rem;
  }
  .active{
    background-color: #eb2626;
    position: relative;
    left: 1rem;
    border-radius: 10px;
  }



</style>