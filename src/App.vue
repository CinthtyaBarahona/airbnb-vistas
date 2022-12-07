<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Airbnb</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registro" class="nav-link">Registrarse</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/lugar" class="nav-link">Registrar Lugar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/lugares" class="nav-link">Lugares</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-view/>

<footer class="bg-link">
        <div class="container p-4">
            <!--Social Media-->
            <section class="mb-4">
                <!-- Facebook -->
                <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
                <!-- Twitter -->
                <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee" href="#!" role="button"><i class="fab fa-twitter"></i></a>
                <!-- Instagram -->
                <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac" href="#!" role="button"><i class="fab fa-instagram"></i></a>
            </section>

            <!--Links-->
            <section>
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4 mb-md0">
                        <ul class="list-unstyled mb-0">
                            <li>
                            <router-link to="/about" class="text-light">Sobre Nosotros</router-link>
                            </li>
                            <li>
                            <router-link to="/about" class="text-light">Contactanos</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr>

            <div class="text-center p-3" id="copyright">
                © 2022 Todos los derechos reservados
            </div>
        </div>    
    </footer>
</template>

<style>
* {
    --orangelight: #ffa364;
    --pomegranate: #eb3e1b;
    --orangelighting: #fb6d10;
    --darkorange: #fc7643;
    --orange: #af4f41;
    --navblue: #273248;
    --blue: #2e2e41;
    --cream: #ffebd2;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
  min-height: 100vh;
  min-width: 100vh;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  background-color: var(--orangelight);
}


footer{
    background-color: var(--navblue);
}

footer #copyright{
    color: white;
}

hr{
    color: white;
}

</style>
