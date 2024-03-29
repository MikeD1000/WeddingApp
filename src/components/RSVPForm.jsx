import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RSVPForm = () => {
  const [formData, setFormData] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [yesNoValue, setYesNoValue] = useState('');
  const [rmImageSel, setrmImageSel] = useState('');
  const [rmImageLnk, setrmImageLnk] = useState('');

  useEffect(()=>{
    console.log(formData)
  },[formData])

  useEffect(() => {
        
  const getrmImageLnk = async () => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${rmImageSel}`)
    console.log(response.data.image);
    setrmImageLnk(response.data.image);
    }
    getrmImageLnk();
  }, [rmImageSel]);

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleYesNoChange = (e) => {
    setYesNoValue(e.target.value);
  };

  const handlermImageSel = (e) => {
    setrmImageSel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object with the form data
    const newFormData = {
      Name: nameValue,
      Attending: yesNoValue,
      Pic: rmImageLnk,
    };
    
    // Append the new form data to the state array
    setFormData((prevData) => [...prevData, newFormData]);
    console.log(FormData)
    // Optional: Clear the form fields after submission
    setNameValue('');
    setYesNoValue('');
    setrmImageSel('');

  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="inputField">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name    Last Name"
            value={nameValue}
            onChange={handleNameChange}
          />
        </Form.Group>
      
        <Form.Group controlId="yesNoField">
          <Form.Label>Attending:</Form.Label>
          <Form.Control 
          as="select" value={yesNoValue} 
          onChange={handleYesNoChange}>
          <option value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>
      
        <Form.Group controlId="inputField">
          <Form.Label>If attending, upload pic:</Form.Label>
          <Form.Control
            type="text"
            placeholder="input # 1-20"
            value={rmImageSel}
            onChange={handlermImageSel}
          />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br></br>
      {/* Display the submitted data */}
      <div>
        <h3>Submitted Data:</h3>
        <ul>
          {formData.length > 0 && (
          <li>
            Name: {formData[formData.length - 1].Name}
            <br></br>
            Attending: {formData[formData.length - 1].Attending}
            {/* Picture: {formData[formData.length - 1].rmImage} */}
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RSVPForm;