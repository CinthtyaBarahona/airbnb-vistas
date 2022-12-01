<template>
<div class="contenedor">
    <img alt="Fondo" class="img-fondo" src="@/assets/login.png" />
  <div class="content">
    <div>
      <form action class="form">
        <label class="form-label" for="#email">Email:</label>
        <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
        />
        <label class="form-label" for="#password">Password:</label>
        <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        />
        <input class="form-submit" type="submit" value="Iniciar Sesion" />
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginView',
  props: {
    msg: String
  }
}
</script>
<style>
  .contenedor {
    background: white;
    width: 900px;
    height: 3rem auto;
    align-content: center;
    display: flex;
    margin: 0 auto;
  }
  .content {
    display: block;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;
  }
  
  h1 {
    text-align: center center;
    color: black;
    width: 1250px;
    height: 70px;
    padding: 8px 8px 8px 8px;
    background: #ffebd2;
    border-color: #ffebd2;
    border-width: 1px;
    border-style: solid;
  }
  
  .img-fondo {
    background-position: center center;
    background-size: cover;
    height: 550px;
    width: 450px;
    flex: 0 0 calc(60%);
    position: relative;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
  
  .form {
    background-position: right right;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    height: 550px;
    min-width: auto;
    max-width: auto;
    background: rgba(250, 253, 255, 0.9);
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
  .form-label {
    width: 154px;
    height: 60px;
    color: #da5526;
    font-family: "Arial";
    font-size: large;
    text-align: left;
    border-radius: 5px;
  }
  
  .form-input {
    padding: 10px 15px;
    border: 1px solid rgb(0, 0, 0);
    color: rgb(2, 2, 2);
    border-radius: 5px;
  }
  .form-submit {
    background: #da810d;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
  }
  .error {
    margin: 1rem 0 0;
    color: #ff4a96;
  }
  .button {
    width: 415px;
    height: 107px;
    padding: 8px 8px 8px 8px;
    box-shadow: 0px 5px 10px rgba(248, 95, 106, 0.23);
    background: #f68930;
    border-radius: 6px 6px 6px 6px;
    border-radius: 5px;
  }
</style>