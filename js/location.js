function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var apiUrl = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + latitude + '&lon=' + longitude;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          var location = data.address.city || data.address.town || data.address.village || data.address.county;
          document.getElementById('location').innerHTML = location;
        })
        .catch(error => console.error(error));
    });
}getLocation();