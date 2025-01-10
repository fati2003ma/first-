import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function AddFriends() {
    const [friends, setFriends] = useState([]); // State for storing friends data
    const [isLoaded, setIsLoaded] = useState(false); // State to track loading status

    useEffect(() => {
        // Fetch friends data from JSON file
        axios.get("/data/friends.json")
            .then(res => {
                setFriends(res.data); 
                setIsLoaded(true); 
            })
            .catch((err) => {
                console.error('Error fetching friends:', err); // Error handling
            });
    }, []);

    // OwlCarousel options
    const carouselOptions = {
        loop: true,
        margin: 5,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    };
      return (
        <div className="view friends smaller-margin">
          <div className="upper">
            <h6>People you may know</h6>
            <div className="dots">
              <div className="dot" />
            </div>
          </div>
    
          {isLoaded ? (
            <OwlCarousel className="owl-theme owl-carousel people" {...carouselOptions}>
              {friends.map((friend) => (
                <div className="item" key={friend.id}>
                  <div className="person-img">
                    <div className="icon">×</div>
                    <img src={friend.profilePicture} alt={friend.name} />
                  </div>
                  <div className="info">
                    <h4>{friend.name}</h4>
                    <span>{friend.mutualFriends} mutual friends</span>
                    <button>Add Friend</button>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <p>Loading...</p> // Affiche "Loading..." tant que les données ne sont pas chargées
          )}
        </div>
      );
    }
    
    export default AddFriends;