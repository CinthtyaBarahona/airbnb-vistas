
<template>
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card">
            <div class="card-header">Registra tus lugares con nosotros</div>
            <div class="card-body">
              <form method="POST" action="">
                <div class="row mb-3">
                  <label for="nombre" class="col-md-4 col-form-label text-md-end">Nombre</label>
                  <div class="col-md-6">
                    <input type="text" id="nombre" class="form-control" name="nombre">
                  </div>
                </div>

                  <div class="row mb-3">
                  <label for="descripcion" class="col-md-4 col-form-label text-md-end">Descripcion</label>
                  <div class="col-md-6">
                    <input type="text" id="descripcion" class="form-control" name="descripcion">
                  </div>
                </div>


                <div class="row mb-3">
                  <label for="nombre" class="col-md-4 col-form-label text-md-end">Foto</label>
                  <div class="col-md-6">
                    <input type="img" id="foto" class="form-control" name="foto">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="latitud" class="col-md-4 col-form-label text-md-end">Latitud</label>
                  <div class="col-md-6">
                    <input  id="latitud" class="form-control" name="latitud">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="longitud" class="col-md-4 col-form-label text-md-end">Longitud</label>
                  <div class="col-md-6">
                    <input  id="longitud" class="form-control" name="logitud">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="estado" class="col-md-4 col-form-label text-md-end">Estado</label>
                  <div class="col-md-6">
                    <input type="text" id="estado" class="form-control" name="estado">
                  </div>
                </div>  
                  <div class="row mb-3">
                  <label for="#huespedes" class="col-md-4 col-form-label text-md-end">Numero de Huespedes</label>
                  <div class="col-md-6">
                    <input type="number" id="#huesped" class="form-control" name="#huesped">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="mascotas" class="col-md-4 col-form-label text-md-end">Permiten Mascotas</label>
                  <div class="col-md-6">
                    <input type="text" id="mascotas" class="form-control" name="mascotas">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="precio" class="col-md-4 col-form-label text-md-end">Ingrese el Precio en Dolares</label>
                  <div class="col-md-6">
                    <input type="number" id="precio" class="form-control" name="precio">
                  </div>
                </div>
                <div class="row mb-3">
					<div class="col-md-6">
						<input type="checkbox" name="txtTerminos" id="terminos">
						He leído y aceptado los <a href="https://www.lipsum.com">Terminos y condiciones</a>
					</div>
				</div>
                <div class="row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn">Registrar Lugar</button>
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
  name: 'LugarView',
  props: {
    msg: String
  }
}
</script>f

<style scoped>

.btn {
  background-color: orange;
}


.container{
	
	top: 10%;
	
}
#terminos{

    position: center;
}

</style>