<script setup>
import HeaderComponent from '../../components/Home/HeaderComponent.vue';
import FooterComponent from '../../components/Home/FooterComponent.vue';
import LugaresComponents from '../../components/lugares/LugaresComponents.vue';
</script>

<template>
<div class="lugares">
    <HeaderComponent/>
    <LugaresComponents/>
    <FooterComponent/>
</div>
</template>
<script>

export default {
    name: 'LugaresView',
    components: {
      LugaresComponents
    }
  }
</script>