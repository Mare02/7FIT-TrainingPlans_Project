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
          <div class="muscles" id="muscles">
            <div style="display: flex;">
              <b>Muscles:</b>
              <p v-for="mus in muscles" :key="mus.mus_id">
                {{mus.mus_name}},
              </p>
            </div> 
            <button @click="showEdit($event, edit = this.editExercise)" class="edit-btn">Edit</button>
          </div>
          <div class="goals" id="goals">
            <div style="display: flex;">
              <b>Goals:</b>
              <p v-for="goal in exercise.goals" :key="goal.goa_id">
                {{goal.goa_name}},
              </p>
            </div> 
            <button @click="showEdit($event, edit = this.editExercise)" class="edit-btn">Edit</button>
          </div>
          <div class="delete-wrap">
            <button class="delete-exe-btn" @click="deleteExercise()" style="margin-top: 5rem">delete exercise</button>
          </div>
        </div>
      </div>
    </div>
    <div class="edit-input-container" v-show="showEditInput">
      <div class="input-div"> 
        <input placeholder="" type="text" id="input" v-model="editText" v-if="getIfFile() == 'name'">
        <input type="file" @change="getFile($event)" v-if="getIfFile() == 'file'">
        <Multiselect class="multi" @change="newExeGoals($event)" 
          mode="tags" placeholder="Choose goals" :close-on-select="false" 
          :options="goals.options" v-if="getIfFile() == 'goals'"/>
        <Multiselect class="multi" @change="newExeMuscles($event)" 
          mode="tags" placeholder="Choose muscles" :close-on-select="false" 
          :options="muscles.options" v-if="getIfFile() == 'muscles'"/>
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
import Multiselect from '@vueform/multiselect'

export default {
  data(){
    return{
      exercise: {},
      // allMuscles: {},
      muscles: {},

      showEditInput: false,
      editText: '',
      editMuscles: [],
      editGoals: [],

      goals:{
        options: {1: 'Bulk',
                  2: 'Shred',
                  3: 'Cardio',
                  4: 'Progression',
                  5: 'Strenght'}
      },
      muscles:{
        options: {}
      }
    }
  },
  components:{
    Multiselect
  },
  mounted(){
    this.getExercise()
    this.getAllMuscles()
  },
  methods:{
    newExeGoals(event){
      this.editGoals = event.map(item => {return Number(item)})
    },
    newExeMuscles(event){
      this.editMuscles = event.map(item => {return Number(item)})
    },
    async getExercise(){
      const id = this.$route.params.id
      try {
        const res = await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises/' + id)
        console.log(res);
        this.exercise = res.data.msg
        this.muscles = res.data.msg.muscles
      } catch (error) {
        console.log(error);
      }
    },
    async deleteExercise(){
      await axios.delete('http://783p122.e2.mars-hosting.com/7fit/exercises', {params:{id: this.$route.params.id, 
                                                                              sid: localStorage.getItem('sid')}})
      .then(res =>{
        console.log(res);
        this.$router.push({name: 'Exercises'})
      })
    },
    getIfFile(){
      let currentParam = localStorage.getItem('currentParam')
      if(currentParam == 'file'){
        return 'file'
      }
      if(currentParam == 'goals'){
        return 'goals'
      }
      if(currentParam == 'muscles'){
        return 'muscles'
      }
      if(currentParam != 'file' && currentParam != 'muscles' && currentParam != 'goals'){
        return 'name'
      }
    },
    getFile(event){
      console.log(event);
      this.editText = event.target.files[0]
    },

    async showEdit(event){
      this.getAllMuscles()
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
          if(this.editText != '' || this.editMuscles != []){
            console.log(this.editText);
            if(param != 'file' && param != 'muscles'){
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
            if(param == 'muscles'){
              try {
                await axios.put('http://783p122.e2.mars-hosting.com/7fit/exercises', {id: this.$route.params.id,
                                                                                  [param]: Object.values(this.editMuscles)})
                .then((res) => {
                  console.log(res);
                  this.showEditInput = false
                  location.reload();
                  this.editText = ''
                  this.editMuscles = []
                  this.editGoals = []
                  localStorage.removeItem('currentParam')
                })
              } catch (error) {
                console.log(error);
              }
            }
            if(param == 'goals'){
              try {
                await axios.put('http://783p122.e2.mars-hosting.com/7fit/exercises', {id: this.$route.params.id,
                                                                                  [param]: Object.values(this.editGoals)})
                .then((res) => {
                  console.log(res);
                  this.showEditInput = false
                  location.reload();
                  this.editText = ''
                  this.editMuscles = []
                  this.editGoals = []
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
    async getAllMuscles(){
      await axios.get('http://783p122.e2.mars-hosting.com/7fit/info/muscles') 
      .then(res => {
        let allMuscles = res.data.muscles
        let obj = {}
        for(let key in allMuscles){
          obj[allMuscles[key].mus_id] = allMuscles[key].mus_name
        }
        console.log(obj);
        this.muscles.options = obj
      })
    },
    getBack(event){
      const container = document.getElementById('edit_exercise_container')
      if(event.target == container){
        this.$router.push('/exercises')
      }
    },
  }
}
</script>

<style scoped>
  b{
    color: lightgray;
    font-weight: 500;
    font-size: 1.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    margin-top: 1rem;
  }
  *{
    padding: 0;
  }
  .exercise-details .details .delete-wrap{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .delete-wrap .delete-exe-btn{
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 1.2rem;
    border-radius: 5px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border: none;
    width: 10rem;
  }
  .delete-wrap .delete-exe-btn:hover{
    background-color: #eb2626;
    color: white;
  }
  .edit-btn{
    cursor: pointer;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 1.2rem;
    border-radius: 5px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border: none;
    margin-top: 1rem;
  }
  .edit-btn:hover{
    background-color: #eb2626;
    color: white;
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
  .input-div .multi{
    width: 15rem;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: rgb(0, 0, 0, 0.5);
      justify-content: center;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
  }
  .exercise-wrapper{
    display: flex;
    flex-direction: column;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    width: 40rem;
    height: auto;
    background-color: rgb(58, 58, 58);
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
  .exercise-details .details .muscles{
    display: flex;
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
</style>