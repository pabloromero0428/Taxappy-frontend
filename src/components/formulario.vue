<template>
  <form>
    <div class="cabeza">
      <div>
        <h1>Bienvenido a taxappy</h1>
        <h3>Pida aquí su taxi de manera agil y segura</h3>
      </div>

      <div class="img-taxi">
        <img id="tax1" src="../assets/img/taxi2.png" alt />
      </div>
    </div>

    <div class="form-group">
      <label for="Cedula">Número de documento</label>
      <input
        type="text"
        class="form-control"
        id="Cedula"
        aria-describedby="NombreHelp"
        placeholder="Ingrese su número de documento"
        maxlength="10"
        onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"
      />
    </div>
    <div class="mapas">
      <div id="map"></div>
      <div id="street-view"></div>
    </div>
    <div id="btn-soli">
      <button type="submit" class="btn btn-solicitar">Solicitar</button>
    </div>
  </form>
</template>

<script>
import { METHODS } from "http";
export default {
  name: "formualario",
  data() {
    return {
      latitud: "",
      longitud: ""
    };
  },
  mounted() {
    var center = "";
    var lati = "";
    var longi ="";
    navigator.geolocation.getCurrentPosition(function(location) {   
        lati =   location.coords.latitude;
        longi = location.coords.longitude;
     // console.log(lati);
     // console.log(longi);
      var map;
       center = {
        lat: lati,
        lng: longi
      };

      
  
      var panorama;

      function initMap() {
              
        map = new google.maps.Map(document.getElementById("map"), {
          center: center,
          zoom: 16
        });
        var marker = new google.maps.Marker({
          position: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          },
          map: map,
          title: "Ubication"
        });

        panorama = new google.maps.StreetViewPanorama(
          document.getElementById("street-view"),
          {
            position: {
              lat: location.coords.latitude,
              lng: location.coords.longitude
            },
            pov: {
              heading: 165,
              pitch: 0
            },
            zoom: 1
          }
        );
      }
      initMap();
    });
    this.longitud = longi;   
    this.latitud = lati;
     
  },
  methods: {

    
  }
};
</script>

<style lang="scss">
form {
  .form-group {
    label {
      font-family: "Nunito Sans", sans-serif;
    }
  }
  .mapas {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    #map {
      width: 40%;
      height: 300px;
      margin: 1.5%;
    }
    #street-view {
      width: 40%;
      height: 300px;
      margin: 1.5%;
    }
  }
  #btn-soli {
    display: flex;
    justify-content: center;
    margin-top: 1.5em;
    .btn-solicitar {
      background-color: #000;
      color: #fff;
      width: 40%;
    }

    .btn-solicitar:hover {
      color: #fff;
      background-color: rgb(102, 102, 102);
    }
  }
  .cabeza {
    display: grid;
    grid-template-columns: 80% 20%;
    h1 {
      font-family: "Acme", sans-serif;
      font-weight: bold;
      font-size: 55px;
    }
    h3 {
      font-family: "Nunito Sans", sans-serif;
      font-style: oblique;
    }

    .img-taxi {
      width: 70%;
      #tax1 {
        width: 100%;
      }
    }
  }
}
</style>