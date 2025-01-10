import React, { useEffect, useState } from 'react'
import Story from './Story'
import axios  from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Stories() {
    const [stories, setStories] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
        
        useEffect(() => {
            axios.get("/data/stories.json").then(res => {
                setStories(res.data);
                setIsLoaded(true);
            })
        }, []);
        
        const options = {
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
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
                    items: 5
                }
            }
        };
    
    
    return (
        <div className="stories">
            <div className="owl-controls">
                <div className="owl-nav">
                    <div className="controllers nxtBtn">
                        <img src="img/icons/arrow-right.svg" alt />
                    </div>
                </div>
            </div> 
           
           {
            isLoaded ? (
                <OwlCarousel className='owl-theme owl-carousel' {...options}>
                
                <div className="item">
                        <div className="overlay first">
                            <div className="create">
                                <div className="icon">
                                    <img src="img/icons/plus.svg" alt />
                                </div>
                                <span>Create a Story</span>
                            </div>
                        </div>
                        <div className="story-image">
                            <img src="img/avatar/hero.png" alt />
                        </div>
                    </div>
                    {stories && stories.map((story, index) => {
                     return <Story key={index} title={story.title} image={story.image} profilePicture={story.profilePicture} />
                    })}
                </OwlCarousel>
            ) : (<>Not Loaded</>)
           }
            
        </div>
    )
}

export default Stories
