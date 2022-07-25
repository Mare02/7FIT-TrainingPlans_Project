<template>
  <div class="container">
    <input type="text" v-model="name">
    <input type="file" @change="getFile">
    <input type="text" v-model="description">
    <input type="text">
    <!-- <input type="text" v-model="muscles">
    <input type="text" v-model="level">
    <input type="text" v-model="goals"> -->
    <button @click="createExercise">create</button>
    <button @click="edit">edit</button>
    <button @click="get">get</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      id: 75,
      name: '',
      file: null,
      description: '',
      muscles: [2,3],
      level: 2,
      goals: [3, 2],
    }
  },
  methods:{
    async createExercise(){
      try{
        const formdata = new FormData();

        formdata.append('name', this.name)
        formdata.append('file', this.file)
        formdata.append('description', this.description)
        formdata.append('muscles', this.muscles[0])
        formdata.append('muscles', this.muscles[1])
        formdata.append('level', this.level)
        formdata.append('goals', this.goals[0])
        formdata.append('goals', this.goals[1])

        await axios.post('http://783p122.e2.mars-hosting.com/7fit/exercises', formdata)
        .then(res => {
          console.log(res);
        })
      } 
      catch (error){
        console.log('this error:');
        console.log(error);
      }
      
    },
    async getFile(event){
      this.file = event.target.files[0];
      console.log(this.file);
    },
    async edit(){
      try{
        const formdata = new FormData();

        formdata.append('id', this.id)
        formdata.append('name', this.name)
        formdata.append('file', this.file)
        formdata.append('description', this.description)
        formdata.append('muscles', this.muscles[0])
        formdata.append('muscles', this.muscles[1])
        formdata.append('level', this.level)
        formdata.append('goals', this.goals[0])
        formdata.append('goals', this.goals[1])

        await axios.put('http://783p122.e2.mars-hosting.com/7fit/exercises', formdata)
        .then(res => {
          console.log(res);
        })
      } 
      catch (error) {
        console.log(error);
      }
    },
    async get(){
      try {
        await axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises/' + this.id)
        .then(res => {
          console.log(res);
        })
      } 
      catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.container{
  display: grid;
  place-items: center;
}
.container input{
  color: black;
}
</style>