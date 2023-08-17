mapboxgl.accessToken = 'pk.eyJ1Ijoic2VtcGFkYW5tYXBib3giLCJhIjoiY2xsY2ZrOG9xMDB1MTNlbGd2Y29qMTA1diJ9.yW44Ep2TQAtxgIn6DJ6yYw'

navigator.geolocation.getCurrentPosition( successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
setupMap([5.4141, 100.3288])
}
function setupMap(center) {
  const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
})

const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})


map.addControl(directions, 'top-left')
    
} 