import { useEffect, useState } from "react";



export default function SelectedContact({
    selectedContactId,
    setSelectedContactId,
}) {
    const [contact, setContact]=useState(null);
    useEffect(() => {
        async function fetchSingleUSer() {
          try{
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const json = await response.json();
            console.log(json);
            setContact(json);
    
          } catch(error) {
            console.log(error);
          }
      
        }
        fetchSingleUSer();
      }, [selectedContactId]);


    return ( 
        <div>
        <h1>{contact?.name}</h1>
        <p>{contact?.email}</p>
        <p>{contact?.address}</p>
        <p>{contact?.phone}</p>
        </div>
    );
}