//Map
var map = L.map('map', {
  zoomControl: false,
  attributionControl: false,
}).setView([53.0232, 18.6184], 13);

L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  {
    maxZoom: 20,
    // attribution:
    //   '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a>',
  }
).addTo(map);
L.circle([53.0232, 18.6184], { radius: 300, color: '#51cf66' }).addTo(map);
// L.control.remove();
L.control.zoom({ position: 'topright' }).addTo(map);
// const myIcon = L.icon({
//   iconUrl: '/img/hero.svg',
//   iconSize: [38, 95],
//   iconColor,
//   // iconAnchor: [22, 94],
//   // popupAnchor: [-3, -76],
//   // shadowUrl: 'my-icon-shadow.png',
//   // shadowSize: [68, 95],
//   // shadowAnchor: [22, 94],
// });
// var marker = L.marker([53.0232, 18.6184]).addTo(map);
