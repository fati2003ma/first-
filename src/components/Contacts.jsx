import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import axios  from "axios";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        axios.get("/data/contacts.json").then(res => {
            setContacts(res.data);
        })
        
    }, []);



    return (
        <div className="online">
            <h6 className="title">
                contact
            </h6>
            {
                contacts && contacts.map((contact, index) => {
                    return <Contact key={index} profilePicture={contact.profilePicture} name={contact.name} />
                })
            } 
        </div>
    )
}

export default Contacts
