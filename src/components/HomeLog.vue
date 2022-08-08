<template>
  <div class="mainw">
    <div class="gif">
      <img src="https://wallpapercave.com/wp/wp7661141.jpg" alt="popaj" id="slika1">
    </div>
<<<<<<< HEAD
    <div class="main"> 
      <p id="para">RECOMENDED <b>PLANS</b> FOR YOUR <b>GOAL</b> </p> 
      <div class="rec-plans-wrap">
        <ul class="plans-list">
          <li v-for="(plan, index) in this.plans" :key="plan.pla_id" :id="index">
            <div class="plan-image">
              <img :src="plan.file_url" alt="">
            </div>
            <div class="plan-info">
              <div>
                <p>{{plan.pla_name}}</p>
              </div>
              <div class="description">
                <p>{{plan.pla_desc}}</p>
              </div>
              <div class="plan-buttons"> 
                <div v-if="true">
                  <button @click="showPlanOptions(plan)">view details</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mainer"> 
      <div class="mainerwraper">
        <div class="model1">
        <img src="../assets/model1.png" alt="photo1" id="slika2">
        </div>
     <p id="opis"> <b>Something else about us!</b> <br><br>Hello user, we are very grateful for your trust and registration on our site, we hope that you we will not disappoint and with your help we will make you what you always wanted! First of all, we are not here to train for you, we are here to show you the way and with the help of your wishes we progress and achieve desired results.<br><br><b>Why our plans and why our site?</b> <br><br>Our plans are plans designed by today's best coaches. Our plans have been tested countless times and we can guarantee excellent results.<br><br><b>How do I know I won't get hurt?</b> <br><br>If you do a certain type of exercise correctly, we can guarantee that you don't have to worry about injury of any kind. Also, if you are a beginner, you can find a blog on the site that introduces you to the entire training system and which talks about the potential danger of improper exercise.<br><br><b>Will I look great in a month?</b> <br><br>First of all, we would like to ask you not to expect too much from yourself. Habits and results develop gradually, this does not mean that results you won't notice after a month, of course, that you will gain discipline both physically and mentally it will mean you in every future endeavor in life!<br><br><b>I have a complex and that's why I use heavier weights and work irregularly!</b><br><br>It is a completely normal thing, you are not crazy or a loser if you work with less weight, with improper work and heavy weights, you can only injure one person, and that is yourself it is very important to use light weights in the beginning and then go to more, but gradually! No one has achieved success in a short time, but certainly with discipline, persistence and effort!</p>
    </div>
=======
    <div class="mainer"> 
      
      <p id="para">OUR <b>PLANS </b> </p>
      <div class="mainerwraper">
        <div class="model1">
        <img src="../assets/model1.png" alt="photo1" id="slika2">
        </div>
     <p id="opis"> <b>Something else about us!</b> <br><br>Hello user, we are very grateful for your trust and registration on our site, we hope that you we will not disappoint and with your help we will make you what you always wanted! First of all, we are not here to train for you, we are here to show you the way and with the help of your wishes we progress and achieve desired results.<br><br><b>Why our plans and why our site?</b> <br><br>Our plans are plans designed by today's best coaches. Our plans have been tested countless times and we can guarantee excellent results.<br><br><b>How do I know I won't get hurt?</b> <br><br>If you do a certain type of exercise correctly, we can guarantee that you don't have to worry about injury of any kind. Also, if you are a beginner, you can find a blog on the site that introduces you to the entire training system and which talks about the potential danger of improper exercise.<br><br><b>Will I look great in a month?</b> <br><br>First of all, we would like to ask you not to expect too much from yourself. Habits and results develop gradually, this does not mean that results you won't notice after a month, of course, that you will gain discipline both physically and mentally it will mean you in every future endeavor in life!<br><br><b>I have a complex and that's why I use heavier weights and work irregularly!</b><br><br>It is a completely normal thing, you are not crazy or a loser if you work with less weight, with improper work and heavy weights, you can only injure one person, and that is yourself it is very important to use light weights in the beginning and then go to more, but gradually! No one has achieved success in a short time, but certainly with discipline, persistence and effort!</p>
    </div>
    </div>
    <div class="main"> 
      <p id="para">RECOMENDED <b>PLANS</b> FOR YOUR <b>GOAL</b> </p> 
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
       <!-- <div class="desc">
        <p id="gara">PLAN DESCRIPTION</p>
        <p id="descr">{{desc}}</p>
      </div> -->
>>>>>>> bfc64e801f3eea26df540317d376ba0441ee7ff7
    </div>
    
  </div>
</template>
<script>
import axios from 'axios'

  export default {
    data() {
      return {
        message: "PLAN 1",
        desc: "Plan 1 is great way to imporve your body size ! ",

        plans: {}
      }
    },
    mounted(){
      this.getPlansForGoal()
    },
    components: {

    },
    methods: {
<<<<<<< HEAD
     async getPlansForGoal(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {goal: 2}})
        .then(res => {
          console.log(res);
          this.plans = res.data.msg
        })
      },
      showPlanOptions(plan){
        this.$router.push({name: 'editPlan', params: {id: plan.pla_id}})
      },  
=======
      // channgeText1() {
      //   this.message = "PLAN 1",
      //     this.desc = "Plan 1 is great way to improve your appearance !"
      // },
      // channgeText2() {
      //   this.message = "PLAN 2",
      //     this.desc = "Plan 2 is great way to improve your appearance !"
      // },
      // channgeText3() {
      //   this.message = "PLAN 3",
      //     this.desc = "Plan 3 is great way to improve your appearance ! "
      // }
>>>>>>> bfc64e801f3eea26df540317d376ba0441ee7ff7
    }
  }
</script>
<style scoped>
  .plans-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 2rem;
  }
  .plan-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(61, 61, 61);
    position: relative;
    width: 100%;
    min-height: 8rem;
    /* box-shadow: 0 -15px 30px 20px rgb(53, 0, 0); */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 2px solid gray;
  }
  .plan-buttons{
    display: flex;
    align-items: center;
  }
  .plan-info .description p{
    color: lightgray;
    font-size: 1.2rem;
  }
  .plans-list .plan-info div{
    display: flex;
    margin-left: 1rem;
    margin-top: 0.5rem;
    position: relative;
    bottom: 0.25rem;
  }
  .plans-list li{
    cursor: pointer;
    overflow-x: hidden;
    margin: 2rem;
    width: 26rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-top: 1px solid rgb(145, 145, 145);
    border-bottom: 1px solid rgb(88, 88, 88);
    box-shadow: 0 0 10px 2px rgb(27, 27, 27);
    border-radius: 10px;
    background-color: rgb(61, 61, 61);
  }
  .plan-image{
    width: 100%;
    height: 22rem;
    box-shadow: 0 0 2px 2px rgb(41, 41, 41);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plan-image img{
    object-fit: fill;
    width: auto;
    height: 100%;
  }
  .plan-info p{
    font-size: 1.8rem;
  }
  .plan-info label{
    font-size: 1.5rem;
  }
  button{
    height: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  } 

  b {
    color: red
  }
<<<<<<< HEAD
  #slika1 {
    width: 100vw;
  }
=======



  .mainw {}
  #slika1 {
    width: 100vw;
  }
  #slika2{
  }
>>>>>>> bfc64e801f3eea26df540317d376ba0441ee7ff7
  .gif {
    width: 100%;
    border-bottom: 3px solid white;
  }
  .mainer {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
<<<<<<< HEAD
    border-top: 2px solid white;
=======
    border-bottom: 2px solid white;

>>>>>>> bfc64e801f3eea26df540317d376ba0441ee7ff7
  }
  .mainerwraper{
    padding-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  
  #opis {
    padding-bottom: 10px;
    width: 35%;
    font-size: 20px;
    color: white
  }
  .model1{

padding-right: 70px;
  }
  .main {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    margin: px;
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
    font-size: 3rem;
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
    color: red;
  }

  .carousel-wrapper {
    height: 40rem;
    position: relative;
    width: 70rem;
    display: block;
    margin: 50px auto;
    border: 6px solid white;
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
    @media only screen and (max-width: 1150px) {

        .mainerwraper{
    padding-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #slika2{
    max-width: 90vw;
  }
  .model1{
    width: 70%;
  }
  
    }

  @media only screen and (max-width: 1035px) {
    .carousel-wrapper {
      height: 26rem;
      position: relative;
      width: 40rem;
      display: block;
      margin: 50px auto;
      border: 5px solid white;
    }
      #opis {
    padding-bottom: 10px;
    width: 75%;
    font-size: 20px;
    color: white
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
    @media only screen and (max-width: 650px) {
        #slika2{
    max-width: 70vw;
    align-items: center;
  }
  .model1{
    display: flex;
    width: 70%;
  }
    }

  @media only screen and (max-width: 700px) {
    .carousel-wrapper {
      height: 20rem;
      position: relative;
      width: 35rem;
      display: block;
      margin: 50px auto;
      border: 5px solid white;
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
      width: 23rem;
      display: block;
      margin: 50px auto;
      border: 5px solid white;
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
      width: 22rem;
      display: block;
      margin: 50px auto;
      border: 4px solid white;
    }

    #para {
      font-size: 33px;
      font: bolder;
      text-transform: uppercase;
      text-align: center;
    }

    #gara {
      padding-top: 27px;
      font-size: 25px;
      color: white;
    }

    #descr {
      font-size: 19px;
      text-decoration: underline;
    }
            #slika2{
    max-width: 70vw;
    align-items: center;
  }
  .model1{
    display: flex;
    width: 70%;
  }

  }
    @media only screen and (max-width: 350px) {


      
    }
</style>