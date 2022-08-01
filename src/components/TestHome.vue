<template>
  <div class="main">
    <div class="wrapper1">
      <p class="start">
        <span class="end1"></span><span class="middle1">WELCOME &nbsp; </span>
        <span class="end2"><b>MIHAJLO</b></span>
      </p>
    </div>
    <div class="wrapps">
      <div class="wrapper2">
        <div class="head2">
          <h2>TODAY'S <b>PLAN</b></h2>
          <br /><br />
          <div class="table2"></div>
        </div>
        <!-- <div class="head3">
          <h2>WEEKLY <b>PLAN</b></h2>
          <br /><br />
          <div class="table3"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "../components/SharedComponents/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },
};
</script>

<style scoped>

.main {
  background-color: rgb(0, 0, 0);
  overflow-x: hidden;
  height: 100vh;
  width: 100%;
}
.wrapper1 {
  width: 100%;
  height: 370px;
  padding-top: 80px;
  padding-left: 55px;
}
.wrapper2 {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
}
.head2 {
  width: 630px;
  height: 500px;
  text-align: center;
}
.table2 {
  border: 7px solid white;
  border-radius: 25px;
  width: 630px;
  height: 500px;
}
.head3 {
  width: 630px;
  height: 500px;
  text-align: center;
}
.table3 {
  border: 7px solid white;
  border-radius: 25px;
  width: 630px;
  height: 500px;
}

b {
  color: red;
}
h2 {
  font-size: 40px;
  font-family: "Roboto Condensed", sans-serif;
  color: white;
}
#head1 {
  padding-bottom: 50px;
  font: bold;
  text-align: center;
  font-size: 30px;
}
.wrapps {
  padding-bottom: 50px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.end1,
.middle1,
.middle2 {
  display: inline-block;
  overflow: hidden;
  height: 1.5em;
}
.end2 {
  position: absolute;
  color: #ff6a00;
}
.middle1,
.middle2 {
  color: #cfcfcf;
}
.middle1 {
  animation: ani1 5s infinite;
  animation-delay: -3s;
  max-width: 0;
}
.middle2 {
  animation: ani2 5s infinite;
  animation-delay: -3s;
  max-width: 0;
}

@keyframes ani1 {
  0% {
    max-width: 500px;
  }

  25% {
    max-width: 0;
  }

  75% {
    max-width: 0;
  }

  90% {
    max-width: 500px;
  }

  100% {
    max-width: 500px;
  }
}

@keyframes ani2 {
  0% {
    max-width: 0;
  }

  25% {
    max-width: 0;
  }

  50% {
    max-width: 500px;
  }

  75% {
    max-width: 0;
  }

  100% {
    max-width: 0;
  }
}
.start {
  font: bold;
  font-size: 80px;
  font-family: "Roboto Condensed", sans-serif;
  color: white;
}
@media only screen and (max-width: 1380px) {
  .wrapper2 {
    width: 100%;
    height: 100%;
    padding-top: 400px;
    display: flex;
    margin: 80px;
    flex-direction: column;
    align-items: center;
  }
  .head1 {
    width: 500px;
    height: 500px;
    text-align: center;
    margin: 70px;
  }
  .head2 {
    width: 500px;
    height: 500px;
    text-align: center;
    margin: 70px;
  }
  .head3 {
    width: 500px;
    height: 500px;
    text-align: center;
    margin: 70px;
  }

  .table2 {
    border: 6px solid white;
    border-radius: 25px;
    width: 500px;
    height: 450px;
  }
  .table3 {
    border: 6px solid white;
    border-radius: 25px;
    width: 500px;
    height: 450px;
  }
}
@media only screen and (max-width: 750px) {
  .start {
    display: flex;
    flex-direction: column;
    font: bold;
    font-size: 50px;
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }
  h2 {
    font-size: 25px;
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }
}
@media only screen and (max-height: 915px) {
  .wrapper2 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 640px;
  }
  .start {
    display: flex;
    flex-direction: column;
    font: bold;
    font-size: 40px;
    font-family: "Roboto Condensed", sans-serif;
    color: white;
  }
  
}
</style>