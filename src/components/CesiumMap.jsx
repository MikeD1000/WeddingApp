// import React, { useRef, useEffect } from 'react';
// import * as Cesium from 'cesium';

// const CesiumMap = () => {
//   const cesiumContainer = useRef(null);
//   let viewer = null;

//   useEffect(() => {
//     // Initialize Cesium viewer
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     const viewer = new Cesium.Viewer('cesiumContainer', {
//       terrainProvider : Cesium.createWorldTerrain(),
//     });

//     // Define your KML string
//     const kmlString = `
//       <?xml version="1.0" encoding="UTF-8"?>
//       <kml xmlns="http://www.opengis.net/kml/2.2">
//         <Document>
//           <Placemark>
//             <name>Flight Route</name>
//             <LineString>
//               <tessellate>true</tessellate>
//               <coordinates>
//                 -122.4194,37.7749 -74.0059,40.7128  </coordinates>
//             </LineString>
//           </Placemark>
//         </Document>
//       </kml>`;

//     // Load KML from string
//     const parser = new DOMParser();
//     const kmlDoc = parser.parseFromString(kmlString, "text/xml");
//     const dataSource = Cesium.KmlDataSource.load(kmlDoc);
//     viewer.dataSources.add(dataSource).then((dataSource) => {
//       viewer.zoomTo(dataSource);
//     });

//     return () => {
//       // Clean up Cesium resources
//       if (viewer) {
//         viewer.destroy();
//       }
//     };
//   }, []);

//   return <div ref={cesiumContainer} style={{ width: '100%', height: '100vh' }} />;
// };

// export default CesiumMap;