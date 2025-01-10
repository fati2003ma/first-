import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Rooms() {
  const [rooms, setRooms] = useState([]); // State to store room data
  const [isLoaded, setIsLoaded] = useState(false); // State to track loading status

  useEffect(() => {
    axios
      .get('/data/rooms.json')
      .then((res) => {
        setRooms(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error('Error fetching room data:', err);
        setIsLoaded(true); // Mark as loaded even in case of an error
      });
  }, []);

  const carouselRooms = {
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
                items: 10
            }
        }
    };


  return (
    <div className="create-post view smaller-margin">
      <div className="upper">
        <div className="title">
          <div className="icon">
            <img src="img/icons/video-room.svg" alt="Room Icon" />
          </div>
          <span>Rooms</span>
        </div>
        <a href="#">Create</a>
      </div>

      {isLoaded ? (
        <OwlCarousel className="owl-theme owl-carousel rooms" {...carouselRooms}>
          {rooms.map((room) => (
            <div className="item" key={room.id}>
              <div className="user">
                <div className="profile">
                  <img
                    src={room.profilePicture}
               
                  />
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Rooms;
