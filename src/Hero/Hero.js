import React from 'react';
import Image from '../Hero/images/controller.png'
import Image2 from '../Hero/images/tynker-by.png'
import Image3 from '../Hero/images/winter.webp'
import Image4 from '../Hero/images/swosh.svg'
import Image5 from '../Hero/images/markz.png'
import './Hero.css'

const Hero = () => {
    return(
       <>
       <div className='mainHeroPage'>
         <div className='heroPage'>
              <img src={Image2} className='Logo'/>
              <div className='Navs'>
                <a className='navPad' href='#'><img src={Image} className='Pad' /> PLAY</a>
                <a className='navPa' href='#'>PARENTS</a>
                <a className='navEdu' href='#'>EDUCATORS</a>
                <a className='navCode' href='#'>WHY CODE?</a>
     
              </div>
           
               <div className='Btn'>
                  <button className='Btn1'>JOIN FOR FREE</button>
                   <button className='Btn2'>LOG IN </button>
                 </div>
            </div>

                <div className='mainHeroContent'>
                  <div className='heroContent'>
                      <h1>Coding Made Easy</h1>
                      <p className='para1'>The fun to learn programming and develop <br/>
                       problem-solving & critical thinking
                      skills! Ages 5-18</p>

                      <h4>GET STARTED FOR FREE</h4>
                      <p className='para2'>At-home plans from $9 per month</p>

                  </div>
                    
                     <img src={Image3} className='Snow'/>

                </div>
                <div className='Waver'>
                      <img src={Image4} className='wave'/>
                      </div>

                      

       </div>
       <img src={Image5} className='Help' />
        </>
    );
}
export default Hero