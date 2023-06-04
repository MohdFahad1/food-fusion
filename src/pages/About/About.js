import React from 'react'
import './About.css'
import aboutImg from '../../Assets/about-bg.jpg'

const About = () => {
  return (
    <>
      <div className='about-us'>
        <div className='about-us-container'>
          <img src={aboutImg} alt="food"/>
          <h1>About <br /> Food Fusion</h1>
        </div>
      </div>
    </>
  )
}

export default About