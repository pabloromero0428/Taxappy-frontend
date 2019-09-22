<template>
  <v-content class="home-principal secundary">
    <div class="btn-register">
      <button type="button" class="btn btn-warning">Registrarme</button>
    </div>
    <div class="contents">
      <div class="container secundary">
        <Form></Form>
      </div>
    </div>
  </v-content>
</template>

<script>
import Form from "../components/formulario.vue";

export default {

  
  name: "Home",
  
  components: {
    Form
  }
};
</script>

<style lang="scss">
.home-principal {
  background-image: url("../assets/img/img-fondo.jpg");
  background-size:cover;
  .btn-register {
    position: absolute;
    top: 2%;
    left: 88%;
  }
  .container {
    background-color: rgba(255, 255, 255, 0.726);
    width: 100%;
    margin: 5% 10% 10% 10%;
    border-radius: 20px;
    padding: 3em;
    border: #ffff;
    -webkit-box-shadow: 2px 6px 23px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 6px 23px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 6px 23px 0px rgba(0, 0, 0, 0.75);
  }
}

.cls-1 {
  fill: #feee00;
}
</style>