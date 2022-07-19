<template>
<div class="background">
  <AdminMenu/>
</div>
<div>
  <nav>
    <router-link to="/login"></router-link>
    <router-link></router-link>
    <router-link></router-link>
  </nav>
  <router-view/>
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