<template>
  <NavbarComponent/>    
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
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  name: 'Home',
  components: {
    NavbarComponent
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>

<style scoped> 
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
    color: #eb2626;
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
    border-radius: 20px;
    border-style:groove;
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