<template>
  <div class="mainw">
    <div class="gif">
      <img src="https://wallpapercave.com/wp/wp7661141.jpg" alt="popaj" id="slika1">
    </div>
    <div class="mainer">
      <p id="para">OUR <b>PLANS</b>
      </p>
      <p id="opis"> ONLINE WORKOUT PLANNER With the workout builder, you can easily create the workout plan you want. The workout plan you create shows how the exercises are done and which muscle groups they work. The custom workout plan you have designed with the workout plan generator is automatically saved to your profile. In this way, when you go to the training, you can open your profile page and follow the training plan you have saved. Unlike other paid programs, the online workout planner is completely free. If you want to design a free personalized workout plan, all you have to do is become a free member. WEEKLY WORKOUT PLAN Designed by the world's best fitness trainers to help you get the best possible results. Find a comprehensive fitness plan, for free. Ready... Set... Sweat! In this way, when you go to the training, you can open your profile page and follow the training plan you have saved. Unlike other paid programs, the online workout planner is completely free. If you want to design a free personalized workout plan, all you have to do is become a free member. WEEKLY WORKOUT PLAN Designed by the world's best fitness trainers to help you get the best possible results. Find a comprehensive fitness plan, for free. Ready... Set... Sweat! </p>
    </div>
    <div class="main">
      <p id="para">RECOMENDED <b>PLANS</b> FOR YOU </p>
      <br>
      <div class="desc">
        <p id="gara">PLAN DESCRIPTION</p>
        <p id="descr">{{desc}}</p>
      </div>
      <div class="carousel-wrapper">
        <span id="item-1"></span>
        <span id="item-2"></span>
        <span id="item-3"></span>
        <div class="carousel-item item-1">
          <a href="#item-3" class="arrow-prev arrow" @click="channgeText3()"></a>
          <a href="#item-2" class="arrow-next arrow" @click="channgeText2()"></a>
        </div>
        <div class="carousel-item item-2">
          <a href="#item-1" class="arrow-prev arrow" @click="channgeText1()"></a>
          <a href="#item-3" class="arrow-next arrow" @click="channgeText3()"></a>
        </div>
        <div class="carousel-item item-3">
          <a href="#item-2" class="arrow-prev arrow" @click="channgeText2()"></a>
          <a href="#item-1" class="arrow-next arrow" @click="channgeText1()"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import NavbarComponent from "../components/SharedComponents/NavbarComponent.vue";
  export default {
    data() {
      return {
        message: "PLAN 1",
        desc: "Plan 1 is great way to imporve your body size ! "
      }
    },
    components: {
      NavbarComponent,
    },
    methods: {
      channgeText1() {
        this.message = "PLAN 1",
          this.desc = "Plan 1 is great way to improve your appearance !"
      },
      channgeText2() {
        this.message = "PLAN 2",
          this.desc = "Plan 2 is great way to improve your appearance !"
      },
      channgeText3() {
        this.message = "PLAN 3",
          this.desc = "Plan 3 is great way to improve your appearance ! "
      }
    }
  }
</script>
<style scoped>
  b {
    color: red
  }

  #slika1 {
    width: 100vw;
  }

  .mainw {}

  .gif {
    width: 100%;
    border-bottom: 3px solid white;
  }

  .main {
    display: flex;
    flex-direction: column;
    margin: 35px;
    font-size: 70px;
    align-items: center;
  }

  .caroseul {
    display: flex;
    border: 7px solid white;
    border-radius: 25px;
    width: 670px;
    height: 400px;
  }

  #para {
    font-size: 80px;
    font: bolder;
    text-transform: uppercase;
    text-align: center;
  }

  #gara {
    text-align: center;
    font-size: 50px;
    color: white;
    z-index: 999;
  }

  #descr {
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
    color: gray;
  }

  #opis {
    width: 55%;
    font-size: 28px;
    color: white
  }

  .mainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  .carousel-wrapper {
    height: 40rem;
    position: relative;
    width: 70rem;
    display: block;
    margin: 50px auto;
    border: 2px solid white;
  }

  .carousel-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px 50px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 12px;
  }

  .arrow-prev {
    left: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(135deg);
  }

  .arrow-next {
    right: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
  }

  [id^="item"] {
    display: none;
  }

  .item-1 {
    z-index: 2;
    opacity: 1;
    object-fit: cover;
    width: 100%;
    height: auto;
    background-size: 100% 100%;
    background-image: url('https://i.gifer.com/FczZ.gif');
    background-repeat: no-repeat;
    position: absolute;
  }

  .item-2 {
    background-size: 100% 100%;
    background-image: url('https://tosamja.media/wp-content/uploads/2021/09/fit-partneri.jpg');
    background-repeat: no-repeat;
  }

  .item-3 {
    background-size: 100% 100%;
    background-image: url('https://images.jetts.com.au/l52qqivr50u4/0KaJUvFIsVasVvAsNC7rh/a0a8bcc0e7dbce425c6344494a467c8e/Web_Banner__2_.jpg?w=2000&h=1000&fl=progressive&q=90&fm=jpg&fit=fill&f=center');
    background-repeat: no-repeat;
    position: absolute;
  }

  *:target~.item-1 {
    opacity: 0;
  }

  #item-1:target~.item-1 {
    opacity: 1;
  }

  #item-2:target~.item-2,
  #item-3:target~.item-3 {
    z-index: 3;
    opacity: 1;
  }

  @media only screen and (max-width: 1188px) {
    .carousel-wrapper {
      height: 30rem;
      position: relative;
      width: 60rem;
      display: block;
      margin: 50px auto;
      border: 2px solid white;
    }

    #para {
      font-size: 50px;
      font: bolder;
      text-transform: uppercase;
      text-align: center;
    }

    #gara {
      padding-top: 45px;
      font-size: 40px;
      color: white;
    }

    #descr {
      transition: all 0.5s ease-in-out;
      font-size: 25px;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 1035px) {
    .carousel-wrapper {
      height: 20rem;
      position: relative;
      width: 40rem;
      display: block;
      margin: 50px auto;
      border: 2px solid white;
    }

    #para {
      font-size: 40px;
      font: bolder;
      text-transform: uppercase;
      text-align: center;
    }

    #gara {
      padding-top: 40px;
      font-size: 30px;
      color: white;
    }

    #descr {
      transition: all 0.5s ease-in-out;
      font-size: 23px;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 700px) {
    .carousel-wrapper {
      height: 20rem;
      position: relative;
      width: 30rem;
      display: block;
      margin: 50px auto;
      border: 2px solid white;
    }

    #para {
      font-size: 30px;
      font: bolder;
      text-transform: uppercase;
      text-align: center;
    }

    #gara {
      padding-top: 35px;
      font-size: 25px;
      color: white;
    }

    #descr {
      font-size: 21px;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 540px) {
    .carousel-wrapper {
      height: 15rem;
      position: relative;
      width: 20rem;
      display: block;
      margin: 50px auto;
      border: 2px solid white;
    }

    #para {
      font-size: 30px;
      font: bolder;
      text-transform: uppercase;
      text-align: center;
    }

    #gara {
      padding-top: 30px;
      font-size: 22px;
      color: white;
    }

    #descr {
      font-size: 19px;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 380px) {
    .carousel-wrapper {
      align-content: center;
      height: 15rem;
      position: relative;
      width: 100%;
      display: block;
      margin: 50px auto;
      border: 2px solid white;
    }

    #para {
      font-size: 30px;
      font: bolder;
      text-transform: uppercase;
      text-align: center;
    }

    #gara {
      padding-top: 27px;
      font-size: 20px;
      color: white;
    }

    #descr {
      font-size: 17px;
      text-decoration: underline;
    }
  }
</style>