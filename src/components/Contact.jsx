import React from 'react'

function Contact({profilePicture, name}) {
    return (
        <div className="user">
            <div className="profile">
                <img src={profilePicture} alt />
            </div>
            <h4>{name}</h4>
        </div>
    )
}

export default Contact
