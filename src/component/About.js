import React from 'react'
import Common from './Common';

const About = () => {
  return (
    <>
        <Common 
          name="welcome to About Page"
          img="https://source.unsplash.com/600x400/?helicopter"
          visit='/contact'
          btnname='Contact Now'
        />
    </>
  )
}

export default About;
