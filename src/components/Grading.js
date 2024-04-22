import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Grading = ({ label, initialValue = 5, onGradeChange }) => {
  const [grade, setGrade] = useState(initialValue);

  const handleChange = (e) => {
    const newGrade = e.target.value;
    setGrade(newGrade);
    onGradeChange(newGrade); // Pass the new grade back to the parent component
  };

  return (
    <Form>
      <Form.Label>{label}: {grade}</Form.Label>
      <Form.Range min="1" max="10" value={grade} onChange={handleChange} />
    </Form>
  );
};

export default Grading;
