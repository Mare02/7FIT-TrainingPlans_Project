<template>
<div class="background">
  <AdminMenu/>
</div>
  
</template>

<script>
import AdminMenu from '../components/AdminComponents/AdminMenu.vue'

export default {
  components:{
    AdminMenu
  }
}
</script>

<style scoped>
  .background{
    background-color: rgb(68, 68, 68);
  }
</style>