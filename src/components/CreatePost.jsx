import React from 'react'

function CreatePost() {
    return (
        <div className="view create-post">
            <div className="input">
                <div className="user">
                    <div className="profile">
                        <img src="img/avatar/hero.png" alt />
                    </div>
                </div>
                <input type="text" placeholder="What on your mind, Anne?" name id />
            </div>
            <div className="media">
                <div className="category">
                    <div className="option">
                        <div className="icon">
                            <img src="img/icons/video-live.svg" alt />
                        </div>
                        <span>Live video</span>
                    </div>
                    <div className="option">
                        <div className="icon">
                            <img src="img/icons/photos.svg" alt />
                        </div>
                        <span>photo/video</span>
                    </div>
                    <div className="option">
                        <div className="icon">
                            <img src="img/icons/smile.svg" alt />
                        </div>
                        <span>feeling/activity</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
