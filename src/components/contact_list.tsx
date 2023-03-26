import React from "react";
import { Table } from "react-bootstrap";
import ContactItem from './contact_item';
import Contact from "./contact_schema";


export interface ContactTableProps {
  contacts: Array<Contact>;
  filterText: string;
}

export class ContactTable extends React.Component<ContactTableProps> {
  render() {
    const rows: Array<any> = [];
    this.props.contacts.forEach((contact) => {
      if (contact.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      
      rows.push(<ContactItem name={contact.name} email={contact.email} phone={contact.phone} />);
    });

    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone No</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}
