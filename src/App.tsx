import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactTable } from './components/contact_list';
import ContactAddNew from './components/contact_new';
import Contact from './components/contact_schema';
import ContactSearch from './components/contact_search';
import { Card } from 'react-bootstrap';


export interface AppState {
  filterText: string;
  contacts: Array<Contact>;
}

export interface AppProps {

}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      filterText: '',
      contacts : [
        {
          name: 'Tan Do', 
          phone: '0987654321', 
          email: 'tan.do@sample.com'
        },
      ]
    };
  }

  addContact(contact: Contact) {
    this.state.contacts.push(contact);
    this.setState({ contacts: this.state.contacts });
  }
  
  handleFilterTextInput(filterText: string) {
    this.setState({
      filterText: filterText
    });
  }
  
  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <ContactSearch 
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput.bind(this)}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <ContactAddNew addContact={this.addContact.bind(this)}/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <ContactTable
              contacts={this.state.contacts}
              filterText={this.state.filterText}
            />
          </Card.Body>
        </Card>
        
      </>
    )
  }
}

export default App;
