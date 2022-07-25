<template>
    <div class="container">
        <div class="exerises-list-wrapper">
            <ul class="exercises-list">
                <li v-for="(exercise, index) in this.allExercises" :key="exercise.exe_id">
                    <div v-if="isExpanded !== index" class="exercise" @click="setActiveExercise(index)">
                        <div class="exercise-picture">
                            <img :src=exercise.file_url alt="">
                        </div>
                        <p>Name: {{exercise.exe_name}}</p>
                        <p>Level: {{exercise.lev_name}}</p>
                    </div>
                    <div v-if="isExpanded === index" class="exercise-expanded">
                        <div class="exercise-expanded-picture">
                            <img :src=exercise.file_url alt="">
                        </div>
                        <div class="exercise-expanded-content-wrapper">
                            <div class="exercise-expanded-content">
                                <p>Name:{{exercise.exe_name}}</p>
                                <p>Level: {{exercise.lev_name}}</p>
                                <p>Goals: {{exercise.goals}} </p>
                                <p>Muscles: {{exercise.muscles}} </p>
                                <p>Description: {{exercise.exe_desc}} </p>
                            </div>
                            <div class="exercise-expanded-buttons">
                                <button id="exercise-expanded-button-edit" @click="this.isEdit = index">EDIT
                                    EXERCISE</button>
                                <button id="exercise-expanded-button-delete" @click="deleteExericse">DELETE EXERCISE</button>
                            </div>
                        </div>
                        <span class="close-button" @click="setActiveExercise(null)">❌</span>
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
            isExpanded: null,
            isEdit:false,
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
        setActiveExercise(index){
            this.isExpanded == index ? this.isExpanded = null : this.isExpanded = index
        },
        deleteExericse(){
            confirm("Are you sure")
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
    width: 70vw;
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
    max-height: 35rem;
    margin-top: 3rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    border-top: 1px solid rgb(192, 192, 192);
    border-bottom: 1px solid rgb(192, 192, 192);
    padding: 2rem;
    transition: height 300ms;
    position: relative;
}
.exercise-expanded-content{
    width: 40%;
    display: block;
}
.exercise-expanded-buttons{
    display: flex;
    flex-direction: column;   
    justify-content: space-around;
    z-index: 1;
}
.exercise-expanded-buttons button{
    width: 10rem;
    height: 4rem;
    margin: 1rem 0 1rem 0;
}

#exercise-expanded-button-delete:hover{
    background-color: gray;
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
.exercise-expanded-content-wrapper{
    display: flex;
}
.close-button{
    position: absolute;
    top: 10px;
    right: 0;
    width: 32px;
    height: 32px;
    opacity: 0.5;  
    color:black;
}
.close-button:hover{
    opacity: 1;
    color: red
    
}
</style>