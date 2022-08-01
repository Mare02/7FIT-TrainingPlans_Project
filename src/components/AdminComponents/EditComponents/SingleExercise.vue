<template>
  <div class="edit-exercise-container" @click="getBack" id="edit_exercise_container">
    <div class="exercise-wrapper" id="exercise_wrapper">
      <div class="picture-space">
        <div class="exercise-picture" id="file" @click="showEdit($event, edit = this.editExercise)"> 
          <img :src="exercise.file_url" alt="">
        </div>
      </div>
      <div class="exercise-details">
        <div class="details" id="details">
          <div id="name">
            <p><b>Name:</b> {{exercise.name}}</p>
            <button @click="showEdit($event, edit = this.editExercise)" class="edit-btn">Edit</button>
          </div>
          <div id="description">
            <p><b>Description:</b> {{exercise.description}}</p>
            <button @click="showEdit($event, edit = this.editExercise)" class="edit-btn">Edit</button>
          </div>
          <div id="muscles">
            <p><b>Muscles:</b> {{muscles}}</p> 
            <button @click="showEdit($event, edit = this.editExercise)" class="edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="edit-input-container" v-show="showEditInput">
      <div class="input-div"> 
        <input placeholder="" type="text" id="input" v-model="editText" v-if="!getIfFile()">
        <input type="file" @change="getFile($event)" v-if="getIfFile()">
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

export default {
  data(){
    return{
      exercise: {},
      muscles: {},

      showEditInput: false,
      editText: ''
    }
  },
  mounted(){
    this.getExercise()
  },
  methods:{
    async getExercise(){
      const id = this.$route.params.id
      try {
        const res = await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises/' + id)
        console.log(res);
        this.exercise = res.data.msg
        this.muscles = res.data.msg.muscles[0].mus_name
      } catch (error) {
        console.log(error);
      }
    },
    getIfFile(){
      let currentParam = localStorage.getItem('currentParam')
      if(currentParam == 'file'){
        return true
      }
      else{
        return false
      }
    },
    getFile(event){
      console.log(event);
      this.editText = event.target.files[0]
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
      this.editExercise(param)
    },

    closeEdit(){
      this.showEditInput = false
      this.editText = ''
      localStorage.removeItem('currentParam')
    },
    async editExercise(param){
      console.log('ulaz');
      if(param != null && param != undefined && param != ''){
        console.log('ulaz 1');
        try {
          if(this.editText != ''){
            console.log(this.editText);
            if(param != 'file'){
              try {
                await axios.put('http://783p122.e2.mars-hosting.com/7fit/exercises', {id: this.$route.params.id,
                                                                                  [param]: this.editText})
                .then((res) => {
                  console.log(res);
                  this.showEditInput = false
                  location.reload();
                  this.editText = ''
                  localStorage.removeItem('currentParam')
                })
              } catch (error) {
                console.log(error);
              }
                 
            }
            if(param == 'file'){
              try {
                let formdata = new FormData()
                formdata.append('id', this.$route.params.id)
                formdata.append('file', this.editText)
                await axios.put('http://783p122.e2.mars-hosting.com/7fit/exercises', formdata)
                .then((res) => {
                  console.log(res);
                  this.showEditInput = false
                  location.reload();
                  this.editText = ''
                  localStorage.removeItem('currentParam')
                }) 
              } catch (error) {
                console.log(error);
              }
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
    },
    getBack(event){
      const container = document.getElementById('edit_exercise_container')
      if(event.target == container){
        this.$router.push('/admin/manage-exercises')
      }
    },
  }
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
  .edit-exercise-container{
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
  .exercise-wrapper{
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
    height: 9rem;
    border-bottom: 2px solid gray;
  }
  .exercise-picture{
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 15rem;
    height: 15rem;
    border: 2px solid lightgray;
    background-color: rgb(58, 58, 58);
    position: relative;
    top: 1.8rem;
  }
  .exercise-picture img{
    object-fit: cover;
    height: 100%;
    width: auto;
    display: block;
    z-index: 3;
    cursor: pointer;
  }
  .exercise-picture img:hover{
    opacity: 0.5;
    z-index: 1;
  }
  .exercise-details{
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
  }
  .line{
    margin-top: 1rem;
    height: 2px;
    width: 100%;
    background-color: gray;
  }
  .details{
    margin-top: 10rem;
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
    .exercise-wrapper{
      width: 100%;
    }
    .picture-space .image-icon{
      top: 11.1rem;
    }
  }
  @media (max-width: 1750px){
    .edit-exercise-container{
      background-color: rgb(0, 0, 0, 0.5);
      justify-content: center;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    }
    .exercise-wrapper{
      margin-right: 0;
    }
  }
</style>