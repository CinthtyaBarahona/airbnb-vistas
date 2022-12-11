<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
              <div class="card-header">Registrate</div>
              <div class="card-body">
                <form method="POST" action="">
                  <div class="row mb-3">
                    <label for="nombre" class="col-md-4 col-form-label text-md-end">Nombre de Lugar</label>
                    <div class="col-md-6">
                      <input type="text" id="nombre" class="form-control" name="nombre">
                    </div>
                  </div>
  
                  <div class="row mb-3">
                    <label for="email" class="col-md-4 col-form-label text-md-end">E-mail</label>
                    <div class="col-md-6">
                      <input type="email" id="email" class="form-control" name="email">
                    </div>
                  </div>
  
                  <div class="row mb-3">
                    <label for="password" class="col-md-4 col-form-label text-md-end">Contraseña</label>
                    <div class="col-md-6">
                      <input type="password" id="password" class="form-control" name="password">
                    </div>
                  </div>
  
                  <div class="row mb-3">
                    <label for="confirmPassword" class="col-md-4 col-form-label text-md-end">Confirmar Contraseña</label>
                    <div class="col-md-6">
                      <input type="confirmPassword" id="confirmPassword" class="form-control" name="confirmPassword">
                    </div>
                  </div>
  
                  <div class="row mb-0">
                    <div class="col-md-6 offset-md-4">
                      <button type="submit" class="btn">Registrarme</button>
                    </div>
                  </div>
  
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegistroView',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped>
  .btn {
    background-color: orange;
  }
  
  .logo {
    width: 15%;
  }
  
  </style>
  