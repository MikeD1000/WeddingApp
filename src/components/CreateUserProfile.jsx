import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from "../utilities";


const CreateUserProfile = ({ handleForm, formSubmitted }) => {
  const [name, setName] = useState("");
  const [dietRestrict, setDietRestrict] = useState("");
  const [danceSong, setDanceSong] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [event1Attending, setEvent1Attending] = useState(false);
  const [event2Attending, setEvent2Attending] = useState(false);
  const [event3Attending, setEvent3Attending] = useState(false);


  const handleToggleEvent1 = () => {
    console.log('event1')
    setEvent1Attending(!event1Attending);
  };

  const handleToggleEvent2 = () => {
    console.log('event2')
    setEvent2Attending(!event2Attending);
  };

  const handleToggleEvent3 = () => {
    console.log('event3')
    setEvent3Attending(!event3Attending);
  };

  const selectedEvents = [];
    if (event1Attending) selectedEvents.push(1); // Assuming event IDs are 1, 2, 3
    if (event2Attending) selectedEvents.push(2);
    if (event3Attending) selectedEvents.push(3);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const newprofile = {
            name,
            diet_restrict: dietRestrict,
            dance_song: danceSong,
            street,
            city,
            state,
            postal_code: postalCode,
            country,
            event_ids: selectedEvents,
          }
          console.log('profile',newprofile)
      const response = await api.post("users/create_profile/", newprofile);
      if (response.status === 201) {
        handleForm();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            onChange={(e) => setName(e.target.value)}
            type="text" 
            placeholder="Enter first name  last name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dietRestrict">
          <Form.Label>Diet Restrictions</Form.Label>
          <Form.Control 
            onChange={(e) => setDietRestrict(e.target.value)}
            type="text" 
            placeholder="Enter diet restrictions" 
            required
          />
          <Form.Text className="text-muted">
            Example: shellfish, gluten
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="danceSong">
          <Form.Label>I just feel like dancing when I hear:</Form.Label>
          <Form.Control 
            onChange={(e) => setDanceSong(e.target.value)}
            type="text" 
            placeholder="Enter one song and artist here." 
            required
          />
          <Form.Text className="text-muted">
            Example: Don't Stop Believing - Journey
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="streetNumber">
          <Form.Label>Address: Street Number</Form.Label>
          <Form.Control 
            onChange={(e) => setStreet(e.target.value)}
            type="text" 
            placeholder="Enter your street address here" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>Address: City</Form.Label>
          <Form.Control 
            onChange={(e) => setCity(e.target.value)}
            type="text" 
            placeholder="Enter your city here" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>Address: State</Form.Label>
          <Form.Control 
            onChange={(e) => setState(e.target.value)}
            type="text" 
            placeholder="Enter your state here" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="postalCode">
          <Form.Label>Address: Postal Code</Form.Label>
          <Form.Control 
            onChange={(e) => setPostalCode(e.target.value)}
            type="text" 
            placeholder="Enter your postal code here" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>Address: Country</Form.Label>
          <Form.Control 
            onChange={(e) => setCountry(e.target.value)}
            type="text" 
            placeholder="Enter your country here" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEvent1Toggle">
        <Form.Check 
          type="switch"
          id="event1Toggle"
          label="Event 1 Attending"
          checked={event1Attending}
          onChange={handleToggleEvent1}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEvent2Toggle">
        <Form.Check 
          type="switch"
          id="event2Toggle"
          label="Event 2 Attending"
          checked={event2Attending}
          onChange={handleToggleEvent2}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEvent3Toggle">
        <Form.Check 
          type="switch"
          id="event3Toggle"
          label="Event 3 Attending"
          checked={event3Attending}
          onChange={handleToggleEvent3}
        />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {formSubmitted && (
        <div className="mt-3 alert alert-success" role="alert">
          Your profile has been successfully submitted!
        </div>
      )}
    </div>
  );
};

export default CreateUserProfile;








// "name": "Dave Smith",
//   "diet_restrict": "lettuce",
//   "dance_song": "Don't Stop Believing",
//   "street": "123 CodePlatoon Drive",
//   "city": "Cancun",
//   "state": "Chihuahua",
//   "postal_code": "12345",
//   "country": "Mexico",
//   "event1_attending": "True",
//   "event2_attending": "True",
//   "event3_attending": "True"
// }