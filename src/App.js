import React from 'react';
// import Header from './Components/Header'
// import Footer from './Components/Footer'
// import Contact from './Components/Contact'
// import Feature7 from './Component/Feature7'
// import Feature6 from './componentx/Feature6'
// import Slider from './Components/Slider'
// import 'antd/dist/antd.css'
import Hero from './Hero/Hero';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Tdiv';
import Section5B from './Section5B/Cards';
import Section6 from './Section6/Tdiv2';
import Section7 from './Section7/Map';
import Footer from './Footer/Footer';



// import Mui from './Components/Mui.js'
const App = () => {
  return(
    <div >
          <Hero/>    

           <Section2/>
           <Section3/>
           <Section4/>
           <Section5/>
           <Section5B/>
           <Section6/>
           <Section7/>
            <Footer/>




             {/* <Slider/>
            <Feature6/>  
           <Feature7/>
            <Contact/>
           <Footer/>   */}
    </div>

  );
}
export default App