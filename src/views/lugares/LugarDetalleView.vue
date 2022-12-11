<script setup>
import { useRoute } from 'vue-router';
import HeaderComponent from '../../components/Home/HeaderComponent.vue';
import FooterComponent from '../../components/Home/FooterComponent.vue';
import LugareDetalleComponent from '../../components/lugares/LugareDetalleComponent.vue';

const route = useRoute()
//const { id } = route.params
console.log(route.params)
</script>

<template>
<div class="lugares">
    <HeaderComponent/>
    <LugareDetalleComponent/>
    <FooterComponent/>
</div>
</template>
<script>

export default {
    name: 'LugarDetalle',
  }
</script>