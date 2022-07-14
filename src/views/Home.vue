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
        Improving Health with Fitness for <b>Everyone</b> 
      </p>
      <div class="content-everyone">
        <div class="iphone-img">
          <img src="../assets/iphone-x-app.png" alt="">
        </div>
        <div class="content-everyone-text">
          <p class="text-title">Whether your goal is:</p>
          <ul>
            <li>
              <img src="../assets/next.png" alt="">
              Weight Loss
            </li>
            <li>
              <img src="../assets/next.png" alt="">
              Muscle Gain
            </li>
            <li>
              <img src="../assets/next.png" alt="">
              Increased Endurance
            </li>
          </ul>
          <p class="text">
            <b>7</b>FIT provides the <b>support</b> and <b>motivation</b> people<br> 
            need to reach their wellness goals and take <br> 
            control of their health — anytime, anywhere, <br> 
            any age, any fitness level.
          </p>
          <p class="text">
            <b>7</b>FIT provides personalized fitness programs <br> 
            for building strength, losing weight, increasing <br> 
            flexibility, and conquering pain.
          </p>
        </div>
      </div>
    </div>
    <div class="contact">
      
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
    background-color: rgb(36, 36, 36);
    height: 55rem;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
  }
  .exercises p{
    font-size: 2.5rem;
    font-weight: 100;
    text-align: center;
    position: relative;
    top: 2rem;
  }
  .contact{
    height: 100rem;
  }

  .content-everyone{
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  }
  .iphone-img{
     position: relative;
     right: 7rem;
     top: 1.5rem;
  }
  .iphone-img img{
    width: 18rem;

  }
  .content-everyone-text{
    position: relative;
    left: 4rem;
  }
  .content-everyone-text .text-title{
    margin-left: -22rem;
    font-size: 2rem;
  }
  .content-everyone-text ul{
    position: relative;
    top: 2rem;
    left: 1rem;
    color: white;
    list-style: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.5rem;
    color: rgb(212, 212, 212);
  }
  .content-everyone-text li{
    margin-top: 2rem;
  }
  .content-everyone-text img{
    position: relative;
    top: 2px;
    right: 10px;
    width: 20px;
    filter: invert();
  }
  .content-everyone-text .text{
    margin-top: 2rem;
    font-size: 2rem;
    text-align: left;
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
    .content-everyone-text{
      left: 3rem;
    }
    .iphone-img{
      right: 3.5rem;
    }
  }
  @media only screen and (max-width: 1040px){
    .iphone-img{
      right: 2rem;
    }
    .iphone-img img{
      width: 17rem;
    }
    .content-everyone-text{
      left: 2rem;

    }
    .content-everyone-text .text{
      font-size: 1.8rem;
      margin-top: 2rem;
    }
    .content-everyone-text .text-title{
      margin-left: -18rem;
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