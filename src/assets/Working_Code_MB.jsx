// import { api } from "../utilities";
// import mapboxgl from 'mapbox-gl';
// import React, { useState, useEffect, useRef } from 'react';
// import { createRoot } from 'react-dom/client';
// import geoJson from './data.json';
// import '@turf/helpers'; // Importing turf helpers for creating point features
// import greatCircle from '@turf/great-circle'; // Importing greatCircle function from turf
// import './Map.css';
// import { api } from "../utilities";
// mapboxgl.accessToken = '';

// const Marker = ({ onClick, children, feature }) => {
//     const { title, description } = feature.properties;
    
//     const _onClick = () => {
//         onClick(description);
//   };

//   return (
//     <button onClick={_onClick} className="marker">
//       {children}
//     </button>
//   );
// };

  
//   const Map = ({ token }) => {
//     const mapContainerRef = useRef(null);
    
//     // Begin new ChatGPT implementation
//     const [geoJsonData, setGeoJsonData] = useState(null);
    
//     useEffect(() => {
//         const fetchGeoJSONData = async () => {
//           try {
//             const usertoken = localStorage.getItem('token');
//             console.log(usertoken)
//             const response = await api.get('geojson/', {
//               headers: {
//                 Authorization: `Token ${usertoken}`}
//             });
//             setGeoJsonData(response.data);
//           } catch (error) {
//             setGeoJsonData(null)
//             console.error('Error fetching GeoJSON data:', error);
//           }
//         };
    
//         fetchGeoJSONData();
//       }, [token]);
    
//     useEffect(() => {
//         if (!mapContainerRef.current || !geoJsonData) return;
  
//       try {
//         const map = new mapboxgl.Map({
//           container: mapContainerRef.current,
//           style: 'mapbox://styles/mapbox/streets-v11',
//           center: [-87.65, 41.84],
//           zoom: 2,
//         });
  
//         // Render custom marker components
//         geoJsonData.features.forEach((feature) => {
//           const { title, description } = feature.properties;
//           const coordinates = feature.geometry.coordinates;
  
//           const ref = React.createRef();
//           ref.current = document.createElement('div');
//           createRoot(ref.current).render(
//             <Marker onClick={markerClicked} feature={feature} />
//           );
  
//           new mapboxgl.Marker(ref.current)
//             .setLngLat(coordinates)
//             .addTo(map);
//         });
  
//         // Add flight routes
//         geoJsonData.features.forEach((feature) => {
//           const origin = feature.geometry.coordinates;
//           const destination = [21.0122,52.2297]; // Destination coordinates
  
//           // Calculate great circle route
//           const route = greatCircle(origin, destination, {
//             properties: { name: feature.properties.title },
//           });
//           console.log(route);
  
//           // Add the route to the map
//           map.on('load', () => {
//             map.addLayer({
//               id: feature.properties.title,
//               type: 'line',
//               source: {
//                 type: 'geojson',
//                 data: route,
//               },
//               paint: {
//                 'line-width': 2,
//                 'line-color': '#FF0000',
//               },
//             });
//           });
//         });
  
//         return () => map.remove();
//       } catch (error) {
//         console.error('Error initializing map:', error);
//       }
//     }, [mapContainerRef.current, geoJsonData]);
  
//     const markerClicked = (title) => {
//       window.alert(title);
//     };
  
//     return <div className="map-container" ref={mapContainerRef} />;
//   };
  
//   export default Map;










