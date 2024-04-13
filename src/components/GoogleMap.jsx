// import { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, KmlLayer } from '@react-google-maps/api';
// import { api } from "../utilities";
// import xmlParser from "xml-js"
// // import dotenv from 'react-dotenv';
// // dotenv.config();


// const GoogleMapView = ({ googleApiKey }) => {
//     const [kmlData, setKmlData] = useState(null);
    
//     const [loading, setLoading] = useState(true);

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {

//     //             const kmlResponse = await api.get('geocode/');
//     //             setKmlData(kmlResponse.data.kml_content);
//     //         } catch (error) {
//     //             console.error('Error fetching data:', error);
//     //         } finally {
//     //             setLoading(false);
//     //         }
//     //     };
//     //     fetchData();
//     // }, []);

//     useEffect(() => {
//         const fetchKMLData = async () => {
//             try {
//                 const response = await fetch('../assets/KML_Samples.kml');
//                 const kmlText = await response.text();
//                 const kmlJson = xmlParser.xml2js(kmlText, { compact: true, spaces: 4 });
//                 setKmlData(kmlJson);
//             } catch (error) {
//                 console.error('Error fetching KML data:', error);
//             }
//         };

//         fetchKMLData();
//     }, []);

//     return (
//         <div style={{ width: '100%', height: '500px' }}>
//             {googleApiKey && kmlData ? (
//                 <LoadScript googleMapsApiKey={googleApiKey}>
//                     <GoogleMap
//                         mapContainerStyle={{ width: '100%', height: '100%' }}
//                         center={{ lat: 0, lng: 0 }}
//                         zoom={2}
//                     >
//                         <KmlLayer url={"https://www.google.com/maps/d/viewer?mid=1ANfnFTDpjNGLdpEwL34gNGEJBQaYmww&ll=37.9508672%2C-118.79534110000002&z=17"}/>
//                         {/* {loading ? null : <KmlLayer data={kmlData} />} */}
//                     </GoogleMap>
//                 </LoadScript>
//             ): null}
//         </div>
//     );
// };

// export default GoogleMapView;