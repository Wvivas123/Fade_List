import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./Carousel.css"



const slideImages = [
  'https://images.squarespace-cdn.com/content/v1/573b59818a65e271117a03db/1556343407588-45I0YZMU1XYTVZORB7RR/ke17ZwdGBToddI8pDm48kGzxp6q9BHFCd5YoYkIewxIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkErHhhHRo_pNMu5i3BkxJ9vTulVVaq9L1kq2A6r6Uqu7zs2yPjc1ECvpa5Zm_kMqw/West-Park-Barber-Shop-Premier-Lounge_Home6.jpg?format=2500w',
  'http://nywebcare.com/img/shop-image-3.png',
  'https://cdn-image.travelandleisure.com/sites/default/files/1553275138/barbershop-interior-full-room-SECRETBARBER0319.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;