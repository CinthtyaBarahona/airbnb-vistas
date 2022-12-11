<template>
    <!-- <div class="content-lugares" v-for="(lugares) in lugares" :key="lugares.id"></div> -->
    <div class="content-lugares">
        
    </div>
</template>

<script>
export default {
    name: 'LugaresView',
    props: {
        msg: String
    },
    data() {
      return {
        lugarId: null,
        lugares: {
            name: "",
        },
      }
    },
    // async mounted() {
    //     this.lugar = this.$route.params.id;
    //     axios.get('/v1/lugares/'+ this.lugar)
    //     .then(response => {
    //         this.lugares.name = response.data.name;
    //         console.log(this.lugares);
    //     })
    // },
}
</script>

<style>
.content-lugares{
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 30px;
    width: 100vw;
    justify-content: center;
}

</style>