import React from "react";
import { Form } from "react-bootstrap";

const CustomInputForm = ({ ...item }) => {
  const { label, type, placeholder, required, name } = item;
  return (
    <Form.Group md="4">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default CustomInputForm;
