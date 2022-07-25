<template>
  <nav class="footer-container">
    <div class="footer-contact">
      <a href="">Contact Us</a>
    </div>
    <div class="footer-list">
      <ul>
        <li class="email">
          7fit@gmail.com
        </li>
        <li>
          <img src="../assets/facebook.svg" alt="">
        </li>
        <li>
          <img src="../assets/instagramsvg.svg" alt="">
        </li>
        <li>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer-container{
    background-color: rgb(70, 70, 70);
    height: 5rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-contact{
    font-family: 'Bebas Neue', cursive;
    font-size: 1.8rem;
    margin-left: 1.5rem;
  }
  .footer-list ul{
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    list-style: none;
  }
  .footer-list li{
    margin-right: 1rem;
  }
  .footer-list li img{
    position: relative;
    top: 2px;
    width: 2.8rem;
  }
  .footer-list .email{
    font-family: 'Roboto Condensed', sans-serif;
  }

  @media only screen and (max-width: 800px){
    .footer-contact{
      font-size: 1.3rem;
    }
    .footer-list .email{
      font-size: 1.2rem;
    }
    .footer-list ul img{
      width: 1.5rem;
    }
  }
</style>