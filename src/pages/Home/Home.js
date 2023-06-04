import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import banner from '../../Assets/jakub-kapusnak-sDbj1dFlFPU-unsplash.jpg';
import Food2 from '../../Animations/ThirdAnimation'
import Food1 from '../../Animations/SecondAnimation'
import Food from '../../Animations/FirstAnimation/FirstAnimation';
import MultipleItems from './Carousel/Carousel';

const Home = () => {
  return (
    <header>
      <div class="container">
        <img src={banner} alt="banner" width="1000" height="300" />
        <div class="center">
          <h1>Delicious food for your cravings</h1>
          <p>We amde fresh & healthy meals with different resipes</p>
          <div className="btn">
          <Link to="/menu"><button className="view-menu">
              <span class="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">View Menu</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
      
      <MultipleItems />

      <div className='about'>
      <div className='about-heading'>
        <h1>Explore</h1>
        <p>explore our dishes</p>
      </div>
      <div className='first-container'>
        <Food className="animation"/>
        <div>
        <h1>Discover a World of Exquisite Cuisines</h1>
        <p>Immerse yourself in a culinary journey like no other, as you explore a diverse range of delectable dishes from around the world. From authentic Italian pasta to tantalizing Indian curries, indulge your taste buds in a symphony of flavors</p>
        </div>
      </div>
      <div className='first-line'></div>
      <div className='second-container'>
      <div>
      <h1>Indulge in Chef-Designed Gastronomic Delights</h1>
        <p>Elevate your dining experience with our chef-prepared, restaurant-quality meals. Our skilled culinary team meticulously crafts each dish, infusing creativity, expertise, and a passion for gastronomy into every bite. Be prepared to be amazed as you savor the extraordinary flavors and artistry that our chefs bring to the table.</p>
        </div>
        <Food1 className="animation"/>
      </div>
    <div className='second-line'></div>
      <div className='third-container'>
        <Food2 className="animation"/>
        <div>
        <h1>Nourish Your Body with Wholesome Options:</h1>
        <p>Prioritize your well-being with our menu of nutritious and balanced meal choices. We believe that healthy food should never compromise on taste. Explore our thoughtfully curated selection of nourishing dishes, packed with essential nutrients, fresh produce, and wholesome ingredients. Fuel your body while savoring delicious flavors that leave you feeling satisfied and energized.</p>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Home