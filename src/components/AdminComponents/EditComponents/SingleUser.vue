<template>
  <div class="edit-user-container" @click="getBack" id="edit_user_container">
    <div class="user-wrapper" id="user_wrapper">
      <div class="picture-space">
        <div class="user-picture" id="file" @click="showEdit($event, edit = this.editUser)"> 
          <img :src="user.file_url" alt="">
        </div>
      </div>
      <div class="user-details">
        <div class="details-name" id="name">
          <p>{{user.usr_name}}</p>
          <button @click="showEdit($event, edit = this.editUser)" class="edit-btn">Edit</button>
        </div>
        <div class="line"></div>
        <div class="details" id="details">
          <div id="username">
            <p><b>Username:</b> {{user.usr_username}}</p>
            <button @click="showEdit($event, edit = this.editUser)" class="edit-btn">Edit</button>
          </div>
          <div id="email">
            <p><b>Email:</b> {{user.usr_email}}</p>
            <button @click="showEdit($event, edit = this.editUser)" class="edit-btn">Edit</button>
          </div>
          <div>
            <p><b>Age:</b> {{user.age}}</p> 
          </div>
          <div id="sex">
             <p><b>Gender:</b> {{user.sex_name}}</p>
             <button @click="showEdit($event, edit = this.editUser)" class="edit-btn">Edit</button>
          </div> 
          <div id="bday">
            <p><b>Birthdate:</b> {{user.usr_bday}}</p>
            <button @click="showEdit($event, edit = this.editUser)" class="edit-btn">Edit</button>
          </div>
          <div>
            <p><b>Joined:</b> {{user.usr_joined}}</p>
          </div>
          <div id="role">
            <p><b>Role:</b> {{user.rol_name}}</p>
            <button @click="showEdit($event, edit = this.editUser)" class="edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="edit-input-container" v-show="showEditInput">
      <div class="input-div"> 
        <input placeholder="" type="text" id="input" v-if="!getIfDate()" v-model="editText">
        <input placeholder="" type="date" id="input" v-if="getIfDate() == 'bday'" v-model="editText">
        <select v-model="editText" v-if="getIfDate() == 'sex'">
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
        <select v-model="editText" v-if="getIfDate() == 'role'">
          <option value="1">Admin</option>
          <option value="2">Trainer</option>
          <option value="3">User</option>
        </select>
        <input type="file" @change="getFile($event)" v-if="getIfDate() == 'file'">
      </div>
      <div class="save-btn-wrapper">
        <button @click="closeEdit()" class="cancel">Cancel</button>
        <button @click="saveEdit()">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'

export default {
  data(){
    return{
      dayjs,

      user: {},
      editText: '',
      showEditInput: false,
    }
  },
  mounted(){
    this.getUser()

    let input = document.getElementById('input')
    document.getElementById('details').querySelectorAll('button').forEach(elem => {
      elem.addEventListener('click', () => {input.placeholder = elem.parentElement.id})})
    let name = document.getElementById('name')
    name.addEventListener('click', () => {input.placeholder = name.id})
  },
  methods: {
    async getUser(){
      const id = this.$route.params.id
      try {
        const res = await axios.get('http://783p122.e2.mars-hosting.com/7fit/users/filter?id=' + id)
        this.user = res.data.msg[0]
      } catch (error) {
        console.log(error);
      }
    },
    getIfDate(){
      let currentParam = localStorage.getItem('currentParam')
      if(currentParam == 'bday'){
        return 'bday'
      }
      if(currentParam == 'sex'){
        return 'sex'
      }
      if(currentParam == 'file'){
        return 'file'
      }
      if(currentParam == 'role'){
        return 'role'
      }
      if(currentParam != 'sex' && currentParam != 'bday' && currentParam != 'file'){
        return false
      }
    },
    getFile(event){
      console.log(event);
      this.editText = event.target.files[0]
    },
    getBack(event){
      const container = document.getElementById('edit_user_container')
      if(event.target == container){
        this.$router.push('/admin/users')
      }
    },
    async showEdit(event){
      let id;
      if (event.target.id == 'file'){
        id = event.target.id
      }
      else{
        id = event.target.parentElement.id;
      }
      localStorage.setItem('currentParam', id)
      if(this.showEditInput != true){
        this.showEditInput = !this.showEditInput
      }
      let param = localStorage.getItem('currentParam');
      console.log('original param:');
      console.log(param);
    },
    saveEdit(){
      console.log('saveedit');
      let param = localStorage.getItem('currentParam')
      this.editUser(param)
    },
    closeEdit(){
      this.showEditInput = false
      this.editText = ''
      localStorage.removeItem('currentParam')
    },
    async editUser(param){
      if(param != null && param != undefined && param != ''){
        console.log('ulaz 1');
        try {
          if(this.editText != ''){
            console.log(this.editText);
            if(param == 'bday'){
              const date = dayjs(this.editText).format('YYYY-MM-DD')
              await axios.put('http://783p122.e2.mars-hosting.com/7fit/users', {id: this.$route.params.id,
                                                                                [param]: date})
              .then((res) => {
                this.showEditInput = false
                location.reload();
                this.editText = ''
                localStorage.removeItem('currentParam')
              })   
            }
            if(param != 'bday' && param != 'file'){
              await axios.put('http://783p122.e2.mars-hosting.com/7fit/users', {id: this.$route.params.id,
                                                                                [param]: this.editText})
              .then((res) => {
                this.showEditInput = false
                location.reload();
                this.editText = ''
                localStorage.removeItem('currentParam')
              })   
            }
            if(param == 'file'){
              let formdata = new FormData()
              formdata.append('id', this.$route.params.id)
              formdata.append('file', this.editText)
              await axios.put('http://783p122.e2.mars-hosting.com/7fit/users', formdata)
              .then((res) => {
                this.showEditInput = false
                location.reload();
                this.editText = ''
                localStorage.removeItem('currentParam')
              }) 
            }
          }
          else{
            console.log('prazan string');
          }
        } catch (error) {
          console.log(error);
        }       
      }
      else{
        console.log('param is undefined');
      }                                             
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
  .edit-btn{
    font-size: 1.2rem;
  }
  .save-btn-wrapper{
    position: relative;
    top: 4rem;
  }
  .save-btn-wrapper button{
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    font-size: 1.4rem;
    cursor: pointer;
  }
  
  .edit-input-container{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 40rem;
    height: 40rem;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input-div{
    position: relative;
    top: 3rem;
  }
  .input-div input{
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    border: 2px solid white;
    border-radius: 5px;
    outline: none;
    width: 18rem;
    height: 2rem;
    color: white;
    background-color: rgb(68, 68, 68);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .edit-user-container{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: 100vh;
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
    margin-right: 3rem;
    box-shadow: 0 0 10px 2px black;
  }
  .picture-space{
    display: flex;
    justify-content: center;
    background-color: rgb(83, 83, 83);
    height: 5.8rem;
    border-bottom: 2px solid gray;
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
    z-index: 3;
    cursor: pointer;
  }
  .user-picture img:hover{
    opacity: 0.5;
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
    position: relative;
    left: 1.5rem;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  }
  .details-name p{
    font-size: 1.7rem;
  }
  .details-name button{
    width: 3rem;
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
  .details div button{
    width: 3rem;
    height: 2rem;
    position: relative;
    top: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 650px){
    .user-wrapper{
      width: 100%;
    }
    .picture-space .image-icon{
      top: 11.1rem;
    }
  }
  @media (max-width: 1750px){
    .edit-user-container{
      background-color: rgb(0, 0, 0, 0.5);
      justify-content: center;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    }
    .user-wrapper{
      margin-right: 0;
    }
  }
</style>