import React from "react";
import { Button, Form } from "react-bootstrap";

export type FilterContactFunction = {
  (searchText: string): void
}

export interface ContactSearchProps {
  onFilterTextInput: FilterContactFunction;
  filterText: string;
}

export default class ContactSearch extends React.Component<ContactSearchProps> {  
  handleFilterTextInputChange(e: any) {
    e.preventDefault();
    this.props.onFilterTextInput(e.target.searchText.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleFilterTextInputChange.bind(this)}>
        <Form.Group className="mb-3" controlId="formFilterText">
          <Form.Label></Form.Label>
          <Form.Control placeholder="Search..." name="searchText" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}
