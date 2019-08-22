import React, { Component } from 'react';
import './index.css';

import Slideshow from '../components/Carousel/Carousel';


class IndexPage extends Component {
  render() {
    return(
    <React.Fragment>
   
  
   <div class="Logo">
   <h1 > Welcome to Fade List</h1>
    </div>
    
    <div class="about">
    <p>Fade List is perfect for people looking to maxamize their profits by listing thier open time slots at a discount. Fade list takes the community of craigslist and bring it to the world of hair stylist.</p>
    
    </div>
    <div>
      
    </div>
    
      <Slideshow></Slideshow>
    </React.Fragment>
    )  
}
}

export default IndexPage;