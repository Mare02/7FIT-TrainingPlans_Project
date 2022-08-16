<template>
  <div class="main">
    <div class="profile-title">
      <p>Profile</p>
    </div>
    <div class="content-wrap">
      <div class="user-details">
        <input type="file" id="src" @change="openPfpInput()">
        <div class="user-picture" @click="openImageSelect()">
          <img :src="user.file_url" id="target" alt="">
        </div>
        <div class="change-pfp">
          <p>Change profile image</p>
        </div>
        <div class="save-pfp-btns" id="pfp-btns" v-if="showSavepfp">
          <button @click="savePfp()">save</button>
          <button>cancel</button>
        </div>
        <div class="name">
          <p>{{user.usr_name}}</p>
        </div>
        <div class="user-info">
          <div>
            <label>Age: </label>
            <p>{{user.age}}</p>
          </div>
          <div>
            <label>Height: </label>
            <p>{{user.usr_height}}cm</p>
          </div>
          <div>
            <label>Weight: </label>
            <p>{{user.usr_weight}}kg</p>
          </div>
          <div>
            <label>Goal: </label>
            <p>{{user.goa_name}}</p>
          </div>
          <div>
            <label>BMI: </label>
            <p>{{user.bmi}}</p>
          </div>
          <div>
            <label>Role: </label>
            <p>{{user.rol_name}}</p>
          </div>
        </div>
        <div class="user-menu">
          <router-link to="/profile/my_program">
            <div>
              My program
            </div>
             <div>
              >
            </div>
          </router-link>
          <router-link to="/profile/my_details">
            <div>
              My details
            </div>
             <div>
              >
            </div>
          </router-link>
          <!-- <router-link v-if="user.rol_id != 3" to="/profile/my_details">
            <div>
              My created plans
            </div>
             <div>
              >
            </div>
          </router-link> -->
        </div>
      </div>
      <div class="content">
        <router-view class="animate__animated animate__fadeInRight"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store';

export default {
  components: {
    
  },
  data(){
    return{
      user: {},
      userPfp: '',
      showSavepfp: false
    }
  },
  mounted(){
    this.getUserById()
  },
  methods:{
    openImageSelect(){
      document.getElementById('src').click()
    },
    async openPfpInput(){
      this.showSavepfp = true
      let src = document.getElementById('src')
      let target = document.getElementById('target')
      this.userPfp = src.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(src.files[0])
      reader.onload = function(e) {
        target.src = e.target.result
      }
    },
    async savePfp(){
      const id = store.getters.checkUserId
      let formdata = new FormData()
      formdata.append('id', id)
      formdata.append('file', this.userPfp)
      axios.put('http://783p122.e2.mars-hosting.com/7fit/users', formdata, {config: {"content-type": "multipart/formdata"}})
      .then(res => {
        this.userPfp = ''
        this.showSavepfp = false
        this.getUserById()
      })
    },
    async getUserById(){
      const id = store.getters.checkUserId
 
      try {
        const res = await axios.get('http://783p122.e2.mars-hosting.com/7fit/users/filter?id=' + id)
        this.user = res.data.msg[0]
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
  
  .main {
    background-color: rgb(36, 36, 36);
    color: white;
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
  }

  .profile-title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    height: 6rem;
    width: 100%;
    background-color: rgb(59, 59, 59);
  }
  .profile-title p{
    font-size: 2.5rem;
  }

  .content-wrap{
    /* padding-left: 10%;
    padding-right: 10%; */
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items:flex-start;
  }

  .user-details{
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .user-details .name{
    margin-top: 2.5rem;
    font-size: 1.5rem;
  }

  .user-picture{
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 2px solid lightgray;
    background-color: rgb(58, 58, 58);
    position: relative;
    top: 1.8rem;
  }
  .user-picture img{
    object-fit: cover;
    height: 100%;
    width: auto;
    display: block;
    cursor: pointer;
  }
  .user-details .change-pfp{
    position: relative;
    bottom: 3.7rem;
    opacity: 0;
    pointer-events: none;
  }
  .user-picture:hover{
    opacity: 0.5;
  }
  .user-picture:hover + div{
    opacity: 1;
  }
  #src{
    display: none;
  }
  .user-details .save-pfp-btns{
    margin-top: 1.2rem;
    display: flex;
  }
  .user-details .save-pfp-btns button{
    height: 1.8rem;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin: 0.1rem;
    display: flex;
    align-items: center;
  }
  .user-info{
    width: 100%;
    margin-top: 1rem;
  }
  .user-info div{
    height: 3rem;
    border-bottom: 1px solid gray;
    font-size: 1.3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-menu{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  .user-menu a{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.3rem;
    height: 3rem;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: rgb(180, 180, 180);
  }
  .user-menu a:hover{
    color: white;
  }
  .user-menu .router-link-active{
    color: white;
  }

  .content{
    margin-top: 1rem;
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 800px){
    .content-wrap{
      flex-direction: column;
      align-items: center;
    }
    .user-details .change-pfp{
      font-size: 0.9rem;
      bottom: 2.9rem;
    }
    .content{
      margin-top: 3rem;
    }
    .profile-title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
      height: 4rem;
      width: 100%;
      background-color: rgb(59, 59, 59);
    }
    .profile-title p{
      font-size: 2rem;
    }
    .user-picture{
      width: 8rem;
      height: 8rem;    
    }
  }
</style>