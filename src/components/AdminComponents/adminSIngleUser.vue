<template>
  <div class="edit-user-container" @click="getBack" id="edit_user_container">
    <div class="user-wrapper" id="user_wrapper">
      <div class="picture-space">
        <div class="user-picture">
          <img :src="user.file_url" alt="">
        </div>
        <img class="image-icon" src="../../assets/icons/image_edit.png" alt="">
      </div>
      <div class="user-details">
        <div class="details-name">
          <p>{{user.usr_name}}</p>
        </div>
        <div class="line"></div>
        <div class="details">
          <div id="username">
            <p><b>Username:</b> {{user.usr_username}}</p>
            <button class="edit-btn">Edit</button>
          </div>
          <div id="email">
            <p><b>Email:</b> {{user.usr_email}}</p>
            <button id="">Edit</button>
          </div>
          <div id="age">
            <p><b>Age:</b> {{user.age}}</p> 
            <button>Edit</button>
          </div>
          <div id="sex">
             <p><b>Gender:</b> {{user.sex_name}}</p>
             <button>Edit</button>
          </div> 
          <div id="usr_bday">
            <p><b>Birthdate:</b> {{user.usr_bday}}</p>
            <button>Edit</button>
          </div>
          <div>
            <p><b>Joined:</b> {{user.usr_joined}}</p>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      user: {}
    }
  },
  mounted(){
    this.getUser()
  },
  methods: {
    async getUser(){
      const id = this.$route.params.id
      try {
        const res = await axios.get('http://783p122.e2.mars-hosting.com/7fit/users/filter?id=' + id)
        console.log(res.data.msg[0]);
        this.user = res.data.msg[0]
      } catch (error) {
        
      }
    },
    getBack(event){
      const container = document.getElementById('edit_user_container')
      if(event.target == container){
        this.$router.push('/admin/manage-users')
      }
    },
    transition(){
      
    }
  },
}
</script>

<style scoped>
  b{
    color: lightgray;
    font-weight: 500;
  }
  *{
    padding: 0;
  }
  .edit-user-container{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.7);
    z-index: 999;
  }
  .user-wrapper{
    display: flex;
    flex-direction: column;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    width: 40rem;
    height: 40rem;
    background-color: rgb(58, 58, 58);
  }
  .picture-space{
    display: flex;
    justify-content: center;
    background-color: rgb(83, 83, 83);
    height: 5.8rem;
    border-bottom: 2px solid gray;
  }
  .picture-space .image-icon{
    position: absolute;
    top: 15.15rem;
    z-index: 2;
    width: 2.5rem;
    pointer-events: none;
    /* opacity: 0; */
  }
  .user-picture{
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 8rem;
    height: 8rem;
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
    z-index: 999;
  }
  .user-picture img:hover{
    opacity: 0.5;
    cursor: pointer;
    z-index: 1;
  }
  .user-details{
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
  }
  .details-name{
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  }
  .details-name p{
    font-size: 1.7rem;
  }
  .line{
    margin-top: 1rem;
    height: 2px;
    width: 100%;
    background-color: gray;
  }
  .details{
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .details p{
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  .details div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .details div img{
    position: relative;
    top: 0.4rem;
    margin-left: 2rem;
    width: 1.7rem;
  }

  @media (max-width: 650px){
    .user-wrapper{
      width: 100%;
    }
    .picture-space .image-icon{
      top: 11.1rem;
    }
  }
</style>