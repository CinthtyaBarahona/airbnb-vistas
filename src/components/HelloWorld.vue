<template>
  <div class="busqueda">
        <div align="center">
            <input type="search" placeholder="Buscar un lugar..." name="busquedaInicio" style="padding-left:15px;">
            <br>
            <label>¿Qué estás buscando?</label>
        </div>
        <div class="icons-busqueda">
            <a href="#">
                <span>
                    <i class="fa-solid fa-house"></i>
                    <label class="label-icon-busqueda">Casas</label>
                </span>
            </a>
            <a href="#">
                <span>
                    <i class="fa-solid fa-hotel"></i>
                    <label class="label-icon-busqueda">Hoteles</label>
                </span>
            </a>
            <a href="#">
                <span>
                    <i class="fa-solid fa-campground"></i>
                    <label class="label-icon-busqueda">Cabañas</label>
                </span>
            </a>
        </div>
    </div>

    <div class="content-inicio">
        <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="@/assets/lugar.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 1</h5>
               <a href="#" class="btn btn-primary btn-block">Ver Lugar</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
    --orangelight: #ffa364;
    --pomegranate: #eb3e1b;
    --orangelighting: #fb6d10;
    --darkorange: #fc7643;
    --orange: #af4f41;
    --navblue: #273248;
    --blue: #2e2e41;
    --cream: #ffebd2;
}

.busqueda input{
    margin-top: 35px;
    border-radius: 25px;
    border-color: var(--blue);
    border-width: 2.5px;
    width: 500px;
    height: 50px;
    font-family: 'Comfortaa';
}

.busqueda label{
    margin-top: 20px;
    font-family: 'Comfortaa';
    font-size: 30px;
}

.icons-busqueda {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.icons-busqueda a{
    text-decoration: none;
    color: black;
}

.icons-busqueda span i{
    font-size: 50px;
    padding-left: 60px;
    padding-right: 30px;
}

.icons-busqueda .label-icon-busqueda{
    font-family: 'Comfortaa';
    font-size: 18px;
}


.content-inicio{
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 30px;
    width: 100vw;
    justify-content: center;
}

.content-inicio .card{
    width: 230px;
    height: 330px;
    border-radius: 8px;
    box-shadow: 0 2px 2px var(--blue);
    overflow: hidden;
    margin: 10px;
    text-align: center;
    transition: all 0.25s;
    background: var(--orangelighting);
}

.content-inicio .card img{
    width: 500px;
    height: 200px;
}

.content-inicio .card .card-title{
    font-family: 'Comfortaa';
}

.content-inicio .card .card-body{
    font-family: 'Comfortaa';
}
</style>
