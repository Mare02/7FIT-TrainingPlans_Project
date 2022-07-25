<template>
    <div class="exercises-container">
        <h1>TEST</h1>
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
    .exercises-container{
        position: relative;
        border: 1px solid white;
    }
</style>