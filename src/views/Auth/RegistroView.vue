<script setup>
import HeaderComponent from '../../components/Auth/HeaderAuthComponent.vue';
</script>

<template>
  <HeaderComponent/>
  <div class="login">
    <RegistroComponent/>
  </div>
</template>
  
  <script>
  // @ is an alias to /src
  import RegistroComponent from '@/components/Auth/RegistroComponent.vue'
  
  export default {
    name: 'RegistroView',
    components: {
      RegistroComponent
    }
  }
  </script>