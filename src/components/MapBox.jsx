// import { api } from "../utilities";

import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import flightData from './data.json';
import './Map.css';

mapboxgl.accessToken =
  '';

const Map = () => {
    const mapContainerRef = useRef(null);
  
    useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [flightData.destination.coordinates[0], flightData.destination.coordinates[1]],
      zoom: 3,
    });

    // Add destination marker
    new mapboxgl.Marker().setLngLat(flightData.destination.coordinates).addTo(map);

    // Add origin markers and flight routes
    flightData.origin.forEach((origin) => {
      // Add origin marker
      new mapboxgl.Marker({ color: 'blue' }).setLngLat(origin.coordinates).addTo(map);

      // Add flight route
      new mapboxgl.Popup({ offset: 25 })
        .setLngLat(origin.coordinates)
        .setHTML(`<h3>${origin.name} to ${flightData.destination.name}</h3>`)
        .addTo(map);

      new mapboxgl.Popup({ offset: 25 })
        .setLngLat(flightData.destination.coordinates)
        .setHTML(`<h3>${origin.name} to ${flightData.destination.name}</h3>`)
        .addTo(map);

      new mapboxgl.Polyline({
        color: 'red',
        weight: 2,
        opacity: 0.5,
        points: [origin.coordinates, flightData.destination.coordinates],
      }).addTo(map);
    });

    // Add navigation control
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove();
  }, []);

    return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;





















































//   const Marker = ({ onClick, children, feature }) => {
//   const _onClick = () => {
//     onClick(feature.properties.description);
//   };

//   return (
//     <button onClick={_onClick} className="marker">
//       {children}
//     </button>
//   );
// };

// const Map = () => {
//   const mapContainerRef = useRef(null);

//   // Initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-87.65, 41.84],
//       zoom: 10,
//     });

//     // Render custom marker components
//     geoJson.features.forEach((feature) => {
//         const { title, description } = feature.properties; // Destructure title and description
//         const coordinates = feature.geometry.coordinates; // Extract coordinates
//         // Create a React ref
//         const ref = React.createRef();
//       // Create a new DOM node and save it to the React ref
//         ref.current = document.createElement('div');
//       // Render a Marker Component on our new DOM node
//         createRoot(ref.current).render(
//         <Marker onClick={markerClicked} feature={feature} />
//       );

//       // Create a Mapbox Marker at our new DOM node
//         new mapboxgl.Marker(ref.current)
//             .setLngLat(feature.geometry.coordinates)
//             .addTo(map);
//     });

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     // Clean up on unmount
//     return () => map.remove();
//   }, []);

//   const markerClicked = (title) => {
//     window.alert(title);
//   };

//   return <div className="map-container" ref={mapContainerRef} />;
// };

// export default Map;
