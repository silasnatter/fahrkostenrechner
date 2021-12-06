/*
    https://github.com/codemyhobby100/Google-maps-clone
    https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-directions/

    email: rkegg.fahrkosten@gmail.com
    pw: RKEgg9200
    geb: 20.04.1969
    
    MAPBOX-Token: pk.eyJ1IjoicmtlZ2ciLCJhIjoiY2t3dHF5bGZrMWZsYjJ1cnRxM25nY2RxaCJ9.ROyX4lKa3isEziHe9nrEiw
    Github-Token: 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
*/
 
mapboxgl.accessToken = "pk.eyJ1IjoicmtlZ2ciLCJhIjoiY2t3dHF5bGZrMWZsYjJ1cnRxM25nY2RxaCJ9.ROyX4lKa3isEziHe9nrEiw"
 
navigator.geolocation.getCurrentPosition( successLocation, errorLocation, {
    enableHighAccuracy: true
})
 
function successLocation(position){
    setUpMap([position.coords.longitude, position.coords.latitude])
}
 
function errorLocation(){
    setUpMap([9.89762,47.43308])
}
 
function setUpMap(center){
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
    });
 
    map.addControl(new mapboxgl.NavigationControl());
 
    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
}
 
var myInterval = window.setInterval(main, 1000)
 
function main() {
    var miles = document.querySelector("h1")
    if (miles !== null) {
        miles_string = miles.innerHTML
        miles_float = parseFloat(miles_string.substring(0, miles_string.length -2))
 
        // miles in km
        km = miles_float * 1.609
 
        // clear interval
        if (km !== null) {
            alert("Kilometer: " + Math.round(km) + "km" + " Preis: " + calc(km) + "€")
            calc_done()
            clearInterval(myInterval)
        }
    }
    return null
}
 
function calc(km) {
    let km_rounded = Math.round(km)
 
    if (km_rounded <= 20) {
        return 64.00
    } else if (km_rounded == 20) {
        return 66.00
    } else if (km_rounded > 20) {
        let diff = km_rounded - 20
        let price = 0
       
        for (let i = 0; i !== diff; i++) {
          price += 3.30
        }
       
        price_rounded = Math.round(price)
 
        return price_rounded + 64.00
    }
    return null
}
 
function calc_done() {
    var map = document.getElementById("map")
    map.style.display = "none"
}