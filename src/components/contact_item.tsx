import React from "react";
import Contact from "./contact_schema";

export default class ContactItem extends React.Component<Contact> {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
      </tr>
    );
  }
}
