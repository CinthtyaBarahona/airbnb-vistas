<script setup>
import HeaderComponent from '../../components/Home/HeaderComponent.vue';
import FooterComponent from '../../components/Home/FooterComponent.vue';
</script>

<template>
    <div class="reserva">
      <HeaderComponent/>
      <Agregarreserva/>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Agregarreserva from '@/components/reserva/Agregarreserva.vue'
  
  export default {
    name: 'AgregarReservaView',
    components: {
      Agregarreserva
    }
  }
  </script>