function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 15
  });

  var marker1;

  function updateLocation() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var locationdelivery = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        if (!marker1) {
          marker1 = new google.maps.Marker({
            position: locationdelivery,
            map: map,
            title: 'Tu ubicación'
          });
        } else {
          marker1.setPosition(locationdelivery);
        }

        map.setCenter(locationdelivery);

        console.log('Latitud: ' + locationdelivery.lat);
        console.log('Longitud: ' + locationdelivery.lng);
      },
      function (error) {
        console.error('Error al obtener la ubicación: ' + error.message);
      },
      { enableHighAccuracy: true } // Habilitar alta precisión
    );
  }

  // Actualizar la ubicación inicial
 updateLocation();

  // Actualizar la ubicación periódicamente cada 10 segundos (puedes ajustar el tiempo según tus necesidades)
  // setInterval(updateLocation, 10000);



  var bounds = new google.maps.LatLngBounds();
  bounds.extend(marker1);
  map.fitBounds(bounds);
}
