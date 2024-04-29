// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
//   5.52316679692716, 95.33066007671589
  const position = { lat: 5.52316679692716, lng: 95.33066007671589 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "LUXIMA.ID",
  });
}

initMap();
