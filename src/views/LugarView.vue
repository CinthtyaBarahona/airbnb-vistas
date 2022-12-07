<template>
    <div class="lugar">
      <AgregarLugar/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import AgregarLugar from '@/components/AgregarLugar.vue'
  
  export default {
    name: 'LugarView',
    components: {
      AgregarLugar
    }
  }
  </script>