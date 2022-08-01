<template>
<div class="app">
  <div class="app-container">
    <NavbarComponent v-if="this.$route.name != 'Login'"/>
    <router-view/>
  </div>
</div>
</template>

  <script>
  import NavbarComponent from '../src/components/SharedComponents/NavbarComponent.vue'

  export default{
    components:{
      NavbarComponent
    }
  }
  </script>
  

  <style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-touch-callout: none; 
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;    
  }

  button{
    font-family: 'Bebas Neue', cursive;
  }

  body{
    overflow-x: hidden;
    width: 100%;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;
  } 

  label, input, p{
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
  }

  a{
    text-decoration: none;
    color: white;
  }
  
  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-track{
    background-color: gray;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #eb2626;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-button{
    background-color: rgb(54, 54, 54);
  }
</style>>
