<template>
    <div class="login">
      <RegistroComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import RegistroComponent from '@/components/RegistroComponent.vue'
  
  export default {
    name: 'RegistroView',
    components: {
      RegistroComponent
    }
  }
  </script>