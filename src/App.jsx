import './App.css';
import { useState } from 'react'; 
import ContactList from './Components/ContactList.jsx';
import SelectedContact from './Components/SelectedContact.jsx';

 
 
 function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <ContactList />
    )}
    </>   
  );
  }



  


    
        

export default App; 

//Line 6: Component or 'view' 1
//Line 7: Component or  'view' 2
//check Puppy Pals workshop to see how to Add some functionality so that when a user clicks on a specific contact row, it navigates to a separate view showing the selected contact and details about them.

