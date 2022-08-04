<template>
<div class="router-container">
  <router-view/>
</div>

</template>

<script>
import $ from 'jquery'

export default {
  data(){
    return{
      showNavbar: true,
    }
  },
  mounted(){
    window.addEventListener('resize', this.resizeNav)
  },
  components:{

  },
  methods:{
    selectActive(event){
      let element_id = event.target.id;
      let element = document.getElementById(String(element_id));
      if(!(element.classList.contains('active'))){
        element.classList.add('active')
      }
      let otherElements = document.querySelectorAll('li')
      otherElements.forEach((elem) => {
        if(elem.id != element_id){
          elem.classList.remove('active')
        }
      });
    },
    openNav(){
      this.showNavbar = !this.showNavbar      
    },
    closeNavOnSelect(){
      if($(window).width() <= 650){
        this.showNavbar = false
      }
    },
    resizeNav(e){
      if($(window).width() > 650){
        this.showNavbar = true
      }
    },
  }
}
</script>
<style scoped>
  .router-container{
    overflow-x: hidden;
    background-color: rgb(36, 36, 36);
    height: 100vh;
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
</style>