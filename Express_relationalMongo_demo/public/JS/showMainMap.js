mapboxgl.accessToken = `${mapToken}`;

let coords = { lat: '', lon: '' };

window.onload = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
};
function showPosition(position) {
    coords.lat = position.coords.latitude;
    coords.lon = position.coords.longitude;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: [coords.lon, coords.lat] || [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });
}
