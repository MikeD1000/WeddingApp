import { api } from "../utilities";
import { useState, useEffect } from 'react';

const ScheduleComponent = ( {token} ) => {
    const [box1, setBox1] = useState(null);
    const [box2, setBox2] = useState(null);
    const [box3, setBox3] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
                const usertoken = localStorage.getItem('token');
                const response1 = await api.get('events/schedule/1/', {
                    headers: {
                        Authorization: `Token ${usertoken}`
                    }
                });
                setBox1(response1.data);

                const response2 = await api.get('events/schedule/2/', {
                    headers: {
                        Authorization: `Token ${usertoken}`
                    }
                });
                setBox2(response2.data);

                const response3 = await api.get('events/schedule/3/', {
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
                                <h3>{box1.event_name}</h3>
                                <p>{box1.event_description}</p>
                                <p>Date: {box1.event_date}</p>
                                <p>Time: {box1.event_time}</p>
                                <p>Location: {box1.event_location}</p>
                                <p>Dress Code: {box1.event_dress_code}</p>
                            </>
                        )}
                    </div>
                    <div className="box">
                        {box2 && (
                            <>
                                <h2>Event 2</h2>
                                <h3>{box2.event_name}</h3>
                                <p>{box2.event_description}</p>
                                <p>Date: {box2.event_date}</p>
                                <p>Time: {box2.event_time}</p>
                                <p>Location: {box2.event_location}</p>
                                <p>Dress Code: {box2.event_dress_code}</p>
                            </>
                        )}
                    </div>
                    <div className="box">
                        {box3 && (
                            <>
                                <h2>Event 3</h2>
                                <h3>{box3.event_name}</h3>
                                <p>{box3.event_description}</p>
                                <p>Date: {box3.event_date}</p>
                                <p>Time: {box3.event_time}</p>
                                <p>Location: {box3.event_location}</p>
                                <p>Dress Code: {box3.event_dress_code}</p>

                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    };
        

export default ScheduleComponent;