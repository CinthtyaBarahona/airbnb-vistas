<script setup>
import HeaderComponent from '../components/Home/HeaderComponent.vue';
import FooterComponent from '../components/Home/FooterComponent.vue';
</script>

<template>
  
  <div class="home">
    <HeaderComponent/>
    <HelloWorld/>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
