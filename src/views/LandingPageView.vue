<template>    
  <div class="container">
    <div class="content">
      <div class="image-1">
        <img src="../assets/guy_cut.jpg" alt="">
      </div>
      <p>Get the body <b>you</b> have <br> always dreamed about <b>.</b></p>
    </div>
    <div class="exercises">
      <p>
        Improving Health with Fitness for <b>Everyone</b>
      </p>
      <div class="content-everyone">
        <div class="iphone-img">
          <img src="../assets/phone-x-app.png" alt="">
        </div>
        <div class="content-everyone-text">
             <div class="exewrapper">
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
                      </div>
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
        <div class="wrapper1">

        <div class="wrapper2">
        <div class="imgwrap">
          <img src="https://media.istockphoto.com/photos/handsome-power-athletic-man-turned-back-picture-id487768400?k=6&m=487768400&s=612x612&w=0&h=K_cR8V-9mkAI9QVMc4p9kTqgRqTseMBQ4bPOp-NnaUg=" alt="GymModelPhoto">
        </div>
        <div class="general">
        <div class="plancontent">
       <p  style="font-size:34px;"> <b>7</b>FIT does not ask you to be a <b>professional</b> or<br>
that you have previous <b>experience in training</b>,<br> all we are looking for
is the will, the desire and leave<br> the <b>rest to us!</b></p>
 </div>
 <div class="planbutton">
   <a href="#" class="action-button" @click=" apush()"><span>start your plan</span></a>
 </div>
 </div>
        </div>
        
      </div>
    <FooterComponent/>
  </div>
</template> 

<script>
import NavbarComponent from '../components/SharedComponents/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'Home',
  components: {
    NavbarComponent,
    FooterComponent
  },
  methods:{
       apush(){
         this.$router.push('/plans')
       },
      openInNewTab(url) {
        // If WebKit message handler is available, send the message through it to Cordova application
        if (window.webkit && webkit.messageHandlers && webkit.messageHandlers.cordova_iab) {
          // This means we are in a Cordova WebView
          const data = {
            // Custom event name
            eventName: 'open-external',
            url: url
          }
          // Send message to InAppBrowser event listener so that Cordova app can handle it.
          webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(data));
        } else {
          // Otherwise we are in normal browser so directly open in the new tab
          window.open(url, '_blank');
        }
        return false;
      }
  }
}
</script>

<style scoped>

.wrapper1{
  display: flex;
justify-content: center;

}
.wrapper2{
  padding-top: 50px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;

}
.general{
  display: flex;
  flex-direction: column;
}

.imgwrap{
     position: relative;
      right: 0px;
      display: flex;
      justify-content: center;
}
  .plancontent{
    padding-top: 40px;
  }

.action-button{
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  line-height: 40px;
  font-size: 28px;
  font-weight: bold;
 font-family: 'Bebas Neue', cursive;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
   border: 2px solid red;
  border-radius: 20px;
}

.action-button span{
  position: relative;
  z-index: 2;
}

.action-button:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: red;
  transition: all .50s;
      border-radius: 20px;
}

.action-button:hover{
  color: #fff;
}

.action-button:hover:after{
  width: 100%;
}
  @media only screen and (max-width: 1100px){
    .wrapper2{
      
      display: block;
      align-items: center;
    }
    .planbutton{
     display: flex;
      justify-content: center;
      padding-bottom: 90px;

    }
  }
  
  @media only screen and(max-width: 570px){
    .exewrapper{
      display: flex;
      justify-content: center;



    }
  }

.pwrap{
font-size: 45px;

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
    color: #eb2626;
  }

  .container{
    overflow-x: hidden;
  }
  .image-1{
    display: flex;
    justify-content: center;
  }
  .image-1 img{
    opacity: 60%;
    width: 38rem;
    position: relative;
    /* top: -5rem; */
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
  @media only screen and (max-width: 600px){
    .content-everyone .content-everyone-text .text{
      font-size: 1.7rem;
    }
    .content-everyone .content-everyone-text .text-title{
      font-size: 1.8rem;
      margin-left: 0;
      text-align: left;
      margin-left: 0.3rem;
    }
    .exercises p{
      font-size: 2rem;
    }
    .content-everyone .content-everyone-text ul{
      display: grid;
      text-align: left;
    }
  }
  @media only screen and (max-width: 480px){
    .content-everyone .content-everyone-text ul{  
      margin-left: 1.2rem;
    }
    .content-everyone-text li{
      margin-top: 2rem;
      font-size: 1.4rem;
    }
    .content-everyone-text img{
      position: relative;
      top: 3px;
      right: 10px;
      width: 20px;
      filter: invert();
    }
    .container .exercises{
      height: 105rem;
    }
    .content-everyone .content-everyone-text .text{
      font-size: 1.3rem;
      left: 0.2rem;
      margin-top: 4rem;
      width: 23rem;
    }
    .exercises p{
      font-size: 1.7rem;
    }
    .content-everyone .content-everyone-text .text-title{
      font-size: 1.7rem;
      text-align: left;
      margin-left: 1.5rem;
    }
  }
  @media only screen and (max-width: 470px){
    .content-everyone .iphone-img{
      top: 42rem;
    }
    .content-everyone .iphone-img img{
      width: 22rem;
    }
    .content-everyone-text .text-title{
      margin-top: 6rem;
    }
  }
  @media only screen and (max-width: 468px){
    .content-everyone .iphone-img{
      top: 43rem;
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
    .exercises{
      height: 54rem;
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
  @media only screen and (max-width: 900px){
    .exercises{
      height: 100rem;
    }
    .content-everyone{
      display: grid;
    }
    .content-everyone-text{
      left: 0px;
      position: relative;
      bottom: 52rem;
    }
    .iphone-img{
      position: relative;
      top: 38rem;
      right: 0px;
      display: flex;
      justify-content: center;
    }
    .iphone-img img{
      width: 25rem;
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