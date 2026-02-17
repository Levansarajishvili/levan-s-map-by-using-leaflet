

//მხოლოდ ერთი ფენის ჩვენება. მომხმარებელი თვითონ ირჩევს.

// var map = L.map('map').setView([41.7151, 44.8271], 7);

// const openStreetMapMapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     maxZoom: 22
// });

// const googleStandardMap = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', {
//     attribution: 'Map data &copy;2026 Google',
//     maxZoom: 22,
//     subdomains: ['0', '1', '2', '3']
// });

// const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//     attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
//     maxZoom: 22
// });

// // საბაზო ფენა - ერთი ჩართული
// openStreetMapMapnik.addTo(map);

// const baseMaps = {
//     "OpenStreetMap": openStreetMapMapnik,
//     "Google Maps": googleStandardMap,
//     "Esri Satellite": esriWorldImagery
// };

// L.control.layers(baseMaps).addTo(map);


//basemaps და overlaymaps ერთად.

var map = L.map('map').setView([41.7151, 44.8271], 7);

const openStreetMapMapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 22
});

const googleStandardMap = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', {
    attribution: 'Map data &copy;2026 Google',
    maxZoom: 22,
    subdomains: ['0', '1', '2', '3']
});

const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 22
});

// Overlay შრეები - გამჭვირვალე, checkbox-ებით
const googleTraffic = L.tileLayer('https://mt{s}.google.com/vt/lyrs=h&x={x}&y={y}&z={z}&hl=en', {
    attribution: 'Map data &copy;2026 Google',
    maxZoom: 22,
    subdomains: ['0', '1', '2', '3'],
    opacity: 0.7
});

const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
    maxZoom: 17,
    opacity: 0.7
});

// საბაზო ფენა
openStreetMapMapnik.addTo(map);

const baseMaps = {
    "🗺️ OpenStreetMap": openStreetMapMapnik,
    "🗺️ Google Maps": googleStandardMap,
    "🛰️ Esri Satellite": esriWorldImagery
};

const overlayMaps = {
    "🛣️ Google ქუჩები (overlay)": googleTraffic,
    "⛰️ ტოპოგრაფია": openTopoMap
};

L.control.layers(baseMaps, overlayMaps).addTo(map);