function initialize() {
  var myLatlng = new google.maps.LatLng(51.518641, -0.168163);
  var map_options = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: myLatlng,
    scrollwheel: false,
    disableDefaultUI: true
  }

  var map = new google.maps.Map(document.getElementById('map_canvas'), map_options)
  var myIcon = new google.maps.MarkerImage('map_icon.png', null, null, null, new google.maps.Size(36,54));

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: myIcon
  });
}

google.maps.event.addDomListener(window, 'load', initialize);