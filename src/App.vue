<template>
<div class="app">
  <div class="app-container">
    <NavbarComponent :isLoggedIn="this.checkIsLoggedIn" :role="this.checkRole" v-if="this.$route.name != 'Login'"/>
    <router-view/>
  </div>
</div>
</template>

  <script>
  import NavbarComponent from '../src/components/SharedComponents/NavbarComponent.vue'
  import store from '../src/store'
  import axios from 'axios'
  import getUser from '../src/exports/user'
  import { mapActions, mapGetters } from 'vuex'

  export default{
    components:{
      NavbarComponent
    },
    mounted(){ 
      this.getUserinfo()
      console.log('%cWELCOME TO 7FIT!', `color: #eb2626;font-size: 1rem;font-weight: bold;`);
    },
    data(){
      return{
        role: null,
        isLoggedIn: null
      }
    },
    computed:{
      ...mapGetters(['checkIsLoggedIn', 'checkRole'])
    },
    methods:{
      async getUserinfo(){
        let res = await getUser()

        if(res){
          if(res.data.msg.role == 1){
            console.log('admin login');
          }
          if(res.data.msg.role == 2){
            console.log('trainer login');
          }
          else{
            console.log('user login');
          }
          this.setLogin(true)
          this.setRole(res.data.msg.role)
          this.setUserId(res.data.msg.id)

          this.role = store.state.user.role_id;
          this.isLoggedIn = store.state.user.isLoggedIn;
          
          console.log('is logged in: ' + store.state.user.isLoggedIn);
          console.log('user role id: ' +store.state.user.role_id);
          console.log('user id: ' +store.state.user.user_id);
        }
      },
      ...mapActions(['setLogin', 'setRole', 'setUserId']),
    },
  }
  </script>
  

  <style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* -webkit-touch-callout: none; 
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
         */
    user-select: none;
  }

  .app-container{
    position: absolute;
    width: 100%;
    top: 0;
  }

  button{
    font-family: 'Bebas Neue', cursive;
  }

  body{
    overflow-x: hidden;
    width: 100%;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;
  } 

  label, input, p{
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
  }

  a{
    text-decoration: none;
    color: white;
  }
  
  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-track{
    background-color: gray;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #eb2626;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-button{
    background-color: rgb(54, 54, 54);
  }
</style>>
