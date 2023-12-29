import React, { useEffect, useState } from 'react';

function SelectedContact({ setselectedContactId, selectedContactId })  {
    //state for holding the single contact
    const [contact, setContact] = useState(null);
    //const [error, setError] = useState(null);

    //useEffect to fetch data when the component mounts or when SelectedContactId changes
    useEffect(() => {
        const fetchContact = async () => {
            try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        
        if (response.ok) {
            const contactData = await response.json();
            setContact(contactData);
        } else {
            console.error('Error fetching contact data');
        }
    } catch (error) {
        console.error('Error:' , error);
    }
  };
        
    fetchContact();
}, [selectedContactId]);

      return (
        <div>
            {contact ? ( 
                <div>
                    <h2>Contact Details</h2>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            ) : (
            <p>No contact selected</p>
            )}
                 <button onClick={() => setSelectedContactId(null)}>
                 </button>
          </div>
        );
    }
        


      export default SelectedContact; 