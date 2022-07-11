<template>
    <nav class="nav-home">
      <div>
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="list-div">
        <ul class="nav-list">
          <li>
            <a href="/about">About us</a> 
          </li>
          <li>
            <a href="/register">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  <div class="container">
    <div class="content">
      <div class="image-1">
        <img src="../assets/guy.jpg" alt="">
      </div>
      <p>Get the body <b>you</b> have <br> always dreamed about <b>.</b></p>
    </div>
    <div class="exercises">
      <p>
        Choose a category that best suits <br> the workout you're searching for.
      </p>
        <div class="image-2">
          <!-- <img src="../assets/workout_squats.gif" alt=""> -->
          <img src="../assets/workout.gif" alt="">
        </div>
    </div>
  </div>
</template> 

<script>

export default {
  name: 'Home',
  components: {
    
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>

<style scoped> 
  :root {
    --red: #ee441d;
  }

  /* scroll animations */
  .fade-right{
    
  }

  .nav-home{
    position: sticky;
    top: 0;
    height: 4.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }
  .nav-home img{
    width: 7rem;
    margin-left: 1rem;
    margin-top: 4px;
  }
  .nav-list{
    font-size: 1.8rem;
    display: flex;
    color: white;
    list-style: none;
  }
  .nav-list li {
    position: relative;
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin-left: 1.5rem;
    text-shadow: 0 0 10px black;
  }

  .nav-list a:hover {
    transition: 0.5s;
    color:#ee441d;
  }

  .nav-list a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ee441d;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  .nav-list a:hover::before {
    transform: scaleX(1);
  }
  .list-div{
    margin-right: 1.5rem;
  }

  .content{
    display: flex;
    justify-content: center;
  }
  .content p{
    position: absolute;
    top: 25rem;
    left: 15%;
    color: rgb(214, 214, 214);
    font-size: 3rem;
    text-align: center;
  }
  b{
    color: #ee441d;
  }

  .image-1{
    display: flex;
    justify-content: center;
  }
  .image-1 img{
    opacity: 60%;
    width: 100rem;
    position: relative;
    top: -5rem;
    left: 20%;
  }

  .exercises{
    background-color: rgb(49, 49, 49);
    height: 40rem;
    border-top-right-radius: 100px;
    border-top-style:groove;
  }
  .exercises p{
    font-size: 1.8rem;
    font-weight: 100;
    text-align: center;
    position: relative;
    top: 2rem;
  }

  .image-2{
    display: flex;
    justify-content: space-around;
  }
  .image-2 img{
    border: 2px solid #b9b9b9;
    border-radius: 20px;
    position: relative;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 5rem;
  }

  
  @media only screen and (max-width: 800px){
    .container{
      background-position: top;
    }
    .content p{
      font-size: 2.5rem;
      top: 25rem;
    }
    .nav-list{
      font-size: 1.5rem;
    }
    .nav-home img{
      width: 5rem;
    }
  }

  @media only screen and (max-width: 1450px){
    .image-1 img{
      left: 5%;
    }
  }
  @media only screen and (max-width: 1200px){
    .image-1 img{
      left: 0;
    }
  }
  @media only screen and (max-width: 1050px){
    .image-1 img{
      left: initial;
    }
    .content p{
      left: initial;
    }
  }
</style>