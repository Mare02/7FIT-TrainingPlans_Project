<template>
  <div class="edit-user-container" @click="getBack">
    <div class="user-wrapper">
      <div class="picture-space">
        <div class="user-picture">
          <img :src="user.file_url" alt="">
        </div>
      </div>
      <div class="user-details">
        <div>
          <div class="detail-name">
            <p>{{user.usr_name}}</p>
          </div>
          <div class="line"></div>
          <div class="detail">
            <label>Username: </label>
            <p>{{user.usr_username}}</p>
          </div>
          <div class="detail">
            <label>Email: </label>
            <p>{{user.usr_email}}</p>
          </div>
          <div class="detail">
            <label>Age: </label>
            <p>{{user.age}}</p>
          </div>
          <div class="detail">
            <label>Gender: </label>
            <p>{{user.sex_name}}</p>
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
    getBack(){
      this.$router.push('/admin/manage-users')
    },
    transition(){
      
    }
  },
}
</script>

<style scoped>
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
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    width: 30rem;
    height: 30rem;
    background-color: rgb(58, 58, 58);
  }
  .picture-space{
    display: flex;
    justify-content: center;
  }
  .user-picture{
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 2px solid lightgray;
    background-color: rgb(105, 105, 105);
    position: relative;
    bottom: 5rem;
  }
  .user-picture img{
    object-fit: cover;
    height: 100%;
    width: auto;
    display: block;
  }
  .user-details{
    position: relative;
    bottom: 4rem;
    display: flex;
    justify-content: center;
  }
  .detail{
    display: flex;
    align-items: center;
    margin-top: 1rem;
    position: relative;
    right: 6rem;
  }
  .detail p{
    font-family: 'Roboto Condensed', sans-serif;
    margin-left: 0.4rem;
    font-size: 1.4rem;
  }
  .detail label{
    color: lightgray;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.4rem;
  }
  .detail-name{
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  .line{
    position: absolute;
    left: 0;
    top: 3.5rem;
    width: 100%;
    height: 2px;
    background-color: gray;
  }
  @media (max-width: 650px){
    .user-wrapper{
      width: 100%;
    }
    .detail{
      right: 3.5rem;
    }
  }
</style>