import React from "react";
//Add data to app as a state. 
import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";


const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({setSelectedContactId}) {
    //Import the useState hook and use it to create contacts and see line 3
    //setContacts variables. Use the dummyContacts array as default value.
    const [contacts, setContacts] = useState(dummyContacts);
    
   

    //1. get the data from API
    //2. Look at data
    //3. somehow format the data into a an array of objects like dummyContacts
    useEffect(() => {
        //Declare the async fetchContacts the call fetchContacts
        async function fetchUsers() {
            try{
                //fetch logic will go here
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const json = await response.json();
                console.log(json);
                setContacts(json);
            } catch (error) {
                console.log.error(error);
            }
        }
        fetchUsers();
    },[]);
    console.log(contacts);
    return(
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
                {contacts.map((contactItem) => (
                    <ContactRow contact={contactItem} setSelectedContactId={setSelectedContactId}/>
                ))}
       
            </tbody>
        </table>
    );
}