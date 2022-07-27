<template>
<div class="nav-container">
    <div class="nav-title">
      <div class="open-nav-btn" id="open-nav-btn" @click="openNav">
        <div></div>
        <div></div>
      </div>
      <p>Admin Settings</p>
      <img src="../assets/logo.png" alt="">
    </div>
    <nav class="nav" id="nav" v-if="showNavbar">  
      <ul class="menu-list">
        <router-link to="/admin/manage-users" @click="closeNavOnSelect()">
          <li id="item-users" @click="selectActive">
            <img class="menu-img" src="../assets/icons/user.png" alt="">
            <span>users</span>
          </li>
        </router-link>
        <router-link to="/admin/manage-plans" @click="closeNavOnSelect()">
          <li id="item-plans" @click="selectActive">
            <img class="menu-img" src="../assets/icons/planning.png" alt="">
            <span>plans</span>
          </li>
        </router-link>
        <router-link to="/admin/manage-exercises" @click="closeNavOnSelect()">
          <li id="item-exercises" @click="selectActive">
            <img class="menu-img" src="../assets/icons/exercise.png" alt="">
            <span>exercises</span>
          </li>
        </router-link>
        <router-link to="/admin/manage-users" @click="closeNavOnSelect()">
          <li id="item-statistics" @click="selectActive">
            <img class="menu-img" src="../assets/icons/statistics.png" alt="">
            <span>statistics</span>
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
<div class="router-container">
  <router-view/>
</div>

</template>

<script>
import $ from 'jquery'

export default {
  data(){
    return{
      showNavbar: true,
    }
  },
  mounted(){
    window.addEventListener('resize', this.resizeNav)
  },
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
    openNav(){
      this.showNavbar = !this.showNavbar      
    },
    closeNavOnSelect(){
      if($(window).width() <= 650){
        this.showNavbar = false
      }
    },
    resizeNav(e){
      if($(window).width() > 650){
        this.showNavbar = true
      }
      
    }
  }
}
</script>
<style scoped>
 .open-nav-btn{
    opacity: 0;
    position: absolute;
    background: white;
    width: 2.1rem;
    height: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .open-nav-btn div{
    width: 100%;
    height: 25%;
    margin-bottom: 4.5px;
    position: relative;
    top: 2.3px;
    background-color: rgb(37, 37, 37);
  }
  .open-nav-btn:hover{
    background-color: #eb2626;
    transition: 0.3s;
    cursor: pointer;
  }

  .nav-container{
    /* width: 16rem; */
    position: fixed;
    z-index: 1;
    
    height: auto;
  } 
  .nav-title{
    box-shadow: 7px 4px 5px -2px rgb(39, 39, 39);
    height: 4rem;
    display: flex;
    width: 15rem;
    justify-content: center;
    align-items: center;
    background-color: rgb(37, 37, 37);
  }
  .nav-title p{  
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.5rem;
  }
  .nav-title img{
    width: 4rem;
    margin-left: 0.6rem;
  }
  .router-container{
    overflow: hidden;
    position: absolute;
    background-color: rgb(77, 77, 77);
    min-height: 100%;
    width: 100%;
    padding-left: 0.5rem;
  }
  
  span{
    pointer-events: none;
    font-family: 'Bebas Neue', cursive;
    color: white;
    font-size: 1.4rem;
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
    display: flex;
    justify-content: left;
    align-items: center;
    border-right: 1px solid rgb(192, 192, 192);
    background-color: rgb(39, 39, 39);
    border-bottom: 2px solid white;
  }

  .nav{
    box-shadow: 7px 0 5px -2px rgb(39, 39, 39);
    z-index: 999;
    color: white;
    background-color: rgb(48, 48, 48);
    height: 100vh;
    width: 15rem;
  }
  
  .menu-list li{
    width: 100%;
    height: 3.7rem;
    display: flex;
    justify-content: left;
    align-items: center;
    /* box-shadow: 0 0 20px 0.5px rgb(39, 39, 39); */
    /* box-shadow: 0 0 20px 0.5px rgb(31, 31, 31); */
   
  }
  
  .menu-list li:hover{
    background-color: #750000;
    transition: 0.3s;
    cursor: pointer; 
  }

  .menu-img{
    pointer-events: none;
    width: 1.4rem;
    filter: invert();
    margin-left: 1rem;
  }
  .active{
    background-color: #eb2626;
    transform: translateX(1rem);
  }

  @media (min-width: 650px){
    .router-container{
      padding-left: 11.5rem;
    }
  }
  @media (min-width: 900px){
    .router-container{
      padding-left: 16.5rem;
    }
  }
  @media (max-width: 900px){
    .nav{
      width: 10rem;
    }
    .nav-title{
      width: 10rem;
    }
    .nav-title p{
      font-size: 1.1rem;
    }
    .nav-title img{
      margin-left: 0.2rem;
      width: 2.3rem;
    }
  }
  @media (max-width: 650px){
    .open-nav-btn{
      opacity: 1;
      left: 0.8rem;
    }
    .nav-container{
      width: 100%;
    }
    .nav{
      background-color: rgb(48, 48, 48, 0.9);
      overflow: hidden;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-title{
      width: 100%;
      box-shadow: none;
    }
    .nav-title p{
      font-size: 1.4rem;
    }
    .nav-title img{
      margin-left: 0.2rem;
      width: 3.5rem;
    }
    .menu-list{
      width: 100%;
      display: flex;
      flex-direction: column;

      text-align: center;
    }
    .menu-list li{
      width: 100%;
      justify-content: left;
    }
    .active{
      transform: translateX(0);
    }
  }
</style>