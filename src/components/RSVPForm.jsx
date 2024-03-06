import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const RSVPForm = () => {
  const [formData, setFormData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [yesNoValue, setYesNoValue] = useState('');

  useEffect(()=>{
    console.log(formData)
  },[formData])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleYesNoChange = (e) => {
    setYesNoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object with the form data
    const newFormData = {
      Name: inputValue,
      Attending: yesNoValue,
    };
    
    // Append the new form data to the state array
    setFormData((prevData) => [...prevData, newFormData]);
    console.log(FormData)
    // Optional: Clear the form fields after submission
    setInputValue('');
    setYesNoValue('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="inputField">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fname  Lname"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>
      
      <Form.Group controlId="yesNoField">
          <Form.Label>Attending:</Form.Label>
          <Form.Control as="select" value={yesNoValue} onChange={handleYesNoChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>
      
      

        

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
      {/* Display the submitted data */}
      <div>
        <h3>Submitted Data:</h3>
        <ul>
          {formData.length > 0 && (
          <li>
            Type In: {formData[formData.length - 1].typeIn}, Yes/No: {formData[formData.length - 1].yesNo}
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RSVPForm;