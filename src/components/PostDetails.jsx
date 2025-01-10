import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PostDetails() {
    const [posts, setPosts] = useState([]);
        
    useEffect(() => {
        axios.get("/data/posts.json")
            .then(res => {
                setPosts(res.data);
            })
            .catch((err) => console.error('Error fetching posts:', err));
    }, []);
    
    return (
        <div className="view view-post-container smaller-margin">
            {posts && posts.map((post, index) => (
                <div className="view-post" key={index}>
                    <div className="upper">
                        <div className="d-flex">
                            <div className="user">
                                <div className="profile">
                                    <img src={post.userProfilePic || "img/avatar/5.jpg"} alt="User profile" />
                                </div>
                            </div>
                            <div className="info">
                                <h6 className="name">{post.userName || "Diana Barry"}</h6>
                                <span className="time">{post.time || "1 hour ago"}</span>
                            </div>
                        </div>
                        <div className="dots">
                            <div className="dot" />
                        </div>
                    </div>
                    <div className="desc">
                        <p>{post.description || "Travelling to the future 🌟 , it's already 2020 🙋‍♂🌈🌴"}</p>
                    </div>
                    <div className="post-img">
                        <img src={post.postImage || "img/posts/1.jpg"} alt="Post" />
                    </div>
                    <div className="actions-container">
                        <div className="action">
                            <div className="icon">
                                <img src="img/icons/thumbs-up.svg" alt="Like" />
                            </div>
                            <span>like</span>
                        </div>
                        <div className="action">
                            <div className="icon">
                                <img src="img/icons/comment.svg" alt="Comment" />
                            </div>
                            <span>comment</span>
                        </div>
                        <div className="action">
                            <div className="icon">
                                <img src="img/icons/share.svg" alt="Share" />
                            </div>
                            <span>share</span>
                        </div>
                    </div>
                    <div className="write-comment">
                        <div className="user">
                            <div className="profile">
                                <img src="img/avatar/hero.png" alt="User" />
                            </div>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Write a comment" />
                            <div className="media">
                                <div className="icon">
                                    <img src="img/icons/camera.svg" alt="Camera" />
                                </div>
                                <div className="icon">
                                    <img src="img/icons/image.svg" alt="Image" />
                                </div>
                                <div className="icon">
                                    <img src="img/icons/smile-2.svg" alt="Smile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostDetails;
