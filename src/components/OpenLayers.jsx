// import { useEffect, useRef } from 'react';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';
// import KML from 'ol/format/KML';
// import VectorLayer from 'ol/layer/Vector';
// import VectorSource from 'ol/source/Vector';
// import Style from 'ol/style/Style';
// import Stroke from 'ol/style/Stroke';
// import Feature from 'ol/Feature'; // Import Feature class
// import LineString from 'ol/geom/LineString';
// import { fromLonLat } from 'ol/proj';
// import { api } from "../utilities";


// const OpenLayerMap = () => {
//     const coordinatesList = [
//         { // Line 1 data
//           coordinates: [[1, 2], [3, 4]], // Milwaukee - Warsaw
//           name: 'Mike Skinner'
//         },
//         { // Line 2 data
//           coordinates: [[1, 2], [116.3972, 39.9086]], // Tokyo - Beijing
//           name: 'Tokyo - Beijing'
//         },
//         // ... Add more line definitions with coordinates and names
//       ];
  
//     const features = coordinatesList.map((lineData) => {
//       return new Feature({
//         geometry: new LineString(lineData.coordinates),
//         name: lineData.name, // Add line name as a property
//       });
//     });
  
//     const vectorSource = new VectorSource({
//       features: features,
//     });
  
//     const vectorLayer = new VectorLayer({
//       source: vectorSource,
//       style: new Style({
//         stroke: new Stroke({
//           color: 'rgba(255, 0, 0, 1)', // Red color
//           width: 5, // Line width
//           opacity: 1,
//         }),
//       }),
//     });
  
//     const mapRef = useRef(null);
  
//     useEffect(() => {
//       const map = new Map({
//         target: mapRef.current,
//         layers: [
//           new TileLayer({
//             source: new XYZ({
//               url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//             }),
//           }),
//           vectorLayer, // Add the vector layer here
//         ],
//         view: new View({
//           center: [0, 0],
//           zoom: 2,
//         }),
//       });
  
//       // Clean up
//       return () => {
//         if (map) {
//           map.dispose();
//         }
//       };
//     }, []);
  
//     return <div ref={mapRef} className="map-container" style={{ width: '100%', height: '400px' }} />;
//   };
  
//   export default OpenLayerMap;


// const OpenLayerMap = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new XYZ({
//             url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//           }),
//         }),
//       ],
//       view: new View({
//         center: ([0, 0]),
//         zoom: 2,
//       }),
//     });

//     // Hardcoded KML data (replace with your actual data)
//     const kmlData = '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><Placemark><name>Test Placemark</name><Point><coordinates>-21.0122,52.2297,0</coordinates></Point></Placemark></Document></kml>'


    
    
    
    
    // <?xml version="1.0" encoding="UTF-8"?>
    // <kml xmlns="http://www.opengis.net/kml/2.2">
    //   <Document>
    //     <Placemark>
    //       <name>Test Placemark</name>
    //       <Point>
    //         <coordinates>-21.0122,52.2297,0</coordinates>
    //       </Point>
    //     </Placemark>
    //   </Document>
    // </kml>`;



    // `<?xml version="1.0" encoding="UTF-8"?>
    //   <kml xmlns="http://www.opengis.net/kml/2.2">
    //     <Document>
    //       <Placemark>
    //         <name>Mike Skinner</name>
    //         <Style>
    //           <LineStyle>
    //             <color>ff0000ff</color>
    //           </LineStyle>
    //         </Style>
    //         <LineString>
    //           <coordinates>
    //             -87.9064736,43.0389025,0
    //             21.0122,52.2297,0
    //           </coordinates>
    //         </LineString>
    //       </Placemark>
    //     </Document>
    //   </kml>`;
    // Convert KML data string to features
    // const features = new KML().readFeatures(kmlData);

    // Create style for the vector layer
    // const lineStyle = new Style({
    //   stroke: new Stroke({
    //     color: 'rgba(255, 0, 0, 1)', // Red color
    //     width: 2, // Line width
    //   }),
    // });

    // Create vector layer with KML features
    // const vectorLayer = new VectorLayer({
    //   source: new VectorSource({
    //     features: features,
    //   }),
    //   style: lineStyle, // Apply the style
    // });

    // Add vector layer to map
//     map.addLayer(vectorLayer);

//     // Clean up
//     return () => {
//       if (map) {
//         map.dispose();
//       }
//     };
//   }, []);

//   return <div ref={mapRef} className="map-container" style={{ width: '100%', height: '400px' }} />;
// };

// export default OpenLayerMap;