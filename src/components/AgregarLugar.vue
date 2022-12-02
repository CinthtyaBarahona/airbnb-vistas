
<template>
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card">
            <div class="card-header">Registra tus lugares con nosotros</div>
            <div class="card-body">
              <form method="POST" action="">

                <div class="row mb-3">
                  <label for="nombre" class="col-md-4 col-form-label text-md-end">Nombre:</label>
                  <div class="col-md-6">
                    <input type="text" id="nombre" class="form-control" name="nombre">
                  </div>
                </div>

                  <div class="row mb-3">
                  <label for="descripcion" class="col-md-4 col-form-label text-md-end">Descripcion:</label>
                  <div class="col-md-6">
                    <input type="text" id="descripcion" class="form-control" name="descripcion">
                  </div>
                </div>


                <div class="row mb-3">
                  <label for="nombre" class="col-md-4 col-form-label text-md-end">Foto:</label>
                  <div class="col-md-6">
                    <input type="file" id="foto" class="form-control" name="foto">
                  </div>
                </div>


                <div class="row mb-3">
                  <label for="direccion" class="col-md-4 col-form-label text-md-end">Direccion:</label>
                  <div class="col-md-6">
                 <input type="text" name="direccion"  id="direccion" class="form-control" readonly>
             </div>

              <a onclick="return mostrarLugar();" 

             type="button"  class="btnD"
             href="https://www.google.cl/maps/preview" target="_blank">Consultar</a>
                </div>

                <div class="row mb-3">
                  <label for="estado" class="col-md-4 col-form-label text-md-end">Estado:</label>
                  <div class="col-md-6">
                    <input type="checkbox" id="estado" name="estado" checked>Activo
                    <input type="checkbox" id="estado"  name="estado" checked>Inactivo
                  </div>
                </div>  
                <div class="row mb-3">
                 
                 <label for="ruta" class="col-md-4 col-form-label text-md-end">Ruta:</label>
                 <div class="col-md-6">
                 <select name="ruta" id="ruta" class="form-control">
                   <option >.....</option>
                   <option >Oriental</option>
                   <option >Central</option>
                   <option >Occidental</option>
                 </select>
                 </div>
               </div>
               <div class="row mb-3">
                 
                 <label for="categoria" class="col-md-4 col-form-label text-md-end">Categoria:</label>
                 <div class="col-md-6">
                 <select name="categoria" id="categoria" class="form-control">
                   <option >.....</option>
                   <option >Cabaña</option>
                   <option >Hotel</option>
                   <option >Hostal</option>
                   <option >Rancho</option>
                   <option >Apartamento</option>
                 </select>
                 </div>
               </div>
                  <div class="row mb-3">
                  <label for="#huespedes" class="col-md-4 col-form-label text-md-end">Numero de Huespedes:</label>
                  <div class="col-md-6">
                    <input type="number" id="#huesped" class="form-control" name="#huesped">
                  </div>
                </div>
                
                <div class="row mb-3">
                 
                  <label for="mascotas" class="col-md-4 col-form-label text-md-end">Permiten Mascotas:</label>
                  <div class="col-md-6">
                  <select name="mascotas" id="mascotas" class="form-control">
                    <option >.....</option>
                    <option >SI</option>
                    <option >NO</option>
                  </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="precio" class="col-md-4 col-form-label text-md-end">Ingrese el Precio en Dolares:</label>
                  <div class="col-md-6">
                    <input type="number"  id="precio" class="form-control" name="precio"> 
                  </div>
                </div>

                <div class="row mb-0">
                  <div class="col-md-6 offset-md-3 ">
     
						<input type="checkbox"  align="right"  id="terminos" name="terminos" >
						He leído y aceptado los <a href="https://www.lipsum.com">Terminos y condiciones</a>
				
          </div>
				</div>

                <div class="row mb-0">
                  <div class="col-md-6 offset-md-3 ">
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
</script>

<style scoped>

.btn {
  background-color: orange;
}
.btnD{
  margin-left: 65px;
  border-radius: 5px;

  }
	


.container{
	
background-color: bisque;
	
}
.input{
	border-radius: 5px;
	height: 40px;
}

#terminos{
  padding-top:0%;
}
</style>