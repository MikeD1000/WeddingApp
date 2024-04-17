// import { api } from "../utilities";
import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import geoJson from './data.json';
import '@turf/helpers'; // Importing turf helpers for creating point features
import greatCircle from '@turf/great-circle'; // Importing greatCircle function from turf
import './Map.css';
import { api } from "../utilities";




  
const WorldMap = ({ token, formSubmitted }) => {
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);
    const [geoJsonData, setGeoJsonData] = useState(null);

    // // Define markerClicked function
    // const markerClicked = (description) => {
    //     console.log('Marker clicked:', description);
    // };

    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_APP_MAP_BOX_ACCESS_TOKEN;
        const initializedMap = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/standard",
            center: [-87.65, 41.84],
            zoom: 2,
            attributionControl: false,
        });

        // Save the map instance to state
        setMap(initializedMap);

        // Cleanup function to remove the map instance
        return () => {
            initializedMap.remove();
        };
    }, []);

    useEffect(() => {
        const fetchGeoJSONData = async () => {
            try {
                const usertoken = localStorage.getItem('token');
                const response = await api.get('geojson/', {
                    headers: {
                        Authorization: `Token ${usertoken}`
                    }
                });
                setGeoJsonData(response.data);
            } catch (error) {
                setGeoJsonData(null);
                console.error('Error fetching GeoJSON data:', error);
            }
        };

        fetchGeoJSONData();
    }, [token, formSubmitted]);

    useEffect(() => {
        if (map && geoJsonData) {
            geoJsonData.features.forEach((feature) => {
                const origin = feature.geometry.coordinates;
                const destination = [21.0122, 52.2297]; // Destination coordinates
            
                // Calculate great circle route
                const route = greatCircle(origin, destination, {
                    properties: { name: feature.properties.title },
                });
            
                // Add the route to the map
                map.addLayer({
                    id: feature.properties.title,
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: route,
                    },
                    paint: {
                        'line-width': 2,
                        'line-color': '#FF0000',
                    },
                });
            });
            
            // Cleanup function to remove the added layers when component unmounts
            return () => {
                geoJsonData.features.forEach((feature) => {
                    map.removeLayer(feature.properties.title);
                });
            };
        }
    }, [map, geoJsonData]);

    return (
        <div>
            <div>
                <div
                    className="d-block rounded mx-auto img-fluid w-75"
                    ref={mapContainerRef}
                    style={{
                        width: "75vw",
                        height: "100vh",
                        border: "1px solid",
                        marginBottom: "3rem",
                    }}
                />
            </div>
        </div>
    );
};

export default WorldMap;



    
    

    
    
    
    
    
    
    
   
    
    

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
  
// return (
//     <div>
//       <div>
//         <div
//           className="d-block rounded mx-auto img-fluid w-75"
//           ref={mapContainerRef}
//           style={{
//             width: "75vw",
//             height: "100vh",
//             border: "1px solid",
//             marginBottom: "3rem",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default WorldMap;



























// import mapboxgl from 'mapbox-gl';
// import React, { useEffect, useRef } from 'react';
// import { createRoot } from 'react-dom/client';
// import flightData from './data.json';
// import './Map.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWlrZWQxMDAwIiwiYSI6ImNsdXhhZWJ4dDBsMHYyaXF0bGF5YWdiZzMifQ.Mg9M_ukco27Ah_nIxirwyw';

// const Map = () => {
//     const mapContainerRef = useRef(null);
  
//     useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [flightData.destination.coordinates[0], flightData.destination.coordinates[1]],
//       zoom: 3,
//     });

//     // Add destination marker
//     new mapboxgl.Marker().setLngLat(flightData.destination.coordinates).addTo(map);

//     // Add origin markers and flight routes
//     flightData.origin.forEach((origin) => {
//       // Add origin marker
//       new mapboxgl.Marker({ color: 'blue' }).setLngLat(origin.coordinates).addTo(map);

//       // Add flight route
//       new mapboxgl.Popup({ offset: 25 })
//         .setLngLat(origin.coordinates)
//         .setHTML(`<h3>${origin.name} to ${flightData.destination.name}</h3>`)
//         .addTo(map);

//       new mapboxgl.Popup({ offset: 25 })
//         .setLngLat(flightData.destination.coordinates)
//         .setHTML(`<h3>${origin.name} to ${flightData.destination.name}</h3>`)
//         .addTo(map);

//       new mapboxgl.Polyline({
//         color: 'red',
//         weight: 2,
//         opacity: 0.5,
//         points: [origin.coordinates, flightData.destination.coordinates],
//       }).addTo(map);
//     });

//     // Add navigation control
//     map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     return () => map.remove();
//   }, []);

//     return <div className="map-container" ref={mapContainerRef} />;
// };

// export default Map;












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
