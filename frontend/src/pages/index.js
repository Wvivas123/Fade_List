import React, { Component } from 'react';
import './index.css';

import Slideshow from '../components/Carousel/Carousel';


class IndexPage extends Component {
  render() {
    return(
    <React.Fragment>
   
  <div >
   <div class="Logo">
   <h1>Welcome to</h1>
   <h1>Fade</h1> 
	
	<h1>List</h1>
	
    </div>
    
    <div class="about">
    <p>Fade List is perfect for people looking to maximize their profits by listing their open time slots at a discount. Fade list takes the community of craigslist and bring it to the world of hair stylist. Fade List allows you to make the most of your time behind the chair, as well as, gives consumers a chance to get a fresh fade at a discount. </p>
    
    </div>
    <div>
      
    </div>
    
      <Slideshow></Slideshow>
      </div>
    </React.Fragment>
    )  
}
}

export default IndexPage;