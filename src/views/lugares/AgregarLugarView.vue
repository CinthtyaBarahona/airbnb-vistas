<script setup>
import HeaderComponent from '../../components/Home/HeaderComponent.vue';
import FooterComponent from '../../components/Home/FooterComponent.vue';
</script>

<template>
    <div class="lugar">
      <HeaderComponent/>
      <AgregarLugar/>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import AgregarLugar from '@/components/lugares/AgregarLugar.vue'
  
  export default {
    name: 'LugarView',
    components: {
      AgregarLugar
    }
  }
  </script>