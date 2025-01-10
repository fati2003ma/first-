import React from 'react'

function Story({title, image, profilePicture}) {
    return (
        <div className="item">
                        <div className="overlay">
                            <div className="person">
                                <div className="profile">
                                    <img src={profilePicture} alt />
                                </div>
                            </div>
                            <h4>{title}</h4>
                        </div>
                        <div className="story-image">
                            <img src={image} alt />
                        </div>
                    </div>
    )
}

export default Story
