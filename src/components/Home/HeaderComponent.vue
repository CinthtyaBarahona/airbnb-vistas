<template>
    <header class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex align-items-center justify-content-between" >
            <router-link class="navbar-brand" to="/">
            <div class="img-top"><img src="../../assets/logo-airbnb.png" width="40" alt=""> Airbnb</div>
            </router-link>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    
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
        </div>
    </header>
</template>