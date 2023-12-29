import React from 'react';
import { useState } from 'react';
import ContactRow from './ContactRow';


const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8" , phone: "888-888-8888", email: "bb8@droids.com" }
];

// const [contacts, setContacts] = useState(dummyContacts)  // add the dummy contacts (data) to your application as state. Import the use state hook and use it to create contacts and setContacts variables. use dummyContacts array as your defualt value.

function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState(dummyContacts);
        //console.log("Contacts: ", contacts);
        const [loading, setloading] = useState(true);

    useEffect(()=> {
        async function fetchContacts() {
            try {
               const response = await fetch(
                "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
               ); //test the response from api by console logging it to get array of contatcs from API
               const result = await response.json();
               setContacts([...dummyContacts, ...result]);
               setloading(false);
            } catch (error) {
              console.error(error);
              setloading(false); //sets loading to false even on error.Also sets an error state and display an error message to the user 
            }
        }
        fetchContacts()
    }, []);

    if (loading) {
        return <p>Loading...</p> //displays a loading indicator while fetching data
    }

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} />;
            })}
            </tbody>
        </table>
    );
}

export default ContactList;

//Lines 6 - 10: An array of contacts. We need to render a ContatcRow for each of them. 
//lines 31-33 Map over data here . We will 'escape' into Javascript and map over an array of contacts here
//Can you observe the three new rows rendered to the page?
//Important: Resuable components 
//line 18: After this, we need to define an async function that fetches our data and sets it to the state.
//line 21-23: Use the fetch() API and pass it the given url
//line 24: Parse the response from the API with the .json() method.
//Test the response from the API by console logging it to make sure you get an array of contacts from the API
//line 25: Use the setContacts function to reset the contacts held in state. Call the function after you have defined it 
//Console log your contacts state variable to double check that the data is held in state 
