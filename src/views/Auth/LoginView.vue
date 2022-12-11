<script setup>
import HeaderComponent from '../../components/Auth/HeaderAuthComponent.vue';
</script>

<template>
  <HeaderComponent/>
  <div class="login">
    <Login msg="Iniciar Sesion"/>
  </div>
</template>
  
  <script>
  // @ is an alias to /src
  import Login from '@/components/Auth/Login.vue'
  
  export default {
    name: 'LoginView',
    components: {
      Login
    }
  }
  </script>
  