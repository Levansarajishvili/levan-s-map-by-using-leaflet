

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

// const map = L.map('map').setView([41.7151, 44.8271], 7);

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

// // Overlay შრეები - გამჭვირვალე, checkbox-ებით
// const googleTraffic = L.tileLayer('https://mt{s}.google.com/vt/lyrs=h&x={x}&y={y}&z={z}&hl=en', {
//     attribution: 'Map data &copy;2026 Google',
//     maxZoom: 22,
//     subdomains: ['0', '1', '2', '3'],
//     opacity: 0.7
// });

// const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
//     maxZoom: 17,
//     opacity: 0.7
// });

// // საბაზო ფენა
// openStreetMapMapnik.addTo(map);

// const baseMaps = {
//     "🗺️ OpenStreetMap": openStreetMapMapnik,
//     "🗺️ Google Maps": googleStandardMap,
//     "🛰️ Esri Satellite": esriWorldImagery
// };

// const overlayMaps = {
//     "🛣️ Google ქუჩები (overlay)": googleTraffic,
//     "⛰️ ტოპოგრაფია": openTopoMap
// };

// L.control.layers(baseMaps, overlayMaps).addTo(map);

// //მარკერი
// const marker_tbilisi = L.marker([41.6938, 44.8015]).addTo(map)
//     .bindPopup('თბილისი 🇬🇪');

// const marker_mtskheta = L.marker([41.8452, 44.7196]).addTo(map)
//     .bindPopup('მცხეთა');

// const marker_batumi = L.marker([41.6168, 41.6367]).addTo(map)
//     .bindPopup('ბათუმი');

// const marker_kutaisi = L.marker([42.2679, 42.7181]).addTo(map)
//     .bindPopup('ქუთაისი');

// const marker_zugdidi = L.marker([42.5088, 41.8707]).addTo(map)
//     .bindPopup('ზუგდიდი');

// const marker_kutaisi_airport = L.marker([42.1767, 42.4826]).addTo(map)
//     .bindPopup('ქუთაისის აეროპორტი ✈️');

// const marker_sagarejo = L.marker([41.7283, 45.3314]).addTo(map)
//     .bindPopup('საგარეჯო');

// const marker_gurjaani = L.marker([41.7419, 45.7938]).addTo(map)
//     .bindPopup('გურჯაანი');

// const marker_telavi = L.marker([41.9197, 45.4775]).addTo(map)
//     .bindPopup('თელავი');

// const marker_gori = L.marker([41.9857, 44.1109]).addTo(map)
//     .bindPopup('გორი');

// const marker_mestia = L.marker([43.0531, 42.7210]).addTo(map)
//     .bindPopup('მესტია');

// const marker_ambrolauri = L.marker([42.5272, 43.1492]).addTo(map)
//     .bindPopup('ამბროლაური');

// const marker_oni = L.marker([42.5853, 43.4328]).addTo(map)
//     .bindPopup('ონი');

// const marker_bakuriani = L.marker([41.7500, 43.5286]).addTo(map)
//     .bindPopup('ბაკურიანი ⛷️');

// const marker_gudauri = L.marker([42.4737, 44.4799]).addTo(map)
//     .bindPopup('გუდაური ⛷️');

// const marker_kazbegi = L.marker([42.6559, 44.6415]).addTo(map)
//     .bindPopup('ყაზბეგი 🏔️');


// //პოლიგონი

// const polygon = L.polygon([
//     [41.8452, 44.7196],  // მცხეთა
//     [41.6938, 44.8015],  // თბილისი
//     [41.7283, 45.3314]   // საგარეჯო
// ], {
//     color: 'greenyellow',        // საზღვრის ფერი
//     fillColor: 'mintgreen', // შიდა ფერი
//     fillOpacity: 0.4     // გამჭვირვალობა
// }).addTo(map);


// // მანძილის მთვლელი
// // კოორდინატები
// const mtskheta = L.latLng(41.8452, 44.7196);
// const tbilisi = L.latLng(41.6938, 44.8015);
// const sagarejo = L.latLng(41.7283, 45.3314);

// // მანძილები მეტრებში → კილომეტრებში გადაყვანა
// const dist_mtskheta_tbilisi = (map.distance(mtskheta, tbilisi) / 1000).toFixed(1);
// const dist_tbilisi_sagarejo = (map.distance(tbilisi, sagarejo) / 1000).toFixed(1);
// const dist_mtskheta_sagarejo = (map.distance(mtskheta, sagarejo) / 1000).toFixed(1);

// // პოლიგონს popup დაამატე
// polygon.bindPopup(`
//     მცხეთა → თბილისი: ${dist_mtskheta_tbilisi} კმ <br>
//     თბილისი → საგარეჯო: ${dist_tbilisi_sagarejo} კმ <br>
//     მცხეთა → საგარეჯო: ${dist_mtskheta_sagarejo} კმ
// `);


//svg overlay

const map = L.map('map').setView([41.7151, 44.8271], 7);

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
googleStandardMap.addTo(map);

// SVG overlay - საქართველოს სრული რუკა
const svgBounds = [
    [41.05, 40.0],   // სამხრეთ-დასავლეთი კუთხე (ბათუმი მხარე)
    [43.6, 46.7]     // ჩრდილო-აღმოსავლეთი კუთხე (დაღესტნის საზღვარი)
];

const svgOverlay = L.imageOverlay('map.svg', svgBounds, {
    opacity: 0.2,
    interactive: false,
}).addTo(map);

const baseMaps = {
    "🗺️ OpenStreetMap": openStreetMapMapnik,
    "🗺️ Google Maps": googleStandardMap,
    "🛰️ Esri Satellite": esriWorldImagery
};

const overlayMaps = {
    "🛣️ Google ქუჩები (overlay)": googleTraffic,
    "⛰️ ტოპოგრაფია": openTopoMap,
    "🇬🇪 საქართველოს რუკა": svgOverlay
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// რეგიონების მარკერები (ადმინისტრაციული ცენტრები)

const region_tbilisi = L.marker([41.7151, 44.8271]).addTo(map)
    .bindPopup('<b>თბილისი</b> (დედაქალაქი)');

const region_adjara = L.marker([41.6168, 41.6367]).addTo(map)
    .bindPopup('<b>აჭარის ა.რ.</b> (ბათუმი)');

const region_imereti = L.marker([42.2679, 42.7181]).addTo(map)
    .bindPopup('<b>იმერეთი</b> (ქუთაისი)');

const region_kakheti = L.marker([41.9197, 45.4775]).addTo(map)
    .bindPopup('<b>კახეთი</b> (თელავი)');

const region_samegrelo = L.marker([42.5088, 41.8707]).addTo(map)
    .bindPopup('<b>სამეგრელო-ზემო სვანეთი</b> (ზუგდიდი)');

const region_kvemo_kartli = L.marker([41.5438, 44.9972]).addTo(map)
    .bindPopup('<b>ქვემო ქართლი</b> (რუსთავი)');

const region_shida_kartli = L.marker([41.9857, 44.1109]).addTo(map)
    .bindPopup('<b>შიდა ქართლი</b> (გორი)');

const region_samtskhe_javakheti = L.marker([41.6392, 42.9826]).addTo(map)
    .bindPopup('<b>სამცხე-ჯავახეთი</b> (ახალციხე)');

const region_mtskheta_mtianeti = L.marker([41.8452, 44.7196]).addTo(map)
    .bindPopup('<b>მცხეთა-მთიანეთი</b> (მცხეთა)');

const region_guria = L.marker([41.9269, 42.0004]).addTo(map)
    .bindPopup('<b>გურია</b> (ოზურგეთი)');

const region_racha_lechkhumi = L.marker([42.5272, 43.1492]).addTo(map)
    .bindPopup('<b>რაჭა-ლეჩხუმი და ქვემო სვანეთი</b> (ამბროლაური)');

const region_apkhazeti = L.marker([43.0015, 41.0234]).addTo(map)
    .bindPopup('<b>აფხაზეთის ა.რ.</b> (სოხუმი)');

//პოლიგონი

const polygon = L.polygon([
    [41.8452, 44.7196],  // მცხეთა
    [41.6938, 44.8015],  // თბილისი
    [41.7283, 45.3314]   // საგარეჯო
], {
    color: 'greenyellow',        // საზღვრის ფერი
    fillColor: 'mintgreen', // შიდა ფერი
    fillOpacity: 0.4     // გამჭვირვალობა
}).addTo(map);


// მანძილის მთვლელი
// კოორდინატები
const mtskheta = L.latLng(41.8452, 44.7196);
const tbilisi = L.latLng(41.6938, 44.8015);
const sagarejo = L.latLng(41.7283, 45.3314);

// მანძილები მეტრებში → კილომეტრებში გადაყვანა
const dist_mtskheta_tbilisi = (map.distance(mtskheta, tbilisi) / 1000).toFixed(1);
const dist_tbilisi_sagarejo = (map.distance(tbilisi, sagarejo) / 1000).toFixed(1);
const dist_mtskheta_sagarejo = (map.distance(mtskheta, sagarejo) / 1000).toFixed(1);

// პოლიგონს popup დაამატე
polygon.bindPopup(`
    მცხეთა → თბილისი: ${dist_mtskheta_tbilisi} კმ <br>
    თბილისი → საგარეჯო: ${dist_tbilisi_sagarejo} კმ <br>
    მცხეთა → საგარეჯო: ${dist_mtskheta_sagarejo} კმ
`);
