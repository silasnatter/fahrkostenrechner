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

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
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



var intervalID = window.setInterval(miles2km(), 1000)

function miles2km() {
    var miles = document.querySelector("h1")
    if (miles !== null) {
        // console.log(typeof miles)
        let miles_string = miles.innerHTML
        let miles_float = parseFloat(miles_string.substring(0, miles_string.length -2))
        // console.log(typeof miles_float)

        // miles in km
        let km = miles_float * 1.609
        console.log(km)
        
    }
    console.log("empty")
}


// calculate km kosten

