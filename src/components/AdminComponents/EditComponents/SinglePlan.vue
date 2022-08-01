<template>
  <div class="single-plan-container">
    {{plan}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      plan: {}
    }
  },
  mounted(){
    this.getPlanById()
  },
  methods: {
    async getPlanById(){
      try {
        await axios.get('http://783p122.e2.mars-hosting.com/7fit/plans', {params: {id: this.$route.params.id}})
        .then(res => {
          console.log(res);
          this.plan = res.data.msg
        })
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style>
  .single-plan-container{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: rgb(255, 0, 0);
    color: white;
  }
</style>