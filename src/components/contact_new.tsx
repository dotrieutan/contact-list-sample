import React from "react";
import { Button, Form } from "react-bootstrap";
import Contact from "./contact_schema";

export type AddNewContactFunction = {
  (contact: Contact): void
}

export interface ContactAddNewProps {
  addContact: AddNewContactFunction
}

export default class ContactAddNew extends React.Component<ContactAddNewProps> {
  handleSubmit(event: any) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const phone = target.phone.value;
    const email = target.email.value;
    
    this.props.addContact({
      name,
      phone,
      email
    });
  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control placeholder="Enter your name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Enter Phone number" name="phone" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    )
  }
}
