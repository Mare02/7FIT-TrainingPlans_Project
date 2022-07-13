<template>
<div class="app">
  <div class="container">
    <router-view/>
  </div>
</div>
</template>

  <script>
  
  export default{
    components:{
      
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
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg, 
    rgb(0, 0, 0) 0%, 
    rgb(20, 20, 20) 25%, 
    rgb(39, 39, 39) 51%, 
    rgb(59, 59, 59) 100%
  );  
    animation: AnimateBG 20s ease infinite;
  }

  @keyframes AnimateBG { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
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
