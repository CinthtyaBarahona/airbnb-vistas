<template>
    <!-- <div class="content-lugares" v-for="(lugares) in lugares" :key="lugares.id"></div> -->
    <div class="content-lugares">
        <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="@/assets/lugar.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 1</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
               <link-router to="/lugar" class="btn btn-primary btn-block">Ver Lugar</link-router>
            </div>
        </div>
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
        lugares: [],
      }
    },

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

.content-lugares .card{
    width: 230px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 2px var(--blue);
    overflow: hidden;
    margin: 10px;
    text-align: center;
    transition: all 0.25s;
    background: var(--orangelighting);
}

.content-lugares .card img{
    width: 500px;
    height: 200px;
}

.content-lugares .card .card-title{
    font-family: 'Comfortaa';
}

.content-lugares .card .card-body{
    font-family: 'Comfortaa';
}
</style>