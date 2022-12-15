
<template>
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
              <div class="card">
                <div class="card-header">Realiza tu reserva aquí </div>
                <div class="card-body">
                  <form method="POST" action="">
    
                    <div class="row mb-3">
                      <label for="fechadellegada" class="col-md-4 col-form-label text-md-end">Fecha de Llegada:</label>
                      <div class="col-md-5">
                        <input type="date" id="fechadellegada" class="form-control" name="fechadellegada">
                      </div>
                    </div>
    
                      <div class="row mb-3">
                      <label for="fechadesalida" class="col-md-4 col-form-label text-md-end">Fecha de Salida:</label>
                      <div class="col-md-5">
                        <input type="date" id="fechadesalida" class="form-control" name="fechadesalida">
                      </div>
                    </div>
    
                    <div class="row mb-3">
                      <label for="numerodehuespedes" class="col-md-4 col-form-label text-md-end">Número de Huéspedes:</label>
                      <div class="col-md-5">
                        <input type="range" id="numerodehuespedes" class="form-control" value="10" min="1" max="10" oninput="this.nextElementSibling.value = this.value">
                            <output>10</output>
                      </div>
                    </div>
    
                    <div class="row mb-3">
                     
                     <label for="nochesagenadadas" class="col-md-4 col-form-label text-md-end">Noches Agendadas:</label>
                     <div class="col-md-5">
                    <input type="text" id="nochesagendadas" class="form-control" name="nochesagendadas" readonly>
                  </div>
                    </div>
                   <div class="row mb-3">
                     
                    <label for="Preciopornoche" class="col-md-4 col-form-label text-md-end">Precio por noche:</label>
                    <div class="col-md-5">
                    <input type="text"  value="$0.00" id="Preciopornoche" class="form-control" name="Preciopornoche" readonly>
                  </div>
                     </div>
                   
                      <div class="row mb-3">
                      <label for="total" class="col-md-4 col-form-label text-md-end">Total:</label>
                      <div class="col-md-5">
                    <input type="text" value="$0.00" id="total" class="form-control" name="total" readonly>
                  </div>
                    </div>
                     
    
                    <div class="row mb-0">
                      <div class="col-md-5 offset-md-3 ">
                        <button type="submit" class="btn">Reservar</button>
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