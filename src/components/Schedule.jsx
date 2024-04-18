import { api } from "../utilities";
import { useState, useEffect } from 'react';

const ScheduleComponent = ( {token} ) => {
    const [box1, setBox1] = useState(null);
    const [box2, setBox2] = useState(null);
    const [box3, setBox3] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
                const usertoken = localStorage.getItem('token');
                const response1 = await api.get('events/event_attendees/1/', {
                    headers: {
                        Authorization: `Token ${usertoken}`
                    }
                });
                setBox1(response1.data);

                const response2 = await api.get('events/event_attendees/2/', {
                    headers: {
                        Authorization: `Token ${usertoken}`
                    }
                });
                setBox2(response2.data);

                const response3 = await api.get('events/event_attendees/3/', {
                    headers: {
                        Authorization: `Token ${usertoken}`
                    }
                });
                setBox3(response3.data);
                
            };
            fetchData();
        }, []);

        return (
            <div>
                <div className="boxes-container">
                    <div className="box">               
                        {box1 && (
                            <>
                                <h2>Event 1</h2>
                                <h3>{box1.event.event_name}</h3>
                                <p>{box1.event.event_description}</p>
                                <p>Date: {box1.event.event_date}</p>
                                <p>Time: {box1.event.event_time}</p>
                                <p>Location: {box1.event.event_location}</p>
                                <p>Dress Code: {box1.event.event_dress_code}</p>
                            </>
                        )}
                    </div>
                    <div className="box">
                        {box2 && (
                            <>
                                <h2>Event 2</h2>
                                <h3>{box2.event.event_name}</h3>
                                <p>{box2.event.event_description}</p>
                                <p>Date: {box2.event.event_date}</p>
                                <p>Time: {box2.event.event_time}</p>
                                <p>Location: {box2.event.event_location}</p>
                                <p>Dress Code: {box2.event.event_dress_code}</p>
                            </>
                        )}
                    </div>
                    <div className="box">
                        {box3 && (
                            <>
                                <h2>Event 3</h2>
                                <h3>{box3.event.event_name}</h3>
                                <p>{box3.event.event_description}</p>
                                <p>Date: {box3.event.event_date}</p>
                                <p>Time: {box3.event.event_time}</p>
                                <p>Location: {box3.event.event_location}</p>
                                <p>Dress Code: {box3.event.event_dress_code}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    };
        

export default ScheduleComponent;

// import { api } from "../utilities";
// import { useState, useEffect } from "react";
// import { Accordion, Card, Button } from 'react-bootstrap';

// const renderAttendees = (attendees) => {
//     // Check if attendees is not available or empty
//     if (!attendees || attendees.length === 0) {
//       return <p>No attendees found</p>;
//     }

//   return (
//     <Accordion>
//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="0">
//             Show Attendees
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>
//             {attendees.map((attendee, index) => (
//               <p key={index}>{attendee.name}</p>
//             ))}
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>
//     </Accordion>
//   );
// };

// const ScheduleComponent = ({ token }) => {
//   const [box1, setBox1] = useState(null);
//   const [box2, setBox2] = useState(null);
//   const [box3, setBox3] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usertoken = localStorage.getItem("token");
//         const response1 = await api.get("events/event_attendees/1/", {
//           headers: {
//             Authorization: `Token ${usertoken}`,
//           },
//         });
//         setBox1(response1.data);
//             console.log(response1.data)

//         const response2 = await api.get("events/event_attendees/2/", {
//           headers: {
//             Authorization: `Token ${usertoken}`,
//           },
//         });
//         setBox2(response2.data);
//             console.log(response2.data)

//         const response3 = await api.get("events/event_attendees/3/", {
//           headers: {
//             Authorization: `Token ${usertoken}`,
//           },
//         });
//         setBox3(response3.data);
//             console.log(response3.data)
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="boxes-container">
//         <div className="box">
//           <h2>Event 1</h2>
//           {box1 && (
//             <>
//               <h3>{box1.event.event_name}</h3>
//               <p>{box1.event.event_description}</p>
//               <p>Date: {box1.event.event_date}</p>
//               <p>Time: {box1.event.event_time}</p>
//               <p>Location: {box1.event.event_location}</p>
//               <p>Dress Code: {box1.event.event_dress_code}</p>
//               {renderAttendees(box1.attendees)}
//             </>
//           )}
//         </div>
//         <div className="box">
//           <h2>Event 2</h2>
//           {box2 && (
//             <>
//               <h3>{box2.event.event_name}</h3>
//               <p>{box2.event.event_description}</p>
//               <p>Date: {box2.event.event_date}</p>
//               <p>Time: {box2.event.event_time}</p>
//               <p>Location: {box2.event.event_location}</p>
//               <p>Dress Code: {box2.event.event_dress_code}</p>
//               {renderAttendees(box2.attendees)}
//             </>
//           )}
//         </div>
//         <div className="box">
//           <h2>Event 3</h2>
//           {box3 && (
//             <>
//               <h3>{box3.event.event_name}</h3>
//               <p>{box3.event.event_description}</p>
//               <p>Date: {box3.event.event_date}</p>
//               <p>Time: {box3.event.event_time}</p>
//               <p>Location: {box3.event.event_location}</p>
//               <p>Dress Code: {box3.event.event_dress_code}</p>
//               {renderAttendees(box3.attendees)}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScheduleComponent;