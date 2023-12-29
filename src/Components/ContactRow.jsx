import React from 'react'; 

function ContactRow({ setSelectedContactId, contact })  {
    const {name, email, phone } = contact; 
  
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
    </tr>
  );
}



export default ContactRow; //Export as a named export  




//Line 1: ContactRow = component, which is also made the export default. This component is responsible for rendering a single row (tr element), with three column elements (td)
//The data needs to be passed down as props
