<template>
    <div class="exercises-wrapper">
        <div class="filter-bar">
            <div class="search-by-name" v-if="!useFilter">
                <input type="text" placeholder="Search by name" name="search-by-name">
                <button class="btns">Search</button><button class="btns" @click="useFilter = !useFilter">USE FILTER</button>
            </div>
            <div class="search-by-filter" v-if="useFilter">
                <label for="cb-muscles">Muscle: </label>
                <select v-model="selectedMuscle" id="cb-muscles">
                    <option value="0">None</option>
                    <option v-for="muscle in muscles" :key="muscle.mus_id">{{muscle.mus_name}}</option>
                </select>
            
                <label for="cb-goals">Goal: </label>
                <select v-model="selectedGoal" id="cb-goals">
                    <option value="0">None</option>
                    <option v-for="goal in goals" :key="goal.goa_id">{{goal.goa_name}}</option>
                </select>  
                <button class="btns">Search</button>
                <button  class="btns" @click="useFilter = !useFilter">USE SEARCH</button> 

            </div>          
        </div>
        <div class="exercises">
            <div class="exercises-list-wrapper">
                <ul class="exercises-list">
                    <li class="exercise" v-for="(exercise, index) in allExercises" :key = "index">
                        <div class="execise-wrapper">
                            <div class="photo-wrapper">
                                <!-- <img :src="exercixse.file_url" alt=""> -->
                            </div>
                            <div class="content-wrapper">
                                <p>{{exercise.exe_name}}</p>
                                <p>{{exercise.lev_name}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="exercises-add-and-show">
                <div class="show-exercise">
                    <p> show exercise</p>
                </div>
                <div class="add-exercise">
                    <p>Add exerccise</p>
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
            isExpanded: '',
            allExercises: [],
            muscles: [],
            goals:[],
            selectedMuscle: 0,
            selectedGoal: 0,
            useFilter: false
        }
        
    },
    mounted(){
        this.getAllExercises()
        this.getAllMuscles()
        this.getAllGoals()
    },
    methods:{
        async getAllGoals(){
            try{
                axios.get('http://783p122.e2.mars-hosting.com/7fit/info/goals')
                .then(res => {
                    this.goals = res.data.goals
                    console.log(this.goals);
                })
            }catch(error){
                console.log(error);
            }
        },        
        async getAllMuscles(){
            try{
                axios.get('http://783p122.e2.mars-hosting.com/7fit/info/muscles')
                .then(res => {
                    this.muscles = res.data.muscles
                    console.log(this.muscles);
                })
            }catch(error){
                console.log(error);
            }
        },
        async getAllExercises(){
            try{
                axios.get('http://783p122.e2.mars-hosting.com/7fit/exercises')
                .then(res => {
                    console.log(res)
                    this.allExercises = res.data.exercises
            })
            }catch(error){
                console.log(error);
            }            
        },
        setActiveExercise(exe_id){
            this.isExpanded = exe_id;
        }
    }
}
</script>

<style scoped>
.filter-bar{
    margin: 1rem;
    display: flex-start;
}
.search-by-filter select, label {
    margin-left: 0.5rem;
    margin-right: 1rem ;
}
.btns{
    font-size: larger;
    margin: 5px;
    margin-left: 5px;
    min-width: 100px ;
    min-height: 30px;
}
.exercises{
    display: flex;
    min-width: 100%;
    min-height: 100%;
    border: 1px solid green;
    justify-content: flex-start;
}
.exercises-list-wrapper{
    border: 1px solid green;
    margin: 1rem ;
    margin-right: 0.5rem;
    width: 60%;

}
.exercise{
    display: flex;
    align-items: center;
    border: 1px solid green;
}
 .exercise div{
    display: flex;
    margin-left: 1rem;
    margin-top: 0.5rem;
    position: relative;
    bottom: 0.25rem;
  }
  .exercise li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 40rem;
    background: transparent;
    border-top: 1px solid rgb(145, 145, 145);
  }
.exercises-add-and-show{
    border: 1px solid green;
    margin: 1rem;  
    margin-left: 0.5rem;  
    margin-right: 0.5rem;
    width: 40%;
    min-width: 22rem;
    max-width: 40vw;
}
.show-exercise{
    border: 1px solid green;
    margin: 1rem;    
    min-width: 50%;
    height: 40vh;
}
.add-exercise{
    border: 1px solid green;
    margin: 1rem;    
    min-width: 50%;
    height: 40vh;
}
 /* INPUT */
input{
    max-width: 30rem;
    height: 3rem;
    background-color: rgb(77, 77, 77);
    border: 2px solid rgb(150, 149, 149);
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.2rem;
    margin-right: 2rem;
  }
  ::placeholder{
    font-family: "Bebas Neue", cursive;
    position: relative;
    top: 0.5px;
    font-size: 1.2rem;
  }
  input:focus::placeholder{
    transform: translateY(-3rem);
    transition: 1s;
  }
/* COMBO BOX */



</style>