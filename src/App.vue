<template>
<div class="app">
  <navbar/>
  <div class="container">
    <router-view/>
  </div>
</div>
</template>

  <script>
  import navbar from './components/navbar.vue'
  
  export default{
    components:{
      navbar
    }
  }
  </script>
  

  <style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-user-select: none;
    -webkit-touch-callout: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;    
  }

  .nav-home, button{
    font-family: 'Bebas Neue', cursive;
  }

  body{
    background-color: rgb(0, 0, 0); 
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }

  label, p{
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
    background-color: #ee441d;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-button{
    background-color: rgb(54, 54, 54);
  }
</style>>
