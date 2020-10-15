import React from 'react';

import Navbar from './components/Navbar/Navbar';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Slider from './components/Slider/Slider';
import Sections from './components/Sections/Sections';
import NewArrivals from './components/NewArrivals/NewArrivals';
import Week from './components/Week/Week';
import Sellers from './components/Sellers/Sellers';
import OurServices from './components/Our-Services/Service';
import Blogs from './components/Blogs/Blogs';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <HeaderBar />
      <Navbar />
      <Slider />
      <Sections />
      <NewArrivals />
      <Week />
      <Sellers />
      <OurServices />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App;
