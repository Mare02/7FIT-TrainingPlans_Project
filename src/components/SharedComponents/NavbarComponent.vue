<template>
    <nav class="nav-home">
      <div>
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="list-div">
        <ul class="nav-list">
          <li class="nav-menu">
            <button>menu</button>
            <ul>
              <li>
                Exercises list
              </li>
              <li>
                See all plans
              </li>
               <li>
                Dashboard
              </li>
              <li>
                About us
              </li>
              <li class="line"></li>
              <li>
                Admin settings
              </li>
            </ul>
          </li>
          <li>
            <a href="/login">log out</a>
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
  .nav-home{
    font-family: 'Bebas Neue', cursive;
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
    color:#eb2626;
  }
  .nav-list .nav-menu .line{
    height: 0.1rem;
    background-color: gray;
  }
  .nav-list .nav-menu ul{
    margin-left: -3.6rem;
    font-family: 'Roboto Condensed', sans-serif;
    width: 10rem;
    font-size: 1.2rem;
    position: absolute;
    background-color: rgba(85, 84, 84, 0.3);
    border: 1px solid gray;
    backdrop-filter: blur(5px);
    opacity: 0;
    color: white;
    list-style: none;
    text-decoration: none;
    pointer-events: none;
  }
  .nav-list .nav-menu ul li{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5rem;
    margin-left: 0rem;
  }
  .nav-list .nav-menu ul li:hover{
    background-color: #eb2626;
  }
  .nav-list .nav-menu button{
    text-shadow: 0 0 10px black;
    background: transparent;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    border: none;
  }
  .nav-list .nav-menu button:hover{
    transition: 0.5s;
    color:#eb2626;
  }
  .nav-list .nav-menu button:focus + ul{
    opacity: 1;
    pointer-events: all;
    transition: all 0.3s;
  }
  .nav-list a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #eb2626;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  .nav-list a:hover::before {
    transform: scaleX(1);
  }
  .list-div{
    margin-right: 1.5rem;
  }

   @media only screen and (max-width: 800px){
    .nav-list{
      font-size: 1.5rem;
    }
    .nav-home img{
      width: 5rem;
    }
    .nav-list .nav-menu button{
      font-size: 1.5rem;
    }
   }
</style>