<template>
    <div class="container">
        <div class="exerises-list-wrapper">
            <ul class="exercises-list">
                <li  v-for="(exercise, exe_id) in this.allExercises" @click="setActiveExercise(exe_id)" :key="exercise.exe_id">
                    <div v-if="isExpanded !== exe_id" class="exercise">
                        <div class="exercise-picture">
                            <img :src=exercise.file_url alt="">
                        </div>
                        <p>Name: {{exercise.exe_name}}</p>
                        <p>Level: {{exercise.lev_name}}</p>   
                    </div>     
                    <div v-if="isExpanded === exe_id" class="exercise-expanded">
                        <div class="exercise-picture-expanded">
                            <img :src=exercise.file_url alt="">
                        </div>
                        <div class="exercise-content">
                            <p>Name:{{exercise.exe_name}}</p>
                            <p>Level: {{exercise.lev_name}}</p>
                            <p>Goals: {{exercise.name}} </p>
                            <p>Muscles: {{exercise.name}} </p>
                            <p>Description: {{exercise.description}} </p>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
        <div class="exercises-add-wrapper">
            <div class="exercise-add">
                ADD EXERCISE
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
        }
    },
    mounted(){
        this.getAllExercises()
    },
    methods:{
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

.container{
    display: flex;
    position: absolute;
    margin:2rem, 2rem, 2rem;
    margin-left: 16rem;
    padding-left: 1rem;
    /* border: 1px solid black; */
    width: 100vw;
}
.exerises-list-wrapper{
    margin: 0 2rem 2rem 2rem;
    /* border: 1px solid black; */
    width: 60%;
}
.exercises-add-wrapper{
    border: 1px solid black;
    min-width:  32rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
    
}
.exercises-list{
    margin-right: 2rem;
    list-style-type: none;
}
.exercises-list p{
    margin-left: 2rem;
    pointer-events: none;
}
.exercise{
    background-color: rgb(48, 48, 48);
    border-radius: 10px;
    box-shadow: 0 0 10px 0.5px rgb(0, 0, 0);
    width: 100%;
    height: 7rem;
    margin-top: 3rem;
    
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(192, 192, 192);
    border-bottom: 1px solid rgb(192, 192, 192);
}
.exercises-list .exercise-picture{
    margin-left: 1rem;
    display: flex;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    border: 2px solid rgb(192, 192, 192);
    border-radius: 100%;
}
.exercise-picture{
    
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 5rem;
    min-height: 5rem;
    border: 2px solid rgb(192, 192, 192);
    border-radius: 100%;
}
.exercises-list button{
    margin-right: 0;
    margin-left: auto;
    min-width: 6rem;
    min-height: 2rem;
    margin-right: 3rem;
}
.exercise-expanded{
    background-color: rgb(48, 48, 48);
    border-radius: 10px;
    box-shadow: 0 0 10px 0.5px rgb(0, 0, 0);
    width: 100%;
    height: 35rem;
    margin-top: 3rem;
    
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    border-top: 1px solid rgb(192, 192, 192);
    border-bottom: 1px solid rgb(192, 192, 192);
    padding: 2rem;
}
.exercise-content{
    width: 50%;
    display: block;
}

.exercise-expanded p{
    margin: 15px;
    max-width: 70%;
}
.exercise-expanded img{
    max-width: 15rem;
    max-height: 15rem;
    border-radius: 5%;
}

</style>