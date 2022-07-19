<template>
    <nav class="nav-home">
      <div>
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="list-div">
        <ul class="nav-list">
          <li>
            <a href="/admin">admin</a> 
          </li>
          <li>
            <a href="/login">sign in</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
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
   }
</style>